// src/app/api/user/route.ts
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get('Authorization');
  if (!authHeader) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const token = authHeader.split(' ')[1];  // Extract token from 'Bearer <token>'

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    const accessToken = (decoded as any).accessToken;

    const userResponse = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const userData = await userResponse.json();

    if (userData.message === "Bad credentials") {
      return NextResponse.json({ error: 'GitHub authentication failed' }, { status: 403 });
    }

    return NextResponse.json(userData);
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
  }
}




// import { NextRequest, NextResponse } from 'next/server';
// import jwt from 'jsonwebtoken';

// export async function GET(request: NextRequest) {
//   const authHeader = request.headers.get('Authorization');
//   if (!authHeader) {
//     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
//   }

//   const token = authHeader.split(' ')[1];
//   let accessToken;

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!);
//     accessToken = (decoded as any).accessToken;
//   } catch {
//     return NextResponse.json({ error: 'Invalid token' }, { status: 403 });
//   }

//   const userResponse = await fetch('https://api.github.com/user', {
//     headers: { Authorization: `Bearer ${accessToken}` },
//   });

//   const userData = await userResponse.json();
//   return NextResponse.json(userData);
// }
