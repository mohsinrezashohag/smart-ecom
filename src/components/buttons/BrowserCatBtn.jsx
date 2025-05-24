'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BrowserCatBtn = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pathname = usePathname();

  useEffect(()=>{
    if(pathname === "/"){
        setIsMenuVisible(true);
        document.querySelector('.category-menu').style.display = 'block';
        }else{
            setIsMenuVisible(false);
            document.querySelector('.category-menu').style.display = 'none';
        }
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      // Hide menu if scroll position is less than 370
      if (window.scrollY >= 370) {
          setIsMenuVisible(false);
          document.querySelector('#sticky-header').classList.add('sticky-menu');
          document.querySelector('.scroll-to-target').classList.add('open');
          document.querySelector('.category-menu').style.display = 'none';
        }
        else if(window.scrollY < 370){
            setIsMenuVisible(true);
            document.querySelector('#sticky-header').classList.remove('sticky-menu');
            document.querySelector('.scroll-to-target').classList.remove('open');
            if(pathname === "/"){
            console.log(pathname)
        document.querySelector('.category-menu').style.display = 'block';
        }else{
            setIsMenuVisible(false);
        }
        
      }
    };
    

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [window.scrollY]);

  const toggleMenu = () => {
  const newVisibility = !isMenuVisible;
  setIsMenuVisible(newVisibility);
  
  const categoryMenu = document.querySelector('.category-menu');
  if (categoryMenu) {
    categoryMenu.style.display = newVisibility ? 'block' : 'none';
  }
};
  return (
    <button style={{border: "none"}} className="cat-toggle browse" onClick={toggleMenu}>
      <i className="fas fa-bars"></i>
      Browse Categories
      <i className="fas fa-angle-down"></i>
    </button>
  );
};

export default BrowserCatBtn;