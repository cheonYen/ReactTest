import React from 'react'

function ListCard({item}){
  return (
    <div className='listCard'>
      <div className='imgCon'>
        <img src={item.img}/>
        <span className='moreView'>상세보기</span>
      </div>
      <h5 className='listCardTitle'>{item.title}</h5>
      <p className='listCardPrice'>{item.price} won</p>
    </div>
  );
}

export default ListCard;