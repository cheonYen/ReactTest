import React from 'react'
import ListCard from './ListCard.js'

function Happiermart({data}) {
  let dataList = data.filter(
    (item) => item.category == "Happier mart"
  )

  return (
    <main className='main'>
      <section className='inner Happiermart'>
        <h2 className='heading'>Happier Mart</h2>
        <div className='allList'>
          <ul className='listCon'>
            {dataList.map((item) => {
              return(
                <li className='list' key={item._id}>
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

export default Happiermart