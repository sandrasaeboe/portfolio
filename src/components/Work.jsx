import React, { useState } from 'react';
import { projects } from '../data/portfolio';
import useInView from '../hooks/useInView';

function ProjectRow({ p, i }) {
  const [ref, inView] = useInView(0.06);
  const [open, setOpen] = useState(i === 0);
  const [hov, setHov] = useState(false);

  return (
    <div ref={ref}
      style={{
        borderTop: i === 0 ? '1px solid rgba(10,10,10,0.1)' : 'none',
        borderBottom:'1px solid rgba(10,10,10,0.1)',
        opacity:inView?1:0, transform:inView?'none':'translateY(28px)',
        transition:`opacity .8s ${i*.1}s cubic-bezier(0.16,1,0.3,1), transform .8s ${i*.1}s cubic-bezier(0.16,1,0.3,1)`,
      }}
    >
      {/* Main row — click to expand */}
      <button
        onClick={() => setOpen(!open)}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        data-hover
        style={{ width:'100%', padding:'52px 48px', display:'flex', alignItems:'baseline', justifyContent:'space-between', gap:32, textAlign:'left', background:'transparent', transition:'background .3s' }}
      >
        <div style={{ flex:1 }}>
          {/* Year + role — tiny above the title */}
          <p style={{ fontSize:11, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)', marginBottom:16, fontWeight:400 }}>
            {p.index} — {p.year}
          </p>
          {/* HUGE title — like "THE WORLD FADES INTO STARES" */}
          <h3 style={{
            fontFamily:'Helvetica Neue,Helvetica,Arial,sans-serif',
            fontWeight:700,
            fontSize:'clamp(44px,8vw,120px)',
            letterSpacing:'-0.04em',
            textTransform:'uppercase',
            lineHeight:0.88,
            color:'#0a0a0a',
            transition:'opacity .2s',
            opacity: hov && !open ? 0.55 : 1,
          }}>
            {p.title}
          </h3>
        </div>
        <span style={{ fontSize:28, color:'rgba(10,10,10,0.3)', transform:open?'rotate(45deg)':'none', transition:'transform .4s cubic-bezier(0.16,1,0.3,1)', flexShrink:0, lineHeight:1 }}>+</span>
      </button>

      {/* Expanded content */}
      <div style={{ overflow:'hidden', maxHeight:open?'600px':'0', transition:'max-height .6s cubic-bezier(0.16,1,0.3,1)' }}>
        <div style={{ padding:'0 48px 60px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 80px', alignItems:'start' }}>
          <div>
            <p style={{ fontSize:17, color:'rgba(10,10,10,0.7)', lineHeight:1.9, fontWeight:300, marginBottom:24 }}>
              {p.desc}
            </p>
            <p style={{ fontSize:15, fontStyle:'italic', color:'rgba(10,10,10,0.35)', marginBottom:32, fontWeight:300 }}>
              "{p.what}"
            </p>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              {p.tech.map(t => (
                <span key={t} style={{ fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', padding:'5px 14px', border:'1px solid rgba(10,10,10,0.2)', color:'rgba(10,10,10,0.65)' }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <p style={{ fontSize:12, letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)' }}>{p.role}</p>
            <a href={p.link} style={{ display:'inline-flex', alignItems:'center', gap:10, fontSize:13, letterSpacing:'0.1em', textTransform:'uppercase', color:'#0a0a0a', borderBottom:'1px solid rgba(10,10,10,0.25)', paddingBottom:4, alignSelf:'flex-start', transition:'border-color .2s' }}
              onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(10,10,10,0.8)'} onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(10,10,10,0.25)'}>
              View project ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const [ref, inView] = useInView(0.05);
  return (
    <section id="work" style={{ paddingTop:120 }}>
      <div ref={ref} style={{ padding:'0 48px 56px', opacity:inView?1:0, transition:'opacity .7s cubic-bezier(0.16,1,0.3,1)' }}>
        <p style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)' }}>Selected Work</p>
      </div>
      {projects.map((p,i) => <ProjectRow key={p.id} p={p} i={i} />)}
    </section>
  );
}
