import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex gap-6 p-4 bg-gray-100 shadow">
      <Link href="/">Home</Link>
      <Link href="/our">Our</Link>
      <Link href="/delivery">Delivery</Link>
    </nav>
  );
}
