import React from 'react';
import './contact.scss';

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="contact__title">Contact Me</h2>
        <form action="" className="contact__form">
          <div className="contact__name">
            <div className="contact__inputContainer">
              <input type="text" id="firstName" className="contact__input contact__inputFirstName" placeholder=' ' required />
              <div className="contact__cut"></div>
              <label htmlFor="firstName" className="contact__label">First Name</label>
            </div>
            <div className="contact__inputContainer">
              <input type="text" id="lastName" className="contact__input contact__inputLastName" placeholder=' ' required />
              <div className="contact__cut"></div>
              <label htmlFor="lastName" className="contact__label">Last Name</label>
            </div>
          </div>
          <div className="contact__inputContainer">
            <input type="email" id="email" className="contact__input contact__inputEmail" placeholder=' ' required />
            <div className="contact__cut"></div>
            <label htmlFor="email" className="contact__label">Email</label>
          </div>
          <div className="contact__commentsContainer">
            <textarea id="comments" className="contact__comments" placeholder=' ' required />
            <div className="contact__cut"></div>
            <label htmlFor="comments" className="contact__label">Comments</label>
          </div>
          <button className="contact__button">SEND</button>
        </form>
      </div>
    </section>
  )
}
