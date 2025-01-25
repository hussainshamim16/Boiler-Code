import React from 'react'

const Home = () => {
    const greating = (e) => {
        alert(`${e} Hussain`)
    }
    return (
        <>
            <h1>Home</h1>
            <button onClick={()=>greating("kia ho rha hey ")} className='btn'>clickmei</button>
        </>
    )
}

export default Home