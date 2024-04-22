
// import './App.css'

import {  Navigate, Route, Routes } from "react-router-dom"
import Shirts from "./pages/shirts"
import Pants from "./pages/pants"
import Header from "./components/header"

function App() {
  
  return (
    <>
    <Header />
    <Routes>
      <Route path="/">
        <Route index element={<Navigate to ="/pants" />} />
       <Route path="pants" element={<Pants/>} />
       <Route path="shirts" element={<Shirts/>} />
      </Route>
    </Routes>
    </>
   
  )
}

export default App


