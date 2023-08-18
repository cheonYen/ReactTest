import React from 'react'
import ListCard from './ListCard.js'

function Stationery({data}) {
  let dataList = data.filter(
    (item) => item.category == "Stationery"
  );

  return (
    <main className='main'>
      <section className='inner Stationery'>
        <h2 className='heading'>Stationery</h2>
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

export default Stationery