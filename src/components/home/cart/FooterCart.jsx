'use client'

import { useState } from 'react';
import ConfirmOrder from './ConfirmOrder';
import { Button, Modal } from 'antd';
import confetti from "canvas-confetti";
import OrderSuccess from '@/assets/home/order_sucess.png'
import Image from 'next/image';
export default function FooterCart({onClose, total}) {

  const [openConfirm, setOpenConfirm] = useState(false);
  const [ showSucces,  setShowSuccess ] = useState(false);

  const showModalSuccess = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
    setShowSuccess(true);
  }


  return (
    <div className='pb-6 pt-2 flex flex-col gap-4'>
      {
        total > 0
        ? <>
          <div className='text-base flex justify-between'>
            <div><strong>Total:</strong></div>
            <div>{total.toFixed(2)}€</div>
          </div>
          {
            total < 15 && (
              <span className='text-red-400 text-sm'>*Valor minima de compra: 15€</span>
            ) 
          }
          <button
            onClick={() => {
              if(total >= 15){


                setOpenConfirm(true)
              }
            }}
            className={`bg-[#683910] ${total >= 15 ? 'cursor-pointer' : 'opacity-60 cursor-not-allowed'} !text-white w-full py-2 !text-base rounded-md`}
          >Coordinar entrega</button>
        </>
        :
        <button 
          onClick={onClose}
          className='bg-[#683910] !text-white w-full py-2 !text-base rounded-md cursor-pointer'
          >Continuar comprando</button>
      }
      <ConfirmOrder 
        open={openConfirm} 
        onClose={() => setOpenConfirm(false)} 
        showSucces={showModalSuccess}
      />
      <Modal
        closable={false}
        maskClosable={true}
        open={showSucces}
        footer={null}
        onCancel={() => setShowSuccess(false)}
        className='modal-success flex justify-center'
      >
        <Image
          src={OrderSuccess}
          alt="Muchas gracias por su pedido"
          className="cursor-pointer"
          height={300}
        />
        <div className='mt-5 flex justify-center'>
          <Button className='!bg-[#683910] !text-lg !h-[38px] !text-white' onClick={() => setShowSuccess(false)}>Cerrar</Button>
        </div>
      </Modal>
    </div>
  );
}
