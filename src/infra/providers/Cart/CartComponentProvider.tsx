import { createContext } from "react"
import { ICartContext } from "./ICartContext"

const CartComponent = createContext({} as ICartContext)

function CartComponentProvider({ children }: any ) {
  return (
    <CartComponent.Provider 
    value={{ 
      
     }}>
      
    </CartComponent.Provider>
  )
}

export default CartComponentProvider