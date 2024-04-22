import { create, StateCreator } from "zustand"
import { Product } from "../Types/product"
import { devtools } from "zustand/middleware"

type State = {
    setProductList:Product[]
}

type Action = {
    addProductList:(Product:Product)=> void
}

const initialState:State={
    setProductList:[]
}

type Type = StateCreator<State & Action>

const appStore : Type =(set)=>({
    ...initialState,
    addProductList: (product:Product)=> set((state)=>({...state,setProductList: [...state.setProductList,{...product}]}))
})

export const useAppStore = create<State & Action>()(
    devtools(appStore)
)