import React from 'react'
import { Link } from 'react-router-dom';
import AllList from './AllList.js'

function MainList({data}) {
  return (
    <section className='mainList'>
      <h2 className='heading'>O,LD! Product</h2>
      <AllList data={data}/>
    </section>
  )
}

export default MainList