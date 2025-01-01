import React from 'react';

const Wrapper = ({ children, className }: any) => {
  return (
    <main className={`flex flex-col items-center justify-between max-w-4xl mx-auto p-4 ${className}`}>
      {children}
    </main>
  );
};

export default Wrapper;
