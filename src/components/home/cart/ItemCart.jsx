
'use client';
import Image from 'next/image';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Button, InputNumber, Modal } from 'antd';
import { useCartStore } from '@/store/cartStore';

export default function ItemCart({ product }) {
  const [open, setOpen] = useState(false);

  const { items, addItem, updateQuantity, removeItem } = useCartStore();
  const cartItem = items.find((i) => i.product.id === product.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = (product) => {
    addItem(product);
  };
  const handleChangeQty = (value) => {
    if (value <= 0) {
      removeItem(product.id);
    } else {
      updateQuantity(product.id, value);
    }
  };

  return (
    <>
      <div className="bg-white shadow shadow-gray-300 py-3 md:py-5 px-3 md:px-5 flex flex-col justify-center items-center rounded-[24px] max-w-[330px] max-h-[320px]">
        <h2 className="text-black flex font-semibold !h-10 !text-sm md:!text-base items-center text-center !leading-tight">
          {product.name}
        </h2>

        {product.image && (
          <div className="w-full h-[150px] md:h-[200px] rounded-3xl overflow-hidden my-0 md:my-2 cursor-pointer">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${product.image}`}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover object-center transition-transform duration-200 hover:scale-110 rounded-lg relative -top-[0%] sm:-top-[30%] md:-top-[20%] lg:-top-[25%]"
              onClick={() => setOpen(true)}
            />
          </div>
        )}

        <h3 className="!my-1 md:!my-2 !text-sm md:!text-base">
          {product.units}{' '}
          {product.units > 1 ? 'uni.' : 'unidad'} x {product.price}€
        </h3>

        {quantity === 0 ? (
          <button
            onClick={() => handleAdd(product)}
            className="bg-[#09B0E6] !text-white px-3 py-1 h-[28px] md:h-[32px] rounded-lg w-full flex justify-center cursor-pointer items-center"
          >
            <ShoppingCartOutlined className="mr-2 text-[18px] md:text-[20px]" />
            <div className='text-sm md:text-base'>Agregar</div>
          </button>
        ) : (
          <div className="flex gap-2 w-full">
            <div className="flex flex-1">
              <Button
                className="!rounded-r-none !border-[#09B0E6] border !bg-[#09B0E6] !text-white"
                onClick={() => handleChangeQty(quantity - 1)}
              >
                -
              </Button>

              <InputNumber
                min={0}
                precision={0}
                step={1}
                controls={false}
                value={quantity}
                onChange={handleChangeQty}
                className="flex-1 !border-l-0 !border-r-0 !border-[#09B0E6] !w-full !rounded-l-none font-semibold !rounded-r-none"
              />

              <Button
                className="!rounded-l-none flex !justify-center !text-center !bg-[#09B0E6] !text-white !border-[#09B0E6]"
                onClick={() => handleChangeQty(quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>
        )}
      </div>

      <Modal
        title={product.name}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        centered
        className="modal-product"
        width="auto"
        styles={{
          content: {
            width: "fit-content",
            maxWidth: "90vw",
          },
        }}
      >
        <div className="flex flex-col items-start gap-2">
          <div>
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${product.image}`}
              alt={product.name}
              width={400}
              height={800}
              className="h-[80vh] md:h-[60vh] w-auto object-cover rounded-xl mb-4"
            />
          </div>

          <div className="flex flex-col items-start text-left max-w-[400px]">
            {product.detail && <p className="mb-2">{product.detail}</p>}
            <div className="mb-2">{product.description}</div>
            <p className="font-semibold mb-2">
              {product.units} {product.units > 1 ? 'unidades' : 'unidad'} x {product.price} €
            </p>
            {product.detailpack?.length > 0 && (
              <div className="text-sm">
                <p>Incluye:</p>
                <ul className="list-disc list-inside">
                  {product.detailpack.map((item, index) => (
                    <li key={index}>{item.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
