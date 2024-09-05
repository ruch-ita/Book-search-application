import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About ReadRadar</h2>
            <p className='fs-17'>At ReadRadar, we believe in the power of books to transform lives, spark curiosity, and inspire change. Our platform is designed to help you navigate the vast world of literature, making it easier to find the books that resonate with you. Whether you're seeking knowledge, adventure, or a quiet escape, ReadRadar is your trusted guide on this journey.</p>
            <p className='fs-17'>We pride ourselves on offering a seamless, user-friendly experience that connects readers with the stories and information they crave. Our curated recommendations, in-depth reviews, and advanced search features ensure that every visit to ReadRadar is productive and enjoyable. Dive into a world of endless possibilities with us, and let your next great read find you.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About