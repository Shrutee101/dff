import React from 'react'
import { useEffect,useState } from 'react'

export const useNavbar = () => {
    const [isNavbar,setNavbar]=useState(false);
    const handleScroll=()=>{
        window.scrollY > 100 ? setNavbar(true) : setNavbar(false);

    };

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.removeEventListener("scroll",()=>handleScroll);
        };
    },[handleScroll]);
  return {isNavbar};
}
