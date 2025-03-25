import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.svg" alt="Mint Logo" width={32} height={32} />
          <span className="font-bold">Mint</span>
        </Link>
      </div>
    </div>
  );
}
