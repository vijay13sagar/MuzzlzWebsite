import './App.css';
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { NavBar, NavIns, NavItem, Logo, StickyArr,MenuOpt,Ico } from '../src/Components/styles.js'
import Home from '../src/Screens/Home.js';
import Info from '../src/Screens/Info.js';
import Programs from '../src/Screens/Programs.js';
import Transform from '../src/Screens/Transform.js';
import Contact from '../src/Screens/Contact.js';
import finallogo2 from './Assets/finallogo2.png';
import leftarr from './Assets/leftarr.svg';
import cross_icon from './Assets/cross_icon.svg';
import menu_icon from './Assets/menu_icon.svg';

function App() {
  const [show, setShow] = useState(false);
  const [isopen, setIsopen] = useState(false);

  const showIcon = () => {
    if (window.scrollY >= 60) {
      setShow(true);
    } else {
      setShow(false);
    }
  }
  window.addEventListener('scroll', showIcon);
  return (
    <div className="app">
      <NavBar>
        <Link  to='info' smooth={true} duration={1000}><Logo src={finallogo2} /></Link>
        <NavIns>
          <Link  to='info' smooth={true} duration={1000}><NavItem>About</NavItem></Link>
          <Link  to='programs' smooth={true} duration={1000} ><NavItem>Programs</NavItem></Link>
          <Link  to='transform' smooth={true} duration={1000}><NavItem>Results</NavItem></Link>
        </NavIns>
        <MenuOpt>
        {isopen ? <Ico src={cross_icon} onClick={() => { setIsopen(!isopen) }} /> : <Ico src={menu_icon} onClick={() => { setIsopen(!isopen) }} />}
        </MenuOpt>
        <div className={isopen ? 'ver' : 'noshow'} >
          <Link  to='info' smooth={true} duration={1000}><NavItem onClick={() => { setIsopen(false) }}>About</NavItem></Link>
          <Link  to='programs' smooth={true} duration={1000} ><NavItem onClick={() => { setIsopen(false) }}>Programs</NavItem></Link>
          <Link  to='transform' smooth={true} duration={1000}><NavItem onClick={() => { setIsopen(false) }}>Results</NavItem></Link>
        </div>
      </NavBar>
      {show && <StickyArr src={leftarr} onClick={scroll.scrollToTop} />}
      <Home />
      <Info />
      <Programs />
      <Transform />
      {/* <Contact/> */}
    </div>
  );
}

export default App;
