"use client";
import { useState, useEffect, useRef } from "react";

function useInView(ref,t=0.12){const[v,setV]=useState(false);useEffect(()=>{if(!ref.current)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)setV(true)},{threshold:t});o.observe(ref.current);return()=>o.disconnect()},[ref,t]);return v}
function R({children,d=0}){const r=useRef(null);const v=useInView(r);return<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(40px)",transition:`all 0.9s cubic-bezier(0.16,1,0.3,1) ${d}s`}}>{children}</div>}

const P={bg:"#F0F4F8",card:"#FFFFFF",navy:"#1E3A5F",navyMid:"#2D4A6E",sky:"#4A9FD5",skyLight:"#EBF5FF",warm:"#F7B731",warmLight:"#FFF8E1",red:"#E74C3C",redLight:"#FDEDEC",green:"#27AE60",greenLight:"#EAFAF1",text:"#1A2744",textMid:"#506680",textLight:"#8FA3BA",shadow:"0 2px 16px rgba(30,58,95,0.06)",shadowLg:"0 8px 32px rgba(30,58,95,0.1)"};

const issues=[{name:"Economy",heat:94,change:"+12%",icon:"💰",color:P.warm},{name:"Healthcare",heat:87,change:"+8%",icon:"🏥",color:P.sky},{name:"Housing",heat:82,change:"+15%",icon:"🏠",color:P.green},{name:"Education",heat:79,change:"+3%",icon:"🎓",color:"#8B5CF6"},{name:"Immigration",heat:76,change:"+22%",icon:"🌍",color:P.red},{name:"Safety",heat:71,change:"-4%",icon:"🛡️",color:P.navy}];

const candidates=[{name:"Sarah Mitchell",party:"D",office:"Mayor — Atlanta",stances:14,recent:"Updated housing position",color:P.sky},{name:"James Crawford",party:"R",office:"GA State Senate — D5",stances:11,recent:"New tax reform statement",color:P.red}];

const updates=[{type:"stance_change",title:"Mayor reverses affordable housing mandate position",topic:"Housing",entity:"Office of the Mayor",time:"4h ago",trust:"Official",color:P.warm,bg:P.warmLight},{type:"source_added",title:"New legislative record — GA Senate Bill 247",topic:"Tax Code",entity:"GA Legislature",time:"8h ago",trust:"Legislative",color:P.sky,bg:P.skyLight},{type:"topic_update",title:"Federal minimum wage enters committee stage",topic:"Labor",entity:"US Congress",time:"1d ago",trust:"News Report",color:P.green,bg:P.greenLight}];

export default function CampaignCompass(){
  const[tab,setTab]=useState("home");const[ready,setReady]=useState(false);
  useEffect(()=>{setTimeout(()=>setReady(true),150)},[]);

  return(
    <div style={{background:P.bg,color:P.text,minHeight:"100vh",fontFamily:"'DM Sans', sans-serif"}}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:wght@400;600;700;800&display=swap" rel="stylesheet"/>

      <nav style={{position:"sticky",top:0,zIndex:100,padding:"14px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",backdropFilter:"blur(20px)",background:"rgba(240,244,248,0.88)",borderBottom:"1px solid rgba(30,58,95,0.06)"}}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          <div style={{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#1E3A5F,#4A9FD5)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,boxShadow:"0 4px 12px rgba(30,58,95,0.2)"}}>🧭</div>
          <div><span style={{fontSize:13,fontWeight:800,color:P.navy}}>CAMPAIGN</span><span style={{fontSize:13,fontWeight:500,color:P.sky,marginLeft:4}}>COMPASS</span></div>
        </div>
        <div style={{display:"flex",gap:8}}>
          <div style={{padding:"5px 10px",borderRadius:8,background:P.skyLight,fontSize:10,fontWeight:700,color:P.navy}}>ATL, GA</div>
          <div style={{width:36,height:36,borderRadius:10,background:"linear-gradient(135deg,#1E3A5F20,#4A9FD520)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,color:P.navy}}>DD</div>
        </div>
      </nav>

      <div style={{maxWidth:480,margin:"0 auto",padding:"0 20px 120px"}}>

        {/* HERO */}
        <div style={{paddingTop:24,opacity:ready?1:0,transform:ready?"translateY(0)":"translateY(30px)",transition:"all 1s cubic-bezier(0.16,1,0.3,1)"}}>
          <div style={{padding:"28px 24px",borderRadius:28,background:"linear-gradient(135deg,#1E3A5F,#2D4A6E,#4A9FD5)",color:"#fff",position:"relative",overflow:"hidden",boxShadow:"0 12px 40px rgba(30,58,95,0.3)",marginBottom:24}}>
            <div style={{position:"absolute",top:-40,right:-40,width:140,height:140,borderRadius:"50%",background:"rgba(247,183,49,0.12)"}}/>
            <div style={{position:"absolute",bottom:-20,left:-20,width:80,height:80,borderRadius:"50%",background:"rgba(255,255,255,0.06)"}}/>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.16em",opacity:0.85,marginBottom:10}}>POLITICAL INTELLIGENCE</div>
            <h1 style={{fontFamily:"'Playfair Display', serif",fontSize:"clamp(26px,7vw,38px)",fontWeight:700,lineHeight:1.1,marginBottom:10}}>Where they stand.<br/><span style={{color:"#F7B731"}}>How it changed.</span></h1>
            <p style={{fontSize:13,lineHeight:1.5,opacity:0.85,maxWidth:300,marginBottom:18}}>Track stances, policy updates, and civic changes with source-backed intelligence.</p>
            <div style={{display:"flex",gap:10}}>
              <div style={{padding:"10px 18px",borderRadius:14,background:"#F7B731",color:P.navy,fontSize:12,fontWeight:800,cursor:"pointer",boxShadow:"0 4px 12px rgba(247,183,49,0.3)"}}>Explore Issues</div>
              <div style={{padding:"10px 18px",borderRadius:14,background:"rgba(255,255,255,0.2)",fontSize:12,fontWeight:700,cursor:"pointer"}}>Compare →</div>
            </div>
          </div>
        </div>

        {/* ISSUES HEAT */}
        <R>
          <h2 style={{fontFamily:"'Playfair Display', serif",fontSize:22,fontWeight:700,color:P.navy,marginBottom:14}}>Trending Issues</h2>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:32}}>
            {issues.map(i=>(
              <div key={i.name} style={{borderRadius:18,background:"#fff",border:"1px solid rgba(30,58,95,0.06)",padding:16,cursor:"pointer",boxShadow:P.shadow,position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",bottom:-8,right:-8,width:40,height:40,borderRadius:"50%",background:`${i.color}10`}}/>
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:8}}>
                  <span style={{fontSize:24}}>{i.icon}</span>
                  <span style={{fontSize:9,fontWeight:700,color:i.change.startsWith("+")?P.green:P.red,padding:"2px 6px",borderRadius:4,background:i.change.startsWith("+")?P.greenLight:P.redLight}}>{i.change}</span>
                </div>
                <div style={{fontSize:13,fontWeight:700,color:P.navy,marginBottom:4}}>{i.name}</div>
                <div style={{height:4,borderRadius:4,background:"rgba(30,58,95,0.06)",overflow:"hidden"}}>
                  <div style={{height:"100%",borderRadius:4,background:`linear-gradient(90deg, ${i.color}, ${i.color}80)`,width:`${i.heat}%`}}/>
                </div>
              </div>
            ))}
          </div>
        </R>

        {/* CANDIDATES */}
        <R>
          <h2 style={{fontFamily:"'Playfair Display', serif",fontSize:22,fontWeight:700,color:P.navy,marginBottom:14}}>Local Officials</h2>
          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:32}}>
            {candidates.map(c=>(
              <div key={c.name} style={{borderRadius:20,background:"#fff",border:"1px solid rgba(30,58,95,0.06)",padding:18,display:"flex",gap:14,alignItems:"center",boxShadow:P.shadow,cursor:"pointer"}}>
                <div style={{width:50,height:50,borderRadius:14,background:`${c.color}15`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,fontWeight:800,color:c.color,flexShrink:0,border:`2px solid ${c.color}30`}}>{c.name.split(" ").map(w=>w[0]).join("")}</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:2}}>
                    <span style={{fontSize:14,fontWeight:700,color:P.navy}}>{c.name}</span>
                    <span style={{padding:"1px 6px",borderRadius:4,background:`${c.color}15`,color:c.color,fontSize:9,fontWeight:800}}>{c.party}</span>
                  </div>
                  <div style={{fontSize:10,color:P.textLight,marginBottom:3}}>{c.office}</div>
                  <div style={{fontSize:10,color:P.textMid}}>{c.stances} stances • {c.recent}</div>
                </div>
                <div style={{padding:"8px 12px",borderRadius:10,background:P.skyLight,fontSize:10,fontWeight:700,color:P.navy,cursor:"pointer"}}>Compare</div>
              </div>
            ))}
          </div>
        </R>

        {/* UPDATES */}
        <R>
          <h2 style={{fontFamily:"'Playfair Display', serif",fontSize:22,fontWeight:700,color:P.navy,marginBottom:14}}>Latest Updates</h2>
          <div style={{display:"flex",flexDirection:"column",gap:10,marginBottom:32}}>
            {updates.map((u,i)=>(
              <div key={i} style={{borderRadius:20,background:"#fff",border:"1px solid rgba(30,58,95,0.06)",padding:18,boxShadow:P.shadow,position:"relative",overflow:"hidden"}}>
                <div style={{position:"absolute",top:0,left:0,width:4,height:"100%",background:u.color}}/>
                <div style={{display:"flex",gap:6,marginBottom:8,flexWrap:"wrap"}}>
                  <span style={{padding:"3px 8px",borderRadius:6,background:u.bg,color:u.color,fontSize:9,fontWeight:800}}>{u.type==="stance_change"?"STANCE CHANGE":u.type==="source_added"?"NEW SOURCE":"UPDATE"}</span>
                  <span style={{padding:"3px 8px",borderRadius:6,background:"rgba(30,58,95,0.04)",fontSize:9,fontWeight:600,color:P.textLight}}>✓ {u.trust}</span>
                </div>
                <div style={{fontSize:14,fontWeight:700,color:P.navy,lineHeight:1.3,marginBottom:4}}>{u.title}</div>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                  <span style={{fontSize:10,color:P.textLight}}>{u.topic} • {u.entity}</span>
                  <span style={{fontSize:9,color:P.textLight}}>{u.time}</span>
                </div>
              </div>
            ))}
          </div>
        </R>

        {/* COMPARE */}
        <R>
          <div style={{borderRadius:24,background:"#fff",border:"1px solid rgba(30,58,95,0.06)",padding:24,boxShadow:P.shadow,marginBottom:32}}>
            <div style={{fontSize:10,fontWeight:700,color:P.warm,letterSpacing:"0.12em",marginBottom:10}}>COMPARE CANDIDATES</div>
            <div style={{fontFamily:"'Playfair Display', serif",fontSize:22,fontWeight:700,color:P.navy,lineHeight:1.2,marginBottom:12}}>Side-by-side on any issue</div>
            <div style={{display:"flex",gap:8,marginBottom:16}}>
              <div style={{flex:1,padding:14,borderRadius:12,background:P.skyLight,border:"1px dashed rgba(74,159,213,0.3)",textAlign:"center",fontSize:11,color:P.sky,cursor:"pointer",fontWeight:700}}>+ Candidate A</div>
              <div style={{display:"flex",alignItems:"center",fontSize:12,color:P.textLight,fontWeight:700}}>VS</div>
              <div style={{flex:1,padding:14,borderRadius:12,background:P.redLight,border:"1px dashed rgba(231,76,60,0.3)",textAlign:"center",fontSize:11,color:P.red,cursor:"pointer",fontWeight:700}}>+ Candidate B</div>
            </div>
            <div style={{padding:"12px 0",borderRadius:14,background:"linear-gradient(135deg,#1E3A5F,#4A9FD5)",textAlign:"center",fontSize:12,fontWeight:800,color:"#fff",cursor:"pointer",boxShadow:"0 4px 12px rgba(30,58,95,0.2)"}}>COMPARE NOW</div>
          </div>
        </R>

        {/* FOLLOW */}
        <R>
          <div style={{borderRadius:24,background:"linear-gradient(135deg,#1E3A5F,#2D4A6E)",padding:28,color:"#fff",textAlign:"center",boxShadow:P.shadowLg,position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:-30,right:-30,width:100,height:100,borderRadius:"50%",background:"rgba(247,183,49,0.1)"}}/>
            <div style={{fontSize:10,fontWeight:700,letterSpacing:"0.15em",color:"#F7B731",marginBottom:10}}>STAY INFORMED</div>
            <div style={{fontFamily:"'Playfair Display', serif",fontSize:22,fontWeight:700,marginBottom:10}}>Follow topics that<br/>matter to you</div>
            <p style={{fontSize:12,opacity:0.8,marginBottom:16}}>Get notified when positions change or new legislation drops.</p>
            <div style={{display:"flex",gap:6,justifyContent:"center",flexWrap:"wrap"}}>
              {["Economy","Housing","Education","Healthcare"].map(t=>(
                <span key={t} style={{padding:"8px 14px",borderRadius:10,background:"rgba(255,255,255,0.12)",fontSize:11,fontWeight:700,cursor:"pointer"}}>{t}</span>
              ))}
            </div>
          </div>
        </R>
      </div>

      <div style={{position:"fixed",bottom:0,left:0,right:0,zIndex:100,backdropFilter:"blur(24px)",background:"rgba(255,255,255,0.92)",borderTop:"1px solid rgba(30,58,95,0.06)",padding:"8px 0 env(safe-area-inset-bottom, 8px)"}}>
        <div style={{maxWidth:480,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(5,1fr)",textAlign:"center"}}>
          {[{icon:"🏠",label:"Home",key:"home"},{icon:"🔍",label:"Discover",key:"discover"},{icon:"⚖️",label:"Issues",key:"issues"},{icon:"📊",label:"Compare",key:"compare"},{icon:"👤",label:"Profile",key:"profile"}].map(t=>(
            <div key={t.key} onClick={()=>setTab(t.key)} style={{cursor:"pointer",padding:"6px 0"}}>
              <div style={{fontSize:20,marginBottom:1,opacity:tab===t.key?1:0.4,transform:tab===t.key?"scale(1.15)":"scale(1)",transition:"all 0.3s cubic-bezier(0.16,1,0.3,1)"}}>{t.icon}</div>
              <div style={{fontSize:9,fontWeight:700,color:tab===t.key?P.navy:P.textLight}}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
