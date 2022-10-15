import React from 'react';
import './greeting.scss';

export default function Greeting() {
  return (
    <div id="greeting">
      <div className="container">
        <div className="greeting__aboutMe">
          <p className='greeting__greeting'>Hello</p>
          <p className="greeting__name">I'm Alexandr rylkov</p>
          <p className="greeting__aboutDesc">I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
          <button type="button" name="" id="" className="greeting__btn">Contact me</button>
        </div>
        <div className="greeting__photo">
          <div className="greeting__photoCircle"></div>
          <div className="greeting__smallCircle greeting__smallCircle1">ps</div>
          <div className="greeting__smallCircle greeting__smallCircle2">PS</div>
          <div className="greeting__smallCircle greeting__smallCircle3">PS</div>
          <div className="greeting__smallCircle greeting__smallCircle4">PS</div>
        </div>
      </div>
    </div>
  )
}
