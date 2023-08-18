import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header className='header'>
      <h1 className='logo'>
        <Link to='/'>
          <img src='https://www.oh-lolly-day.com/web/upload/category/editor/2020/02/28/b89f6f6a5e40a928875180385a5e317a.png'/>
        </Link>
      </h1>
      <nav>
        <ul className='gnb'>
          <li><Link to='/Stationery'>STATIONERY</Link></li>
          <li><Link to='/Fashion'>FASHION</Link></li>
          <li><Link to='/Digital'>DIGITAL ACC</Link></li>
          <li><Link to='/Living'>LIVING</Link></li>
          <li><Link to='/Habit'>HABIT</Link></li>
          <li><Link to='/Happiermart'>HAPPIER MART</Link></li>
        </ul>
        <ul className='mypage'>
          <li><Link to='/Login'><FontAwesomeIcon icon={faRightToBracket} className='icon'/></Link></li>
          <li><Link to='/Cart'><FontAwesomeIcon icon={faCartShopping} className='icon'/></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header