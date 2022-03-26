import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './auth/Login'
import { useContext } from 'react'
import { GlobalState } from '../../GlobalState'
import CreateProduct from './createProduct/CreateProduct'
import Notfound from './utils/notfound/Notfound'
import Register from './auth/Register'
import Categories from './categories/Categories'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
const Pages = () => {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    return (
        <Routes>
            <Route path='/' element={<Products />}></Route>
            <Route path='/detail/:id' element={<DetailProduct />} />
            <Route path="/create_product" element={isAdmin ? <CreateProduct /> : <Notfound />} />
            <Route path="/edit_product/:id" element={isAdmin ? <CreateProduct /> : <Notfound />} />
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/category' element={isAdmin ? <Categories /> : <Notfound />}></Route>
        </Routes>
    )
}

export default Pages