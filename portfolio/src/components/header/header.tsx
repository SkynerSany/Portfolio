import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <header id='header'>
      <div className="container">
        <nav className='header__nav'>
            <img src='' alt='logo' className="header__logo"></img>
            <div className='header__menu'>
                <a className="header__navLink header__navLink-active" href="#header">Home</a>
                <a className="header__navLink" href="#about">About me</a>
                <a className="header__navLink" href="#portfolio">Portfolio</a>
                <a className="header__navLink" href="#contact">Contact</a>
            </div>
        </nav>
        <div className="header__me">
          <div className="header__aboutMe">
            <p className='header__greeting'>Hello</p>
            <p className="header__name">I'm Alexandr rylkov</p>
            <p className="header__aboutDesc">I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
            <button type="button" name="" id="" className="header__btn">Contact me</button>
          </div>
          <div className="header__photo">
            <div className="header__photoCircle"></div>
            <div className="header__smallCircle header__smallCircle1">ps</div>
            <div className="header__smallCircle header__smallCircle2">PS</div>
            <div className="header__smallCircle header__smallCircle3">PS</div>
            <div className="header__smallCircle header__smallCircle4">PS</div>
          </div>
        </div>
      </div>
    </header>
  )
}
