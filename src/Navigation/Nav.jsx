import React from 'react';
import { FiHeart } from 'react-icons/fi';
import {AiOutlineShopping} from 'react-icons/ai';
import { HiOutlineUserAdd } from "react-icons/hi";
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <input type='text' 
        className='search-input' 
        placeholder='Search'
        />
      </div>
      <div className="profile-container">
        <a href='#'>
         <FiHeart className='nav-icons'/>
        </a>
        <a href='#'>
         <AiOutlineShopping  className ="nav-icons"/>
        </a>
        <a href='#'>
         <HiOutlineUserAdd className ="nav-icons"/>
        </a>
      </div>
    </nav>
  )
}

export default Nav