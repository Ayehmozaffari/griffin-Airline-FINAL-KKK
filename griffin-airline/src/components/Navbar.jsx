import React from 'react'
import styled from'styled-components';
import logo from '../assets/site-logo.png';
export default function Navbar() {
  return (
   <>
    <Nav>
      <div className="brand">
        <div className="container">
          <img src="{logo}" alt="" />
          شــیردال
        </div>
        <div className="toggle"></div>
      </div>
      <ul>
        <li>
          <a href="#home">خـانه</a>
          </li>
        <li>
          <a href="#services">سرویـس هـا</a>
        </li>
        <li>
          <a href="#recommend"> مکان هـا</a>
        </li>
        <li>
          <a href="#testimonials">سفارش</a>
        </li>
      </ul>
      <button>ارتباط</button>
      </Nav>
      </>
  )
}
const Nav =styled.nav``;
