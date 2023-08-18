import React from 'react'
import MainList from './MainList.js';

function Main({data}) {
  return (
    <main className='main'>
      <section className='mainBanner'>
        <img src='https://www.oh-lolly-day.com/_dj/img/web-230324.gif'/>
      </section>
      <section className='inner'>
        <MainList data={data}/>
      </section>
    </main>
  )
}

export default Main