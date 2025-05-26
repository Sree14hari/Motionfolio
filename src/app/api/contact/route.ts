
// This API route is no longer used for the contact form,
// as submission is now handled directly on the client-side to Web3Forms.
// You can remove this file or repurpose it if needed for other backend logic.

import { type NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: 'This API route is not active for contact form submission. Please submit from the client.' },
    { status: 404 }
  );
}

    