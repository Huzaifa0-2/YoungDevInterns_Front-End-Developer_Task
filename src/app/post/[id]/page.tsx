interface Post {
  id: number;
  title: string;
  body: string;
}

export default async function PostPage({
  params,
}: {
  params: { id: string };
}) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) {
    return <p className="">No post found with id: <span className="bg-orange-600 rounded text-black">{params.id}</span></p>;
  }

  const post: Post = await res.json();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-lg">{post.body}</p>
      <a href="/api/post" className="text-blue-500 underline">
        Back to Posts
      </a>
    </div>
  );
}



// //'use client'
// // import React, { useState } from 'react'

// // export default function UserProfile ({params}: any) {
// //   const [count, setCount] = useState(0);
// //   return (
// //     <div className='bg-black flex flex-col items-center justify-center min-h-screen'>
        
// //               <div className=" items-center justify-between mx-auto">Count: 
// //                 <button
// //                     className="flex flex-col items-center justify-between mx-auto bg-orange-600 text-white px-4 py-2 rounded mt-4"
// //                     onClick={() => setCount(count + 1)}>{count}
// //                 </button>
// //               </div>

// //         <div className='text-3xl text-white'>Profile Page <span className='text-3xl bg-orange-600 rounded text-black'>{ params.id}</span>
// //         </div>
// //     </div>
// //   )
// // }

// 'use client'

// import React, { useState } from 'react'
// import { use } from 'react'
// import { useRouter, usePathname } from 'next/navigation'

// export default function UserProfile({ params }: { params: Promise<{ id: string }> }) {
//   const resolvedParams = use(params); // Unwrap the params promise
//   const [inputValue, setInputValue] = useState('');
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (inputValue.trim()) {
//       // Update the URL with the new value
//       router.push(`${pathname.replace(`/${resolvedParams.id}`, '')}/${inputValue}`);
//     }
//   };

//   return (
//     <div className="text-3xl text-white">
//       <h1>
//         Profile Page{' '}
//         <span className="text-3xl bg-orange-600 rounded text-black">
//           {resolvedParams.id}
//         </span>
//       </h1>
//       <form onSubmit={handleSubmit} className="mt-4">
//         <input
//           type="text"
//           placeholder="Enter a number"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           className="p-2 border rounded"
//         />
//         <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
//           Update URL
//         </button>
//       </form>
//     </div>
//   );
// }



