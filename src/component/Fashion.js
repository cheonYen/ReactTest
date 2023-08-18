import React from 'react'
import ListCard from './ListCard.js'

function Fashion({data}) {
  let dataList = data.filter(
    (item) => item.category == "Fashion"
  );

  return (
    <main className='main'>
      <section className='inner Fashion'>
        <h2 className='heading'>Fashion</h2>
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

export default Fashion