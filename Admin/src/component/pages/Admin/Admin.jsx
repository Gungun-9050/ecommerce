import React from 'react'
import './Admin.css'
import { SideBar } from '../../SideBar/SideBar'
import { Route, Routes } from 'react-router-dom'
import { Addproduct } from '../../Addproduct/Addproduct'
import  {ListProduct}  from '../../ListProduct/ListProduct.jsx'


export const Admin = () => {
  return (
    <div className='Admin'>
        <SideBar/> 
        <div>
        <Routes>
            <Route path='/addproduct' element={<Addproduct/>} />
            <Route path='/listproduct' element={<ListProduct/>} />
        </Routes>
        </div>
    </div>
  )
}
