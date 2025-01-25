// import React from 'react';

// interface Post {
//   id: number;
//   title: string;
// }

// export default async function PostsPage() {
//   // Fetch data from the custom API route
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post`, {
//     cache: 'no-store', // Disable caching for fresh data
//   });

//   if (!res.ok) {
//     return <p className="text-red-500">Failed to fetch posts.</p>;
//   }

//   const posts: Post[] = await res.json();

//   return (
//     <div className="space-y-4">
//       <h1 className="text-3xl font-bold">Posts from JSONPlaceholder</h1>
//       <ul className="space-y-2">
//         {posts.slice(0, 10).map((post) => (
//           <li key={post.id} className="p-4 border rounded">
//             <h2 className="text-xl font-semibold">{post.title}</h2>
//             <a href={`/post/${post.id}`} className="text-blue-500 underline">
//               Read More
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
