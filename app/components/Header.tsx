import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white px-[100px]">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <h1 className="text-xl font-bold cursor-pointer">NextApp</h1>
        <ul className="flex gap-4 justify-center">
          <li>
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
