'use client'
import { useSearchParams } from "next/navigation";
import { useState } from 'react'
import { Badge } from 'antd';
import ItemCart from '@/components/home/cart/ItemCart'
import { useCartStore } from '@/store/cartStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductsClient({ products }) {

  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [categorySelected, setCategorySelected] = useState(
    categoryParam ? Number(categoryParam) : products.length ? products[0].id : null
  )

  const items = useCartStore((state) => state.items);

  return (
    <div className='py-10 px-2 md:px-12 '>
      <h1 className='text-center text-2xl md:text-3xl font-semibold !mb-10'>
        <strong>Productos</strong>
      </h1>

      <div className='flex flex-wrap gap-2 md:gap-4 justify-center'>
        <AnimatePresence>
          {products
            .slice()
            .sort((a, b) => {
              const aOrder = a.order ?? 0;
              const bOrder = b.order ?? 0;
              return aOrder - bOrder;
            })
            .map(category => {
              const hasInCart = items.some(item => item.product.category_id === category.id);

              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <Badge
                    count={hasInCart ? ' ' : 0}
                    offset={[-4, 4]}
                    size="small"
                    color='green'
                  >
                    <div
                      className={`px-4 py-2 rounded-3xl cursor-pointer flex items-center transition-transform duration-200 hover:scale-105 ${
                        category.id === categorySelected
                          ? 'bg-[#683910] text-white font-bold'
                          : 'border-2 border-[#683910] text-[#683910] bg-white'
                      }`}
                      onClick={() => setCategorySelected(category.id)}
                    >
                      {category.name}
                    </div>
                  </Badge>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={categorySelected}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-4 px-2 mt-8 md:px-10 lg:px-20">
            {products
              .filter(cat => cat.id === categorySelected)
              .flatMap(cat => cat.product)
              .map(prod => (
                <ItemCart key={prod.id} product={prod} />
              ))}
          </div>
        </motion.div>
      </AnimatePresence>

    </div>
  )
}
