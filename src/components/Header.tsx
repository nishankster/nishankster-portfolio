import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-600">
          nishankster.com
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/work" className="hover:text-blue-600 transition">Work</Link>
          <Link href="/photography" className="hover:text-blue-600 transition">Photography</Link>
          <Link href="/running" className="hover:text-blue-600 transition">Running</Link>
          <Link href="/blog" className="hover:text-blue-600 transition">Blog</Link>
        </nav>
      </div>
    </header>
  );
}