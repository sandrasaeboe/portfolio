import React, { useEffect, useState } from 'react';
import './index.css';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const fn = () => { const m = document.body.scrollHeight - window.innerHeight; setProg(m>0?window.scrollY/m:0); };
    window.addEventListener('scroll', fn, {passive:true});
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <>
      <Cursor />
      {/* Scroll progress — dark on light */}
      <div style={{position:'fixed',top:0,left:0,zIndex:600,height:2,background:'#0a0a0a',width:`${prog*100}%`,transition:'width .07s linear',pointerEvents:'none'}} />
      <Navbar />
      <main><Hero /><Work /><About /><Experience /><Contact /></main>
      <Footer />
      <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} aria-label="Back to top"
        style={{position:'fixed',bottom:32,right:32,zIndex:50,width:36,height:36,border:'1px solid rgba(10,10,10,0.2)',background:'#f2f0eb',color:'rgba(10,10,10,0.45)',fontSize:14,display:'flex',alignItems:'center',justifyContent:'center',opacity:prog>.12?1:0,transform:prog>.12?'none':'translateY(8px)',transition:'all .4s cubic-bezier(0.16,1,0.3,1)',pointerEvents:prog>.12?'all':'none'}}
        onMouseEnter={e=>{e.currentTarget.style.background='#0a0a0a';e.currentTarget.style.color='#f2f0eb'}}
        onMouseLeave={e=>{e.currentTarget.style.background='#f2f0eb';e.currentTarget.style.color='rgba(10,10,10,0.45)'}}>↑</button>
    </>
  );
}
