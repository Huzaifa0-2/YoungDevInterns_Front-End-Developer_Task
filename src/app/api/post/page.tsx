// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// interface Post {
//   id: number;
//   title: string;
//   body: string;
// }

// export default function PostsPage() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => {
//         setPosts(response.data);
//         setLoading(false);
//       })
//       .catch((error) => console.error('Error fetching posts:', error));
//   }, []);

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold">Posts</h1>
//       <ul className="mt-4">
//         {posts.map((post) => (
//           <li key={post.id} className="border-b py-2">
//             <h2 className="font-semibold">{post.title}</h2>
//             <p>{post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


export default async function PostsPage() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      next: { revalidate: 10 }, // Revalidate every 10 seconds for ISR
    });
    const posts = await res.json();
  
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Using For 3rd Party API - JSONPlaceholder - Posts </h1>
        <ul className="space-y-2">
          {posts.slice(0, 10).map((post: any) => (
            <li key={post.id} className="p-4 border rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <a href={`/post/${post.id}`} className="text-blue-500 underline">
                Read More
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  