import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <main className='h-screen background-fondo'>
    <div className='portada font-mono text-7xl font-semibold tracking-widest text-start pr-52 pt-80 pl-10 w-8/12 text-rose-600'>{greeting}</div>
    </main>
    </>
    
  )
}

export default ItemListContainer