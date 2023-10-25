import React, { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      let menuIcon = document.querySelector('#menu-icon');
      let navbar = document.querySelector('.navbar');
      let changeIcon = document.querySelector('.fa-solid');
  
      let section = document.querySelectorAll('section');
      let navLinks = document.querySelectorAll('header nav a');
  
      let isAnySectionInView = false;
  
      section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
  
        if (top >= offset && top < offset + height) {
          isAnySectionInView = true;
  
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        }
      });
  
      let header = document.querySelector('.header');
      header.classList.toggle('sticky', window.scrollY > 100);
  
      // If no section is in view, revert menu icon and navbar to initial state
      if (isAnySectionInView) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
        changeIcon.classList.remove('fa-xmark');
        changeIcon.classList.add('fa-bars');
        setIsMenuOpen(false);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          PORTFOLIO
        </a>

        <div className={`bx bx-menu ${isMenuOpen ? 'bx-x' : ''}`} id="menu-icon" onClick={handleMenuClick}>
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
