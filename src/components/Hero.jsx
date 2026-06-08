import React, { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';

function Clock() {
  const [t, setT] = useState('');
  useEffect(() => {
    const tick = () => setT(new Date().toLocaleTimeString('no-NO', {hour12:false}));
    tick(); const id = setInterval(tick, 1000); return () => clearInterval(id);
  }, []);
  return <span>{t}</span>;
}

export default function Hero() {
  const [on, setOn] = useState(false);
  useEffect(() => { const id = setTimeout(() => setOn(true), 100); return () => clearTimeout(id); }, []);

  return (
    <section style={{ minHeight:'100vh', display:'flex', flexDirection:'column', padding:'0 48px', paddingTop:68, position:'relative' }}>

      {/* Top small metadata row */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', paddingTop:32, paddingBottom:32, opacity:on?1:0, transition:'opacity .8s .1s' }}>
        <span style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)' }}>
          {personal.location}
        </span>
        <span style={{ fontSize:11, letterSpacing:'0.14em', color:'rgba(10,10,10,0.4)' }}>
          <Clock />
        </span>
        <span style={{ display:'flex', alignItems:'center', gap:8, fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)' }}>
          <span style={{ width:5, height:5, borderRadius:'50%', background:'#0a0a0a', display:'inline-block', animation:'blink 3s infinite' }} />
          Available {personal.available}
        </span>
      </div>

      {/* THE NAME — takes up the page like "OUT OF TIME" on the poster */}
      <div style={{ flex:1, display:'flex', flexDirection:'column', justifyContent:'center', position:'relative' }}>

        {/* Glitch layers */}
        {['g1','g2'].map(a => (
          <span key={a} aria-hidden style={{
            position:'absolute',
            fontFamily:'Helvetica Neue,Helvetica,Arial,sans-serif',
            fontWeight:700, fontSize:'clamp(96px,17vw,260px)',
            letterSpacing:'-0.05em', lineHeight:0.82,
            textTransform:'uppercase', color:'#0a0a0a',
            animation:`${a} 9s infinite`, pointerEvents:'none', userSelect:'none',
          }}>Sandra<br/>Sæbø</span>
        ))}

        <h1 style={{
          fontFamily:'Helvetica Neue,Helvetica,Arial,sans-serif',
          fontWeight:700, fontSize:'clamp(96px,17vw,260px)',
          letterSpacing:'-0.05em', lineHeight:0.82,
          textTransform:'uppercase', color:'#0a0a0a',
          opacity:on?1:0, transition:'opacity 1s .15s cubic-bezier(0.16,1,0.3,1)',
          position:'relative',
        }}>
          Sandra<br/>Sæbø
        </h1>

        {/* Role — sits under the name with space, like the small subtitle in the editorial */}
        <div style={{ marginTop:40, display:'flex', alignItems:'center', gap:20, opacity:on?1:0, transition:'opacity .8s .4s' }}>
          <div style={{ width:40, height:1, background:'#0a0a0a', flexShrink:0, transformOrigin:'left', animation:on?'lineGrow .8s .6s cubic-bezier(0.16,1,0.3,1) both':'none' }} />
          <p style={{ fontSize:15, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(10,10,10,0.55)', fontWeight:400 }}>
            {personal.role}
          </p>
        </div>
      </div>

      {/* Bottom — bio + CTA, pushed to bottom of viewport */}
      <div style={{ paddingBottom:64, display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'end', opacity:on?1:0, transition:'opacity .8s .55s', borderTop:'1px solid rgba(10,10,10,0.1)', paddingTop:40, marginTop:40 }}>
        <p style={{ fontSize:16, color:'rgba(10,10,10,0.65)', lineHeight:1.85, fontWeight:300, maxWidth:480 }}>
          {personal.bio}
        </p>
        <div style={{ display:'flex', gap:16, justifyContent:'flex-end', alignItems:'center', flexWrap:'wrap' }}>
          <a href="#work" style={{ fontSize:13, letterSpacing:'0.1em', textTransform:'uppercase', padding:'13px 28px', background:'#0a0a0a', color:'#f2f0eb', transition:'opacity .2s' }}
            onMouseEnter={e=>e.currentTarget.style.opacity='.75'} onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
            View Work
          </a>
          <a href={`mailto:${personal.email}`} style={{ fontSize:13, letterSpacing:'0.04em', color:'rgba(10,10,10,0.5)', borderBottom:'1px solid rgba(10,10,10,0.2)', paddingBottom:2, transition:'all .2s' }}
            onMouseEnter={e=>{e.currentTarget.style.color='#0a0a0a';e.currentTarget.style.borderColor='rgba(10,10,10,0.6)'}} onMouseLeave={e=>{e.currentTarget.style.color='rgba(10,10,10,0.5)';e.currentTarget.style.borderColor='rgba(10,10,10,0.2)'}}>
            {personal.email}
          </a>
        </div>
      </div>
    </section>
  );
}
