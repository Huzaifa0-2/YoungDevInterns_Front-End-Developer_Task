// src/app/login/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      fetch(`/api/auth?code=${code}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.token) {
            localStorage.setItem('authToken', data.token);
            router.push('/dashboard');
          } else {
            alert(`Login failed: ${data.error} - ${data.details || 'Unknown error'}`);
          }
        })
        .catch((error) => {
          alert(`Error during login: ${error.message}`);
          console.error(error);
        });
    }
  }, [router]);

  const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=read:user`;

  return (
    <div className="flex justify-center items-center h-screen">
      <a
        href={githubLoginUrl}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Login with GitHub
      </a>
    </div>
  );
}




// 'use client';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Login() {
//   const router = useRouter();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const code = urlParams.get('code');

//     console.log("GitHub Client ID in useEffect:", process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID);  // Debug the client_id here

//     if (code) {
//       fetch(`/api/auth?code=${code}`)
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.token) {
//             localStorage.setItem('authToken', data.token); // Store JWT in localStorage
//             router.push('/dashboard');
//           } else {
//             alert('Failed to log in');
//           }
//         })
//         .catch((error) => {
//           alert('Error during login');
//           console.error(error);
//         });
//     }
//   }, [router]);

//   const githubLoginUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}&scope=read:user`;

//   console.log("GitHub Login URL:", githubLoginUrl);  // Log the final login URL

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <a
//         href={githubLoginUrl}
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Login with GitHub
//       </a>
//     </div>
//   );
// }
