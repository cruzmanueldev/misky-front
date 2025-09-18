"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  UserOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import { Divider } from 'antd';


export default function Navbar() {

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Tienda" },
    { href: "/our", label: "Nosotros" },
      { href: "/delivery", label: "Delivery" },
  ];

  return (
    <nav className="flex gap-6 p-4 bg-white shadow justify-between">
      <div>Logo</div>

      <div className="flex gap-8 text-[#683910]">
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
                <span className="absolute bottom-0 left-1/2 w-[80%] border-b-4 border-[#bce2f3] -translate-x-1/2"></span>
              )}

              {!isActive && (
                <span className="absolute bottom-0 left-1/2 w-[0%] border-b-4 border-[#bce2f3] -translate-x-1/2 transition-all duration-300 group-hover:w-[80%]"></span>
              )}
            </Link>
          );
        })}
      </div>

      <div className="flex flex-row items-center justify-center">
        <UserOutlined style={{fontSize:'20px'}} className="px-2 cursor-pointer" />
        <div className="bl-1 border-l border-black px-2 flex py-1 justify-center items-center">
          <ShoppingCartOutlined style={{fontSize:'20px'}} className="cursor-pointer"/>
        </div>
      </div>
    </nav>
  );
}
