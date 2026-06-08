import React, { useState } from 'react';
import { personal, skills } from '../data/portfolio';
import useInView from '../hooks/useInView';

function SkillRow({ skill, i }) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);
  const w = 52 + ((skill.charCodeAt(0)*11 + skill.charCodeAt(skill.length-1)*7 + skill.length*13) % 42);
  return (
    <div ref={ref} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{ marginBottom:16, opacity:inView?1:0, transform:inView?'none':'translateY(10px)', transition:`opacity .5s ${i*.04}s cubic-bezier(0.16,1,0.3,1), transform .5s ${i*.04}s` }}>
      <span style={{ fontSize:14, color:hov?'#0a0a0a':'rgba(10,10,10,0.55)', display:'block', marginBottom:7, transition:'color .2s', fontWeight:400 }}>{skill}</span>
      <div style={{ height:1, background:'rgba(10,10,10,0.1)' }}>
        <div style={{ height:1, background:hov?'#0a0a0a':'rgba(10,10,10,0.35)', width:inView?`${w}%`:'0%', transition:`width .9s ${i*.05}s cubic-bezier(0.16,1,0.3,1)` }} />
      </div>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView(0.05);
  return (
    <section id="about" style={{ paddingTop:140, paddingBottom:140 }}>

      {/* Section label */}
      <div style={{ padding:'0 48px 60px' }}>
        <span style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)' }}>About</span>
      </div>

      {/* Big statement — like "EVERY GLANCE IS A STATEMENT" taking full width */}
      <div ref={ref} style={{ padding:'0 48px', marginBottom:100, opacity:inView?1:0, transition:'opacity .9s cubic-bezier(0.16,1,0.3,1)' }}>
        <h2 style={{ fontFamily:'Helvetica Neue,Helvetica,Arial,sans-serif', fontWeight:700, fontSize:'clamp(40px,7vw,100px)', letterSpacing:'-0.04em', lineHeight:0.88, textTransform:'uppercase', color:'#0a0a0a', marginBottom:0 }}>
          Designed with intention.<br/>
          <span style={{ color:'rgba(10,10,10,0.22)' }}>Built with precision.</span>
        </h2>
      </div>

      {/* Two column content */}
      <div style={{ padding:'0 48px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80 }}>
        <div>
          <p style={{ fontSize:17, color:'rgba(10,10,10,0.72)', lineHeight:1.9, marginBottom:20, fontWeight:300 }}>{personal.bio2}</p>
          <p style={{ fontSize:17, color:'rgba(10,10,10,0.72)', lineHeight:1.9, marginBottom:56, fontWeight:300 }}>
            
          </p>

          {/* Fact grid */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'rgba(10,10,10,0.1)' }}>
            {[['Location',personal.location],['Available',personal.available],['Education','IxD + Web Dev, Beckmans'],['Seeking','Full-time roles']].map(([k,v]) => (
              <div key={k} style={{ background:'#f2f0eb', padding:'20px' }}>
                <div style={{ fontSize:10, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(10,10,10,0.4)', marginBottom:5 }}>{k}</div>
                <div style={{ fontSize:14, color:'#0a0a0a', fontWeight:500 }}>{v}</div>
              </div>
            ))}
          </div>

          <div style={{ display:'flex', gap:14, flexWrap:'wrap', marginTop:36 }}>
            {[['GitHub',personal.github],['LinkedIn',personal.linkedin],['Email',`mailto:${personal.email}`]].map(([l,h]) => (
              <a key={l} href={h} target="_blank" rel="noreferrer"
                style={{ padding:'10px 20px', border:'1px solid rgba(10,10,10,0.22)', fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(10,10,10,0.65)', transition:'all .25s' }}
                onMouseEnter={e=>{e.currentTarget.style.background='#0a0a0a';e.currentTarget.style.color='#f2f0eb';e.currentTarget.style.borderColor='#0a0a0a'}}
                onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='rgba(10,10,10,0.65)';e.currentTarget.style.borderColor='rgba(10,10,10,0.22)'}}>
                {l} ↗
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          {skills.map((group, gi) => (
            <div key={group.cat} style={{ marginBottom:44 }}>
              <div style={{ fontSize:11, letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(10,10,10,0.38)', marginBottom:20, paddingBottom:14, borderBottom:'1px solid rgba(10,10,10,0.08)' }}>{group.cat}</div>
              {group.items.map((s,si) => <SkillRow key={s} skill={s} i={gi*7+si} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
