import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {}

export default function Header({}: NavbarProps) {
  return (
    <div className="sticky top-0 z-50 flex w-full justify-center">
      <nav className="absolute w-full bg-gray-50/90 ">
        <div className="container relative mx-auto flex h-16 items-center justify-between px-8">
          {/* <Link>
            <Image></Image>
          </Link> */}

          <div>test</div>
        </div>
      </nav>
    </div>
  );
}
