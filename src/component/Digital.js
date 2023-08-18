import React from 'react'
import ListCard from './ListCard.js'

function Digital({data}) {
  let dataList = data.filter(
    (item) => item.category == "Digital Acc"
  );

  return (
    <main className='main'>
      <section className='inner Digital'>
        <h2 className='heading'>Digital Acc</h2>
        <div className='allList'>
          <ul className='listCon'>
          {dataList.map((item) => {
              return(
                <li className="list" key={item._id}>
                  <ListCard item={item}/>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Digital