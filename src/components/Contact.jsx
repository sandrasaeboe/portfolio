import React from 'react';
import { personal } from '../data/portfolio';
import useInView from '../hooks/useInView';

export default function Contact() {
  const [eRef,eIn] = useInView(0.05), [fRef,fIn] = useInView(0.05);

  return (
    <section id="contact" style={{ borderTop:'1px solid rgba(10,10,10,0.1)', paddingTop:120, paddingBottom:100 }}>

      <div style={{ padding:'0 48px 64px' }}>
        <span style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)' }}>Contact</span>
      </div>

      {/* Big statement line — like "MY TREND IS A LIFESTYLE" spanning full width */}
      <div ref={eRef} style={{ padding:'0 48px 80px', opacity:eIn?1:0, transform:eIn?'none':'translateY(20px)', transition:'all .9s cubic-bezier(0.16,1,0.3,1)', overflow:'hidden' }}>
        <p style={{ fontSize:13, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)', marginBottom:28 }}>Open to work · {personal.available}</p>
        <a href={`mailto:${personal.email}`}
          style={{ display:'block', fontFamily:'Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight:700, fontSize:'clamp(32px,6vw,96px)', letterSpacing:'-0.04em', lineHeight:1, color:'#0a0a0a', transition:'opacity .2s', wordBreak:'break-all' }}
          onMouseEnter={e=>e.currentTarget.style.opacity='.3'} onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
          {personal.email}
        </a>
      </div>

      {/* CTA */}
      <div ref={fRef} style={{ padding:'0 48px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 100px', opacity:fIn?1:0, transform:fIn?'none':'translateY(16px)', transition:'all .9s .1s cubic-bezier(0.16,1,0.3,1)' }}>
        <div>
          <h3 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:700, letterSpacing:'-0.04em', textTransform:'uppercase', marginBottom:16 }}>Let's talk.</h3>
          <p style={{ fontSize:16, color:'rgba(10,10,10,0.55)', fontWeight:300, lineHeight:1.7, marginBottom:32, maxWidth:380 }}>
            Reach out directly — I read every message and reply within 24 hours.
          </p>
          <a href={`mailto:${personal.email}`}
            style={{ display:'inline-flex', alignItems:'center', gap:10, padding:'16px 32px', background:'#0a0a0a', color:'#f2f0eb', fontSize:12, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:500, transition:'opacity .2s' }}
            onMouseEnter={e=>e.currentTarget.style.opacity='.75'} onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
            Email me ↗
          </a>
        </div>
        <div style={{ display:'flex', flexDirection:'column', justifyContent:'space-between', paddingBottom:8 }}>
          <div>
            <p style={{ fontSize:'clamp(18px,2.5vw,26px)', color:'rgba(10,10,10,0.2)', fontWeight:300, lineHeight:1.55, marginBottom:24, letterSpacing:'-0.01em' }}>
              "Design is not what you see.<br/>It is what you experience."
            </p>
            <p style={{ fontSize:12, color:'rgba(10,10,10,0.2)', letterSpacing:'0.08em' }}></p>
          </div>
          <div style={{ display:'flex', gap:20 }}>
            {[['GitHub',personal.github],['LinkedIn',personal.linkedin]].map(([l,h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer" style={{ fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)', borderBottom:'1px solid rgba(10,10,10,0.15)', paddingBottom:3, transition:'all .2s' }}
                onMouseEnter={e=>{e.currentTarget.style.color='#0a0a0a';e.currentTarget.style.borderColor='rgba(10,10,10,0.5)'}} onMouseLeave={e=>{e.currentTarget.style.color='rgba(10,10,10,0.4)';e.currentTarget.style.borderColor='rgba(10,10,10,0.15)'}}>
                {l} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
