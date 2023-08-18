import React from 'react'
import { useState } from 'react'
import ListCard from './ListCard';


function AllList({data}) {
  let [dataList, setDataList] = useState(data);

  return (
    <div className='allList'>
      <ul className='listCon'>
        {dataList.map((item)=>{
          return(
            <li>
              <ListCard item={item}/>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default AllList