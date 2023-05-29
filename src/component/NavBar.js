import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'

const NavBar = () => {
  const menuList = ['VEHICLE', 'TECHNOLOGY', 'SHOPPING', 'OWNER', 'ABOUT FORD']
  return (
    <div>
        <div>
          <div className='login-button'>
            <FontAwesomeIcon icon={faCircleUser} />
            <div>로그인</div>
          </div>
        </div>
        <div>
          <img src='https://www.ford.co.kr/content/dam/Ford/website-assets/ap/kr/home/New%20Logo.png' />
        </div>
        <div>
          <ul className='menu-list'>
            {menuList.map((menu) => (
              <li>{menu}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default NavBar