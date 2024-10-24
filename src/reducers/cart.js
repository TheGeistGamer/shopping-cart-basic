import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from '../types/types.js'

export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

const UPDATE_STATE_BY_ACTION = {
  [ADD_TO_CART]: (state, action) => {
    const { id } = action.payload
    const productInCartIndex = state.findIndex(item => item.id === id)

    if (productInCartIndex >= 0) {
      // hace copias profundas de los array y los objetos
        // Opcion 1
      // const newState = structuredClone(state)
      // newState[productInCartIndex].quantity += 1

        // Opcion 2
      // const newState = state.map(item => {
      //   if (item.id === id) {
      //     return {
      //       ...item,
      //       quantity: item.quantity + 1
      //     }
      //   }
      // })


        // Opcion 3
      const newState = [
        ...state.slice(0, productInCartIndex),
        { ...state[productInCartIndex], quantity: state[productInCartIndex].quantity + 1},
        ...state.slice(productInCartIndex + 1)
      ]

      
      updateLocalStorage(newState)
      return newState
    }

    const newState = [
      ...state,
      {
        ...action.payload,
        quantity: 1
      }
    ]

    updateLocalStorage(newState)
    return newState
  },

  [REMOVE_FROM_CART]: (state, action) => {
    const { id } = action.payload
    const newState = state.filter(item => item.id !== id)
    updateLocalStorage(newState)
    return newState
  },

  [CLEAR_CART]: () => {
    updateLocalStorage([])
    return []
  }
}


export const cartReducer = (state, action) => {
  // const { type: actionType, payload: actionPayload } = action  


  // == Option 1 ==
  // switch (actionType) {
  //   case ADD_TO_CART: {
  //     const { id } = actionPayload
  //     const productInCartIndex = state.findIndex(item => item.id === id)

  //     if (productInCartIndex >= 0) {
  //       // hace copias profundas de los array y los objetos
  //       const newState = structuredClone(state)
  //       newState[productInCartIndex].quantity += 1
  //       updateLocalStorage(newState)
  //       return newState
  //     }

  //     const newState = [
  //       ...state,
  //       {
  //         ...actionPayload,
  //         quantity: 1
  //       }
  //     ]

  //     updateLocalStorage(newState)
  //     return newState
  //   }

  //   case REMOVE_FROM_CART : {
  //     const { id } = actionPayload
  //     const newState = state.filter(item => item.id !== id)
  //     updateLocalStorage(newState)
  //     return newState
  //   }

  //   case CLEAR_CART: {
  //     updateLocalStorage([])
  //     return []
  //   }
  // }

  // return state


  // == Option 2 ==
  const { type: actionType } = action

  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state

}
