export const initialState = []

export const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_CART: 'CLEAR_CART',
}

export const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      const exist = state.find((item) => item.id === action.payload.id)

      if (exist) {
        const newCart = state.map((item) =>
          item.id === action.payload.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item,
        )
        return newCart
      } else {
        const newCart = [...state, { ...action.payload, quantity: 1 }]
        return newCart
      }
    }
    case actionTypes.REMOVE_ITEM: {
      const exist = state.find((item) => item.id === action.payload)

      if (exist.quantity === 1) {
        const newCart = state.filter((item) => item.id !== action.payload)
        return newCart
      } else {
        const newCart = state.map((item) =>
          item.id === action.payload
            ? { ...exist, quantity: exist.quantity - 1 }
            : item,
        )
        return newCart
      }
    }
    case actionTypes.CLEAR_CART: {
      return initialState
    }
  }
}
