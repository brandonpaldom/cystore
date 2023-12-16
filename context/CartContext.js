'use client'

import { createContext, useEffect, useReducer } from 'react'
import { cartReducer, ACTIONS_TYPES } from './cartReducer'

const initialState = []

export const CartContext = createContext()

const useCartReducer = () => {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    const cart = localStorage.getItem('cart')
    if (cart) {
      dispatch({
        type: ACTIONS_TYPES.INITIALIZE_CART,
        payload: JSON.parse(cart),
      })
    }
  }, [])

  const addToCart = (product) => {
    dispatch({ type: ACTIONS_TYPES.ADD_TO_CART, payload: product })
  }

  const isInCart = (productId) => {
    if (cart) {
      return cart.some((product) => product.id === productId)
    }
  }

  const removeFromCart = (product) => {
    dispatch({ type: ACTIONS_TYPES.REMOVE_FROM_CART, payload: product })
  }

  const clearCart = () => {
    dispatch({ type: ACTIONS_TYPES.CLEAR_CART })
  }

  const quantity = cart
    ? cart.reduce((acc, product) => acc + product.quantity, 0)
    : 0

  const subtotal = cart
    ? cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
    : 0

  const shipping = subtotal > 1000 ? 0 : subtotal === 0 ? 0 : 99

  const total = subtotal + shipping

  return {
    cart,
    addToCart,
    isInCart,
    removeFromCart,
    clearCart,
    quantity,
    subtotal,
    shipping,
    total,
  }
}

export const CartProvider = ({ children }) => {
  const {
    cart,
    addToCart,
    isInCart,
    removeFromCart,
    clearCart,
    quantity,
    subtotal,
    shipping,
    total,
  } = useCartReducer()

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
