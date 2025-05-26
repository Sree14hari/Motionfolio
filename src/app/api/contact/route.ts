
import { type NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';

const web3FormsAccessKey = process.env.WEB3FORMS_ACCESS_KEY;

if (!web3FormsAccessKey) {
  console.error("WEB3FORMS_ACCESS_KEY is not set. Email sending via Web3Forms will fail.");
}

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500),
});

export async function POST(request: NextRequest) {
  if (!web3FormsAccessKey) {
    console.error('Missing WEB3FORMS_ACCESS_KEY in environment variables.');
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

    const formData = {
      access_key: web3FormsAccessKey,
      name: name,
      email: email,
      message: message,
      subject: `New Contact Form Submission from ${name}`,
      from_name: "Motionfolio Contact Form", // You can customize this
    };

    const web3FormsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const web3FormsResult = await web3FormsResponse.json();

    if (web3FormsResult.success) {
      return NextResponse.json({ message: 'Email sent successfully via Web3Forms!', data: web3FormsResult }, { status: 200 });
    } else {
      console.error('Web3Forms API Error:', web3FormsResult.message);
      return NextResponse.json({ error: 'Failed to send email via Web3Forms.', details: web3FormsResult.message }, { status: 500 });
    }

  } catch (err) {
    console.error('API Route Error:', err);
    const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred.';
    return NextResponse.json({ error: 'An unexpected error occurred on the server.', details: errorMessage }, { status: 500 });
  }
}
