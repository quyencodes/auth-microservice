import Image from 'next/image';
import Link from 'next/link';
import Button from '@mui/material/Button';

interface NavbarProps {}

export default function Header({}: NavbarProps) {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <nav className="absolute w-full bg-gray-50/90 shadow-md">
        <div className="container relative mx-auto flex h-16 items-center justify-between px-8">
          <Link href="/">
            <Image />
          </Link>

          <div className="flex gap-2">
            <Button variant="ghost" className="hover:bg-black/10">
              Home
            </Button>
            <Button variant="ghost" className="hover:bg-black/10">
              About
            </Button>
            <Button variant="ghost" className="hover:bg-black/10">
              Join Us
            </Button>
            <Button variant="outlined">Sign In</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}
