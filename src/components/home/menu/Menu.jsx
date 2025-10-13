
import { Drawer} from 'antd';
import {
  MenuOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from 'react';

export default function Menu({links}) {

  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  return (
    <div className='flex md:hidden'>
      <MenuOutlined style={{fontSize:'20px'}} onClick={showDrawer} className="px-2 cursor-pointer" />
      <Drawer
        title="Misky"
        placement={'left'}
        closable={true}
        onClose={onClose}
        open={open}
        key={'left'}
        closeIcon={<CloseOutlined style={{color:'#683910', fontWeight:'700'}}/> }
      >
        <div className='flex flex-col gap-3 h-full justify-around items-center'>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative inline-block pb-1 group !text-[#683910] text-2xl"
                onClick={onClose}
              >
                <strong>{link.label}</strong>
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 w-[100%] border-b-4 border-[#58BEEC] -translate-x-1/2"></span>
                )}
              </Link>
            );
          })}

        </div>
      </Drawer>
    </div>
  );
}
