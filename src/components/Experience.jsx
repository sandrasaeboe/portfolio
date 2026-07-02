import React, { useState } from 'react';
import { experience } from '../data/portfolio';
import useInView from '../hooks/useInView';

function Row({ item, i }) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);
  return (
    <div ref={ref} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ borderBottom:'1px solid rgba(10,10,10,0.1)', padding:'44px 48px', display:'grid', gridTemplateColumns:'180px 1fr', gap:'0 64px', background:hov?'rgba(10,10,10,0.02)':'transparent', opacity:inView?1:0, transform:inView?'none':'translateY(14px)', transition:`opacity .6s ${i*.1}s cubic-bezier(0.16,1,0.3,1), transform .6s ${i*.1}s, background .3s` }}>
      <div>
        <p style={{ fontSize:13, color:'rgba(10,10,10,0.45)', marginBottom:6 }}>{item.period}</p>
        <p style={{ fontSize:13, color:hov?'rgba(10,10,10,0.75)':'rgba(10,10,10,0.45)', transition:'color .25s' }}>{item.company}</p>
      </div>
      <div>
        <h3 style={{ fontSize:'clamp(22px,3.5vw,36px)', fontWeight:700, letterSpacing:'-0.03em', textTransform:'uppercase', color:'#0a0a0a', marginBottom:12 }}>{item.role}</h3>
        <p style={{ fontSize:15, color:'rgba(10,10,10,0.6)', lineHeight:1.8, fontWeight:300 }}>{item.desc}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView(0.1);
  return (
    <section id="experience" style={{ borderTop:'1px solid rgba(10,10,10,0.1)', paddingTop:120 }}>
      <div ref={ref} style={{ padding:'0 48px 56px', opacity:inView?1:0, transition:'opacity .7s' }}>
        <p style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)' }}>Experience</p>
      </div>
      {experience.map((item,i) => <Row key={i} item={item} i={i} />)}
      <div style={{ borderBottom:'1px solid rgba(10,10,10,0.1)', padding:'44px 48px', display:'grid', gridTemplateColumns:'180px 1fr', gap:'0 64px', background:'rgba(10,10,10,0.01)' }}>
        <div>
          <p style={{ fontSize:13, color:'rgba(10,10,10,0.45)', marginBottom:6 }}>2022 – 2026</p>
          <p style={{ fontSize:13, color:'rgba(10,10,10,0.45)' }}>University</p>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:16 }}>
          <div>
            <h3 style={{ fontSize:'clamp(22px,3.5vw,36px)', fontWeight:700, letterSpacing:'-0.03em', textTransform:'uppercase', color:'#0a0a0a', marginBottom:10 }}>Bachelor's — IxD + Web Dev</h3>
            <p style={{ fontSize:15, color:'rgba(10,10,10,0.6)', fontWeight:300 }}>Interaction Design with Web Development. Graduating June 2026.</p>
          </div>
          <span style={{ fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', padding:'6px 14px', border:'1px solid rgba(10,10,10,0.25)', color:'rgba(10,10,10,0.6)', whiteSpace:'nowrap' }}>In Progress</span>
        </div>
      </div>
    </section>
  );
}
