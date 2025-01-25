'use client';

import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<{ login: string; avatar_url: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');

    if (token) {
      fetch('/api/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError('Session expired or invalid token');
            localStorage.removeItem('authToken');
          } else {
            setUser(data);
          }
        })
        .catch((err) => {
          setError('Failed to fetch user data');
          console.error('Error fetching user data:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setError('No token found. Please log in.');
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {user?.login}</h1>
      {user?.avatar_url && (
        <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
      )}
    </div>
  );
}




// 'use client';

// import { useEffect, useState } from 'react';

// export default function Dashboard() {
//   const [user, setUser] = useState<{ login: string; avatar_url: string } | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem('authToken');

//     if (token) {
//       fetch('/api/user', {
//         headers: {
//           Authorization: `Bearer ${token}`, // Send the JWT token in Authorization header
//         },
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.error) {
//             alert('Session expired, please log in again');
//             localStorage.removeItem('authToken');
//           } else {
//             setUser(data); // Set user data after successful authentication
//           }
//         })
//         .catch(() => {
//           alert('Failed to fetch user data');
//         });
//     } else {
//       alert('Please log in');
//     }
//   }, []);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">Welcome, {user.login}</h1>
//       <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
//     </div>
//   );
// }
