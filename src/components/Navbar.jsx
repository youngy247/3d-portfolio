import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  let scrollPosition = 0;

  useEffect(() => {
    const handleRedirect = () => {
      if (location.pathname !== '/') {
        navigate('/');
      }
    };

    handleRedirect();
  }, [location.pathname, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition < scrollPosition) {
        setNavbarVisible(true);
      } else if (currentScrollPosition > 100) { // Hide after scrolling down 100px
        setNavbarVisible(false);
      }
      scrollPosition = currentScrollPosition;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAnchorClick = (link) => {
    setActive(link.title);
  
    if (link.id === 'form') {
      const targetSection = document.getElementById('form');
      if (targetSection) {
        const offset = -10.5; 
        const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    } else {
      const targetSection = document.getElementById(link.id);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary ${navbarVisible ? '' : 'hidden'}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Adam &nbsp;
            <span className="sm:block hidden">| Software Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <Link to={location.pathname} onClick={() => handleAnchorClick(link)}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleAnchorClick(link);
                  }}
                >
                  <Link to={location.pathname}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
