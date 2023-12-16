export const ACTIONS_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
}

export const updateLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

const UPDATE_CART_BY_ACTION = {
  [ACTIONS_TYPES.INITIALIZE_CART]: (cart, action) => action.payload,
  [ACTIONS_TYPES.ADD_TO_CART]: (cart, action) => {
    const { id } = action.payload
    const productInCartIndex = cart.findIndex((item) => item.id === id)

    if (productInCartIndex >= 0) {
      const updatedCart = [
        ...cart.slice(0, productInCartIndex),
        {
          ...cart[productInCartIndex],
          quantity: cart[productInCartIndex].quantity + 1,
        },
        ...cart.slice(productInCartIndex + 1),
      ]

      updateLocalStorage(updatedCart)
      return updatedCart
    }

    const updatedCart = [...cart, { ...action.payload, quantity: 1 }]
    updateLocalStorage(updatedCart)
    return updatedCart
  },
  [ACTIONS_TYPES.REMOVE_FROM_CART]: (cart, action) => {
    const { id } = action.payload
    const productInCartIndex = cart.findIndex((item) => item.id === id)

    if (productInCartIndex >= 0) {
      if (cart[productInCartIndex].quantity > 1) {
        const updatedCart = [
          ...cart.slice(0, productInCartIndex),
          {
            ...cart[productInCartIndex],
            quantity: cart[productInCartIndex].quantity - 1,
          },
          ...cart.slice(productInCartIndex + 1),
        ]

        updateLocalStorage(updatedCart)
        return updatedCart
      } else {
        const updatedCart = cart.filter((item) => item.id !== id)
        updateLocalStorage(updatedCart)
        return updatedCart
      }
    }
  },
  [ACTIONS_TYPES.CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  },
}

export const cartReducer = (state, action) => {
  const { type } = action
  const updateCart = UPDATE_CART_BY_ACTION[type]
  return updateCart ? updateCart(state, action) : state
}
