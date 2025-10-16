"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cart from "./home/cart/Cart";
import Menu from "./home/menu/Menu";
import Image from "next/image";
import LogoMisky from '@/assets/home/logo_misky.png'

export default function Navbar() {

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Tienda" },
    { href: "/products", label: "Productos" },
    { href: "/our", label: "Nosotros" },
      { href: "/delivery", label: "Formas de entrega" },
  ];

  return (
    <nav className="flex gap-6 py-2 px-2 md:px-4 items-center bg-white shadow justify-between">
      <div className="flex items-center justify-center gap-2">
        <Menu links={links}/>

        <Link href="/"
          className=""
        >
          <Image
            src={LogoMisky}
            alt="Misky - Reposteria artesanal"
            className="cursor-pointer"
            height={40}
          />
        </Link>
      </div>

      <div className="hidden md:flex gap-8 text-[#683910]">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="relative inline-block pb-1 group"
            >
              <strong>{link.label}</strong>
              {isActive && (
                <span className="absolute bottom-0 left-1/2 w-[80%] border-b-4 border-[#58BEEC] -translate-x-1/2"></span>
              )}

              {!isActive && (
                <span className="absolute bottom-0 left-1/2 w-[0%] border-b-4 border-[#58BEEC] -translate-x-1/2 transition-all duration-300 group-hover:w-[80%]"></span>
              )}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="px-2 flex justify-center items-center">
          <Cart/>
        </div>
      </div>
    </nav>
  );
}
