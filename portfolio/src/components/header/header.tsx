import React from 'react';
import './header.scss';

export default function Header() {
  return (
    <header className='row d-flex flex-column justify-content-between h-auto' id='header'>
      <nav className="navbar col-12 navbar-expand navbar-light">
          <img src='' alt='logo' className="navbar-brand col-3"></img>
          <div className="nav navbar-nav col-8 justify-content-between fs-18">
              <a className="nav-item nav-link header__navLink" href="#header">Home</a>
              <a className="nav-item nav-link header__navLink" href="#about">About me</a>
              <a className="nav-item nav-link header__navLink" href="#portfolio">Portfolio</a>
              <a className="nav-item nav-link header__navLink" href="#contact">Contact</a>
          </div>
      </nav>
      <div className="d-flex align-items-center justify-content-between header__me">
        <div className="col-5 d-flex flex-column justify-content-between header__aboutMe">
          <p className='fs-48 text-uppercase ff-N'>Hello</p>
          <p className="fs-72 text-uppercase ff-N">I'm Alexandr rylkov</p>
          <p className="fs-18">I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
          <button type="button" name="" id="" className="btn col-6 fw-bold fs-18 text-uppercase header__btn">Contact me</button>
        </div>
        <div className="col-7 d-flex justify-content-center position-relative header__photo">
          <div className="rounded-circle header__photoCircle"></div>
          <div className="rounded-circle ff-N fs-48 header__smallCircle header__smallCircle1">ps</div>
          <div className="rounded-circle ff-N fs-48 header__smallCircle header__smallCircle2">PS</div>
          <div className="rounded-circle ff-N fs-48 header__smallCircle header__smallCircle3">PS</div>
          <div className="rounded-circle ff-N fs-48 header__smallCircle header__smallCircle4">PS</div>
        </div>
      </div>
    </header>
  )
}
