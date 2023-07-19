import React, { useState } from 'react'
import { createContext } from 'react'
export const GlobalList=createContext();
export const Todo_Context = ({children}) => {
  const [list,setList]=useState([])
  return (
     <GlobalList.Provider value={{list,setList}}>
       {children}
     </GlobalList.Provider>
  )
}
