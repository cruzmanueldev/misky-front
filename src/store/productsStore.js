import { create } from 'zustand'
import { api } from '@/lib/api'

export const useProductsStore = create((set) => ({
  products: [],
  loading: false,
  fetchProducts: async () => {
    set({ loading: true })
    try {
      const { data } = await api.get('/categories')
      set({ products: data })
    } catch (err) {
      console.error('Error cargando productos', err)
    } finally {
      set({ loading: false })
    }
  },
}))