import React, { useState } from 'react';
import { personal } from '../data/portfolio';
import useInView from '../hooks/useInView';

function Field({ label, name, value, onChange, multiline, focused, onFocus, onBlur }) {
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <div style={{ marginBottom:32 }}>
      <label style={{ fontSize:11, letterSpacing:'0.16em', textTransform:'uppercase', color:focused?'#0a0a0a':'rgba(10,10,10,0.4)', display:'flex', justifyContent:'space-between', marginBottom:10, transition:'color .2s' }}>
        {label} {value && <span>✓</span>}
      </label>
      <Tag name={name} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} required rows={multiline?5:undefined}
        style={{ width:'100%', background:'transparent', border:'none', borderBottom:`1px solid ${focused?'rgba(10,10,10,0.6)':'rgba(10,10,10,0.15)'}`, color:'#0a0a0a', fontFamily:'Helvetica Neue,sans-serif', fontSize:17, fontWeight:300, padding:'12px 0', outline:'none', resize:multiline?'vertical':'none', transition:'border-color .25s' }} />
    </div>
  );
}

export default function Contact() {
  const [eRef,eIn] = useInView(0.05), [fRef,fIn] = useInView(0.05);
  const [form,setForm] = useState({name:'',email:'',message:''});
  const [foc,setFoc] = useState(null), [status,setStatus] = useState('idle');
  const change = e => setForm(p=>({...p,[e.target.name]:e.target.value}));
  const submit = async e => { e.preventDefault(); setStatus('loading'); await new Promise(r=>setTimeout(r,1200)); setStatus('success'); };

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

      {/* Form */}
      <div ref={fRef} style={{ padding:'0 48px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0 100px', opacity:fIn?1:0, transform:fIn?'none':'translateY(16px)', transition:'all .9s .1s cubic-bezier(0.16,1,0.3,1)' }}>
        <div>
          {status === 'success' ? (
            <div>
              <h3 style={{ fontSize:48, fontWeight:700, letterSpacing:'-0.04em', textTransform:'uppercase', marginBottom:16 }}>Sent.</h3>
              <p style={{ fontSize:16, color:'rgba(10,10,10,0.55)', fontWeight:300 }}>I'll reply within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <Field label="Name"    name="name"    value={form.name}    onChange={change} focused={foc==='name'}    onFocus={()=>setFoc('name')}    onBlur={()=>setFoc(null)} />
              <Field label="Email"   name="email"   value={form.email}   onChange={change} focused={foc==='email'}   onFocus={()=>setFoc('email')}   onBlur={()=>setFoc(null)} />
              <Field label="Message" name="message" value={form.message} onChange={change} focused={foc==='message'} onFocus={()=>setFoc('message')} onBlur={()=>setFoc(null)} multiline />
              <button type="submit" disabled={status==='loading'}
                style={{ marginTop:8, width:'100%', padding:'16px', background:status==='loading'?'rgba(10,10,10,0.4)':'#0a0a0a', color:'#f2f0eb', fontSize:12, letterSpacing:'0.18em', textTransform:'uppercase', fontWeight:500, display:'flex', alignItems:'center', justifyContent:'center', gap:10, transition:'opacity .2s' }}
                onMouseEnter={e=>{if(status!=='loading')e.currentTarget.style.opacity='.75'}} onMouseLeave={e=>e.currentTarget.style.opacity='1'}>
                {status==='loading'?<><span style={{width:12,height:12,border:'1.5px solid rgba(242,240,235,0.3)',borderTopColor:'#f2f0eb',borderRadius:'50%',display:'inline-block',animation:'spin .7s linear infinite'}}/>Sending</>:'Send message'}
              </button>
              <p style={{ marginTop:12, fontSize:12, color:'rgba(10,10,10,0.3)', letterSpacing:'0.06em' }}>*Connect to Formspree to activate.</p>
            </form>
          )}
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
