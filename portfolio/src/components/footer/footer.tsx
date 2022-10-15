import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <div className="footer__socialContainer">
          <a href="https://t.me/skynersany" className="footer__socialIcon footer__socialIconTelegram" target="_blank"></a>
          <a href="https://join.skype.com/invite/BqBYnd4y8ieP" className="footer__socialIcon footer__socialIconSkype" target="_blank"></a>
          <a href="https://discordapp.com/users/1023708747744432199" className="footer__socialIcon footer__socialIconDiscord" target="_blank"></a>
          <a href="https://www.linkedin.com/in/alexander-rylkov-719b45248/" className="footer__socialIcon footer__socialIconLinkedin" target="_blank"></a>
          <a href="https://github.com/SkynerSany/" className="footer__socialIcon footer__socialIconGithub" target="_blank"></a>
          <a href="https://www.codewars.com/users/SkynerSany" className="footer__socialIcon footer__socialIconCodewars" target="_blank"></a>
        </div>
      </div>
    </section>
  )
}
