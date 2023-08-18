import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        고객님은 안전거래를 위해 결제시 저희 쇼핑몰에서 가입한 구매안전 서비스를 이용하실 수 있습니다. 
      </p>
      <nav>
        <ul className='fnb'>
          <li><Link to='/'>이용약관</Link></li>
          <li><Link to='/'>개인정보취급방츰</Link></li>
          <li><Link to='/'>이용안내</Link></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer