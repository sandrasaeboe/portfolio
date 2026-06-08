import React from 'react';
import { personal } from '../data/portfolio';
export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid rgba(10,10,10,0.1)', padding:'28px 48px', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16 }}>
      <span style={{ fontSize:12, color:'rgba(10,10,10,0.3)' }}>{personal.name} © {new Date().getFullYear()}</span>
      <div style={{ display:'flex', gap:28 }}>
        {[['GitHub',personal.github],['LinkedIn',personal.linkedin],['Email',`mailto:${personal.email}`]].map(([l,h]) => (
          <a key={l} href={h} target="_blank" rel="noreferrer" style={{ fontSize:12, letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(10,10,10,0.3)', transition:'color .2s' }}
            onMouseEnter={e=>e.target.style.color='#0a0a0a'} onMouseLeave={e=>e.target.style.color='rgba(10,10,10,0.3)'}>{l}</a>
        ))}
      </div>
    </footer>
  );
}
