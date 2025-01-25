// src/app/api/auth/route.ts
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    // Request the access token from GitHub
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',  // Correct content type for GitHub token request
      },
      body: new URLSearchParams({
        client_id: process.env.GITHUB_CLIENT_ID!,
        client_secret: process.env.GITHUB_CLIENT_SECRET!,
        code,
      }).toString(),  // Ensure URLSearchParams is converted to string
    });

    const tokenData = await tokenResponse.text();  // Get the raw response as text

    if (!tokenResponse.ok) {
      // Log the error details if the response isn't OK
      console.error('GitHub OAuth Error:', tokenData); // Log error details for debugging
      return NextResponse.json({ error: 'Failed to exchange code for token', details: tokenData }, { status: 500 });
    }

    // If the response is OK, process the token data
    const tokenJson = new URLSearchParams(tokenData);  // Parse response text into query params
    const accessToken = tokenJson.get('access_token');
    
    if (!accessToken) {
      return NextResponse.json({ error: 'Access token missing in response' }, { status: 400 });
    }

    // Sign a JWT using the GitHub token
    const jwtToken = jwt.sign(
      { accessToken },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    return NextResponse.json({ token: jwtToken }, { status: 200 });
  } catch (error) {
    console.error('Error fetching GitHub OAuth token:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: (error as Error).message }, { status: 500 });
  }
}




// import { NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const code = searchParams.get('code');

//   console.log("GitHub Code received:", code);  // Log the received code

//   if (!code) {
//     return NextResponse.json({ error: 'No code provided' }, { status: 400 });
//   }

//   // Log the environment variable for debugging
//   console.log("GitHub Client ID:", process.env.GITHUB_CLIENT_ID);  // Server-side variable, no NEXT_PUBLIC_ prefix

//   const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({
//       client_id: process.env.GITHUB_CLIENT_ID,
//       client_secret: process.env.GITHUB_CLIENT_SECRET,
//       code,
//     }),
//   });

//   const tokenData = await tokenResponse.json();

//   console.log("GitHub OAuth Response:", tokenData);  // Log the token response

//   if (tokenData.error) {
//     return NextResponse.json({ error: tokenData.error }, { status: 400 });
//   }

//   // Sign a JWT for the user
//   const jwtToken = jwt.sign(
//     { accessToken: tokenData.access_token },
//     process.env.JWT_SECRET!,
//     { expiresIn: '1h' }
//   );

//   return NextResponse.json({ token: jwtToken }, { status: 200 });
// }
