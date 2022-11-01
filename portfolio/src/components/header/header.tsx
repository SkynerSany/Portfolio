import { useRef } from 'react';
import './header.scss';

export default function Header() {
  const nav = useRef() as React.MutableRefObject<HTMLDivElement>;

  const changeLink = (target: HTMLLinkElement) => {
    nav.current.querySelector('.header__navLink-active')?.classList.toggle('header__navLink-active');
    target.classList.toggle('header__navLink-active');
  }

  const setCurrentLink = (e: React.MouseEvent) => {
    const target = e.target as HTMLLinkElement;
    if (target.tagName !== 'A') return;

    changeLink(target);
  }

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
