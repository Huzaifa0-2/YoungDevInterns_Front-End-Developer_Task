'use client'

import Wrapper from '@/components/wrapper';
import Navbar from '@/components/navbar';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <Wrapper>
      <Navbar/>
    <main>
      <Head>
        <title>NextJs Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>      
      <div className="space-y-6 font-mono">
        <div className='flex flex-col items-center'>
          <h1 className="text-7xl font-bold font-serif ml-">Next <span className='bg-orange-600 rounded text-black'>Js</span></h1>
          <Image className='rounded-3xl mt-8 mb-4' src="/homeimg.avif" alt="" width={237} height={158}/>
          <p>A Blog by Huzaifa for Coders</p>
        </div>
      </div> 

      <div className="space-y-6 font-mono mt-8">
        <div className="font-bold text-3xl">
          <h2>Popular Blogs</h2>
        </div>
        <div>
          <h3 className="font-semibold text-xl">How to Learn Next.js in 2024</h3>
          <p className="font-light">NextJs is the Frame is the latest evolution of React.</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">How to Learn Next.js in 2024</h3>
          <p className="font-light">NextJs is the Frame is the latest evolution of React.</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">How to Learn Next.js in 2024</h3>
          <p className="font-light">NextJs is the Frame is the latest evolution of React.</p>
        </div>
      </div>
    </main>
    </Wrapper>
  );
}
