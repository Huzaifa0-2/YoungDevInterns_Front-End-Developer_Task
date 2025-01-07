import Image from 'next/image';


export default function LazyComponent() {
    return (
      <div>
        <Image
        className="rounded-lg"
        src="/homeimg.avif"
        alt="Code Image"
        width={237}
        height={158}
        priority={false} // Enables lazy loading by default
      />
      </div>
    );
  }
  