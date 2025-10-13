'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Modal, Button } from 'antd'
import WelcomeImg from '@/assets/home/welcome.png'

export default function Welcome() {
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {

    const navEntries = performance.getEntriesByType("navigation");
    const navigationType = navEntries[0]?.type;

    if (navigationType !== "reload") {
      setShowSuccess(true);
    }
  }, [])

  const handleClose = () => {
    setShowSuccess(false)
    localStorage.setItem('show_welcome', 'false')
  }

  return (
    <div>
      <Modal
        closable={false}
        maskClosable={true}
        open={showSuccess}
        footer={null}
        onCancel={handleClose}
        className='modal-welcome flex justify-center'
      >
        <div className='flex flex-col items-center'>
          <Image
            src={WelcomeImg}
            alt='Bienvenido a Miksy'
            className='cursor-pointer'
            height={300}
          />
          <div className='mt-5 flex justify-center'>
            <Button className='!bg-[#683910] !text-white !text-lg !h-[38px]' onClick={() => handleClose()}>Ver tienda</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
