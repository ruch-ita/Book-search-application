import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";


function Header() {
  return (
    <div className='holder'>
    <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
            <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
            <p className='header-text fs-18 fw-3'>Discover the world of knowledge at your fingertips. Whether you're looking for a classic novel, the latest bestseller, or a hidden gem, our extensive collection has something for everyone. Dive into stories that captivate, inspire, and broaden your horizons!</p>
            <SearchForm />
        </div>
    </header>
</div>
  )
}

export default Header