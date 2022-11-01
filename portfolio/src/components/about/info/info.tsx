import React from 'react';
import './info.scss';

export default function Info() {
  return (
    <section className='about__info'>
      <div className="about__infoBg">
        <div className="about__bgCicle about__bgCicle1"></div>
        <div className="about__bgCicle about__bgCicle2"></div>
        <div className="about__bgCicle about__bgCicle3"></div>
      </div>
      <div className="about__infoContainer">
        <div className="about__photoContainer about__photoContainer1">
          <div className="about__photo"></div>
        </div>
        <div className="about__photoContainer about__photoContainer2">
          <div className="about__photo"></div>
        </div>
        <div className="about__photoContainer about__photoContainer3">
          <div className="about__photo"></div>
        </div>
        <div className="about__textBox">
          <h2 className="about__title">about me</h2>
          <p className="about__text">Hello again everyone! So, you already know that my name is Alexandr. 
              A little about myself: 24 y.o., I just served in the army, live in Krugloe, Belarus. 
              I love computer sience childhood, allways in search new knowledge. 
          </p>
          <p className="about__text">Why programming? Everything is elementary - 
              I like to see the result of my work and the fact that people use them.  
              At the moment I specialize in front-end development. My skill stack include technology such as React, 
              TypeScript and just JavaScript.
          </p>
          <p className="about__text">Why should you choose me? I approach each order with great responsibility, 
              as I want to make a name for myself, exclude plagiarism and negligence, work for quality, 
              trying to make an order as quickly and uniquely as possible, taking into account all the edits and wishes of client. 
              By trusting me, you will get the maximum return for your project, save your nerves and time. 
          </p>
          <p className="about__text">If you are interested in me , you want to know something more or use my services, then 
              I will provide all my contacts below.
          </p>
        </div>
      </div>
    </section>
  )
}
