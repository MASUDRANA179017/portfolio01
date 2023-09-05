"use client"
import Link from 'next/link';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MenuData } from '../data/commonData';
import logo from '../../assets/logo.png';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google' 
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-inter',
})

const Header = () => {
  return (
    <>
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <Image src={logo} loading='lazy' alt='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              MenuData.map((item, i)=>(
                  <Link className={dmSans} href={item.link} key={i} >{item.title}</Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header