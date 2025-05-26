
import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

// Initialize Resend with your API key from environment variables
const resendApiKey = process.env.RESEND_API_KEY;
const contactFormToEmail = process.env.CONTACT_FORM_TO_EMAIL; // Your email address
const contactFormFromEmail = process.env.CONTACT_FORM_FROM_EMAIL || 'onboarding@resend.dev'; // Resend's default or your verified domain

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set. Email sending will fail.");
}
if (!contactFormToEmail) {
  console.error("CONTACT_FORM_TO_EMAIL is not set. Email sending will fail to deliver to the intended recipient.");
}

// It's better to initialize Resend only if the API key is present,
// but for this structure, we initialize it globally and check within the handler.
// A more robust way would be to initialize it inside the POST handler after checks.
const resend = new Resend(resendApiKey);

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500),
});

export async function POST(request: NextRequest) {
  // Explicitly check for required environment variables at the start of the handler
  if (!resendApiKey || !contactFormToEmail) {
    console.error('Missing RESEND_API_KEY or CONTACT_FORM_TO_EMAIL in environment variables.');
    return NextResponse.json(
      { error: 'Server configuration error: Email service is not properly configured.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid input.', issues: validation.error.issues }, { status: 400 });
    }

    const { name, email, message } = validation.data;

    const { data, error } = await resend.emails.send({
      from: `Contact Form <${contactFormFromEmail}>`,
      to: [contactFormToEmail],
      subject: `New Contact Form Submission from ${name}`,
      reply_to: email,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `
        New Contact Form Submission:
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email.', details: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!', data }, { status: 200 });
  } catch (err) {
    console.error('API Route Error:', err);
    // Check if err is an instance of Error before accessing err.message
    const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
    return NextResponse.json({ error: 'An unexpected error occurred on the server.', details: errorMessage }, { status: 500 });
  }
}
