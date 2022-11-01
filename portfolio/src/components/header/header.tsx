import React, { useEffect, useRef, useState } from 'react';
import './header.scss';

interface positionTypes {
  'greeting': number;
  'about': number;
  'portfolio': number;
  'contact': number;
}

export default function Header() {
  const nav = useRef() as React.MutableRefObject<HTMLDivElement>;
  const pos: positionTypes = {
    'greeting': 0,
    'about': 0,
    'portfolio': 0,
    'contact': 0,
  }

  const changeLink = (target: HTMLLinkElement) => {
    nav.current.querySelector('.header__navLink-active')?.classList.toggle('header__navLink-active');
    target.classList.toggle('header__navLink-active');
  }

  const setCurrentLink = (e: React.MouseEvent) => {
    const target = e.target as HTMLLinkElement;
    if (target.tagName !== 'A') return;

    changeLink(target);
  }

  window.onscroll = () => {
    const currentPos: number = Object.values(pos).indexOf(window.scrollY);
    console.log(currentPos);
    if (currentPos !== -1 ) {
      const curSection = Object.keys(pos)[currentPos];
      console.log(curSection);
    }
  }

  useEffect(() => {
    const greeting = document.querySelector('#greeting') as HTMLDivElement;
    const about = document.querySelector('#about') as HTMLDivElement;
    const portfolio = document.querySelector('#portfolio') as HTMLDivElement;
    const contact = document.querySelector('#contact') as HTMLDivElement;

    pos.greeting = greeting.offsetTop;
    pos.about = about.offsetTop;
    pos.portfolio = portfolio.offsetTop;
    pos.contact = contact.offsetTop;

    console.log(pos);
  }, []);

  return (
    <header id="header">
      <div className="container">
        <nav className="header__nav">
          <img src="./logo.ico" alt="logo" className="header__logo"></img>
          <div ref={ nav } onClick={ setCurrentLink } className="header__menu">
            <a className="header__navLink header__navLink-active" href="#greeting" data-text="Home">Home</a>
            <a className="header__navLink" href="#about" data-text="About me">About me</a>
            <a className="header__navLink" href="#portfolio" data-text="Portfolio">Portfolio</a>
            <a className="header__navLink" href="#contact" data-text="Contact">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
