'use client';

import { Badge, Button, Drawer, InputNumber } from 'antd';
import { AnimatePresence, motion } from "motion/react"
import Image from 'next/image';
import {
  CloseOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import FooterCart from './FooterCart';
import { useCartStore } from '@/store/cartStore';

export default function Cart() {
  const { items, removeItem, updateQuantity, openCart, setOpenCart } = useCartStore();


  const total = items.reduce(
    (acc, i) => acc + parseFloat(i.product.price) * i.quantity,
    0
  );

  const totalProducts = items.length;

  return (
    <>
      <Badge count={totalProducts} size='small' color="#AE3928">
        <div
          className="bg-[#09B0E6] rounded-lg px-2 py-1 text-white cursor-pointer"
          onClick={setOpenCart}
        >
          <div className="flex items-center gap-1">
            <ShoppingCartOutlined style={{ fontSize: '22px' }} />
          </div>
        </div>
      </Badge>

      <Drawer
        title="Mi carrito"
        placement="right"
        closable
        onClose={setOpenCart}
        open={openCart}
        key="right"
        closeIcon={<CloseOutlined style={{ color: '#683910', fontWeight: 700 }} />}
        footer={<FooterCart onClose={setOpenCart} total={total} />}
      >
        {items.length === 0 ? (
          <div className="flex justify-center items-center h-full">
            <div className="text-lg text-gray-500">Su carrito está vacío</div>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <AnimatePresence>
              {items.map(({ product, quantity }) => (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, x: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key={product.id}
              >
                <div
                  key={product.id}
                  className="flex p-4 flex-row justify-between items-start border rounded-lg border-gray-300 shadow shadow-gray-300"
                >
                  <div className="flex w-full gap-4">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}${product.image}`}
                      height={60}
                      width={80}
                      alt={product.name}
                      className="object-cover rounded-xl"
                    />

                    <div className="flex-1 text-base text-gray-700">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold leading-none">{product.name}</h3>
                        <CloseOutlined
                          style={{ color: 'red', fontSize: '16px', cursor: 'pointer' }}
                          onClick={() => removeItem(product.id)}
                        />
                      </div>

                      <div className="text-sm mb-2">
                        {product.units}{' '}
                        {product.units > 1 ? 'unidades' : 'unidad'} x {product.price}€
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <InputNumber
                            controls={false}
                            min={1}
                            precision={0}
                            step={1}
                            value={quantity}
                            onChange={(val) =>
                              updateQuantity(product.id, val || 1)
                            }
                            className="!w-12 md:!w-16 !h-[40px] !rounded-r-none !border-r-0 !border-[#09B0E6]"
                          />
                          <div className="flex flex-col">
                            <Button
                              className="!rounded-l-none !h-5 !rounded-br-none !border-[#09B0E6] !bg-[#09B0E6] !text-white"
                              onClick={() =>
                                updateQuantity(product.id, quantity + 1)
                              }
                            >
                              +
                            </Button>
                            <Button
                              className="!rounded-l-none !h-5 !rounded-tr-none !border-[#09B0E6] !bg-[#09B0E6] !border-t-white !text-white"
                              onClick={() =>
                                updateQuantity(product.id, Math.max(1, quantity - 1))
                              }
                            >
                              -
                            </Button>
                          </div>
                        </div>
                        <div className="font-semibold">
                          = {(parseFloat(product.price) * quantity).toFixed(2)} €
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>
        )}
      </Drawer>
    </>
  );
}
