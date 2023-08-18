import React from 'react'
import ListCard from './ListCard.js'

function Living({data}) {
  let dataList = data.filter(
    (item) => item.category == "Living"
  );

  return (
    <main className='main'>
      <section className='inner Living'>
        <h2 className='heading'>Living</h2>
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


export default Living