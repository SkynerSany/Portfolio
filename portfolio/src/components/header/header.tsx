import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <header id='header'>
      <div className="container">
        <nav className='header__nav'>
            <img src='' alt='logo' className="header__logo"></img>
            <div className='header__menu'>
                <a className="header__navLink header__navLink-active" href="#" data-text="Home">Home</a>
                <a className="header__navLink" href="#about" data-text="About me">About me</a>
                <a className="header__navLink" href="#portfolio" data-text="Portfolio">Portfolio</a>
                <a className="header__navLink" href="#contact" data-text="Contact">Contact</a>
            </div>
        </nav>
      </div>
    </header>
  )
}
