'use client'

import { useReducer } from 'react'
import CartContext from './CartContext'
import { cartReducer } from './cartReducer'

const initialState = []

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId)
  }

  const removeFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: itemId })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const quantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  )

  const shipping = subtotal > 1000 ? 0 : subtotal === 0 ? 0 : 100

  const total = subtotal + shipping

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        removeFromCart,
        clearCart,
        quantity,
        subtotal,
        shipping,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
