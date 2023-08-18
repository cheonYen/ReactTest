import React from 'react'
import ListCard from './ListCard.js'

function Habit({data}) {
  let dataList = data.filter(
    (item) => item.category == "Habit"
  )
  return (
    <main className='main'>
      <section className='inner Habit'>
        <h2 className='heading'>Habit</h2>
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

export default Habit