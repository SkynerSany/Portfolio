import { useRef, useState } from 'react';
import { Email } from '../../plugins/smtp';
import SendSuccess from './sendSuccess/sendSuccess';
import './contact.scss';

export default function Contact() {
  const [send, setSend] = useState(false);
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const sendMessage = (e: React.MouseEvent) => {
    const formElements = form.current.elements as any;

    const message = {
      email: formElements.email.value,
      title: formElements.title.value,
      comments: formElements.comments.value,
    };

    if (!form.current.checkValidity()) return;

    e.preventDefault();

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "skynerstudent@gmail.com",
      Password : "96DA855A7458426D6494353BE0CF6935451B",
      To : 'skynerstudent@gmail.com',
      From : 'skynerstudent@gmail.com',
      Subject : message.title,
      Body : `Email: ${ message.email } &nbsp;&nbsp; Comments: ${ message.comments }`,
    }).then(
      message => (message === 'OK') ? setSend(true) : alert(message)
    );
  }

  return (
    <article id="contact">
      <section className="container">
        <h2 className="contact__title">Contact Me</h2>
        <form ref={ form } className="contact__form">
          <div className="contact__inputContainer">
            <input type="email" id="email" className="contact__input contact__inputEmail" placeholder=' ' required />
            <div className="contact__cut"></div>
            <label htmlFor="email" className="contact__label">Email</label>
          </div>
          <div className="contact__inputContainer">
            <input type="text" id="title" className="contact__input contact__inputLastName" placeholder=' ' required />
            <div className="contact__cut"></div>
            <label htmlFor="title" className="contact__label">Title</label>
          </div>
          <div className="contact__commentsContainer">
            <textarea id="comments" className="contact__comments" placeholder=' ' required />
            <div className="contact__cut"></div>
            <label htmlFor="comments" className="contact__label">Comments</label>
          </div>
          <button onClick={ sendMessage } className="contact__button">SEND</button>
        </form>
      </section>
      {
        send && <SendSuccess setSend={ setSend } />
      }
    </article>
  )
}
