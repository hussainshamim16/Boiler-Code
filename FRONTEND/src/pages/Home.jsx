import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux' // read and update karney key liye 
import { decrement, increment } from '../Store/counter/counterSlice' // store key functions
import About from './About'

const Home =  ()=> {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const name = "Arzoo";

    const greating = (e) => {
        alert(`${e} Hussain`)
    }
    return (
        <>
            <h1>Home {count}</h1>
            <button onClick={() => dispatch(increment())} className='btn'>Plus</button>
            <button onClick={() => dispatch(decrement())} className='btn'>Minus</button>
        </>
    )
}

export default Home