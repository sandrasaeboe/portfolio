import React, { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';
const L = [['Work','#work'],['About','#about'],['Experience','#experience'],['Contact','#contact']];
export default function Navbar() {
  const [s,setS] = useState(false), [o,setO] = useState(false);
  useEffect(() => { const fn=()=>setS(window.scrollY>60); window.addEventListener('scroll',fn,{passive:true}); return()=>window.removeEventListener('scroll',fn); },[]);
  return (
    <>
      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:500,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 48px',height:s?52:68,background:s?'rgba(242,240,235,0.97)':'transparent',borderBottom:s?'1px solid rgba(10,10,10,0.1)':'1px solid transparent',backdropFilter:s?'blur(16px)':'none',transition:'all .4s cubic-bezier(0.16,1,0.3,1)'}}>
        <a href="/" style={{fontSize:13,letterSpacing:'0.18em',textTransform:'uppercase',fontWeight:700,color:'#0a0a0a'}}>{personal.initials}</a>
        <div style={{display:'flex',gap:36,alignItems:'center'}} className="nd">
          {L.map(([l,h])=>(
            <a key={h} href={h} style={{fontSize:13,color:'rgba(10,10,10,0.45)',transition:'color .2s'}} onMouseEnter={e=>e.target.style.color='#0a0a0a'} onMouseLeave={e=>e.target.style.color='rgba(10,10,10,0.45)'}>{l}</a>
          ))}
          <a href={`mailto:${personal.email}`} style={{fontSize:12,letterSpacing:'0.1em',textTransform:'uppercase',padding:'9px 20px',border:'1px solid rgba(10,10,10,0.35)',color:'#0a0a0a',transition:'all .25s'}}
            onMouseEnter={e=>{e.currentTarget.style.background='#0a0a0a';e.currentTarget.style.color='#f2f0eb'}} onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='#0a0a0a'}}>Hire me</a>
        </div>
        <button onClick={()=>setO(!o)} className="nm" style={{display:'none',flexDirection:'column',gap:5,padding:4}}>
          {[0,1].map(i=><span key={i} style={{display:'block',width:22,height:1,background:'#0a0a0a',transition:'all .3s',transform:o?(i===0?'rotate(45deg) translateY(3px)':'rotate(-45deg) translateY(-3px)'):'none'}}/>)}
        </button>
      </nav>
      <div style={{position:'fixed',inset:0,zIndex:499,background:'#f2f0eb',display:'flex',flexDirection:'column',justifyContent:'center',padding:'0 48px',opacity:o?1:0,pointerEvents:o?'all':'none',transition:'opacity .35s'}}>
        {L.map(([l,h],i)=>(
          <a key={h} href={h} onClick={()=>setO(false)} style={{fontSize:'clamp(48px,11vw,96px)',fontWeight:700,letterSpacing:'-0.04em',textTransform:'uppercase',color:'#0a0a0a',borderBottom:'1px solid rgba(10,10,10,0.08)',padding:'16px 0',opacity:o?1:0,transform:o?'none':'translateY(12px)',transition:`all .4s ${i*.07}s`}}>{l}</a>
        ))}
      </div>
      <style>{`@media(max-width:680px){.nd{display:none!important}.nm{display:flex!important}}`}</style>
    </>
  );
}
