import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'

const NavBar = () => {
  const menuList = ['VEHICLE', 'TECHNOLOGY', 'SHOPPING', 'OWNER', 'ABOUT FORD']
  return (
    <div>

      <div className='header-menu'>
        <div className='logo'>
          <img src='https://www.ford.co.kr/content/dam/Ford/website-assets/ap/kr/home/New%20Logo.png' />
        </div>

        <div className='mid-menu'>
          <ul className='menu-list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>

          <div className='right-menu'>
            <div>전시장 및 서비스센터</div>
            <div>시승 신청</div>
            <div className='login-button'>
              <FontAwesomeIcon icon={faCircleUser} />
              <div>로그인</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar