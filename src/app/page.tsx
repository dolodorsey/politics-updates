'use client'
import { useState, useEffect, useRef } from 'react'

const topics = [
  { name: 'Economy & Jobs', icon: '📈', slug: 'economy-jobs' },
  { name: 'Healthcare', icon: '🏥', slug: 'healthcare' },
  { name: 'Education', icon: '🎓', slug: 'education' },
  { name: 'Housing', icon: '🏠', slug: 'housing' },
  { name: 'Immigration', icon: '🌍', slug: 'immigration' },
  { name: 'Criminal Justice', icon: '⚖️', slug: 'criminal-justice' },
  { name: 'Environment', icon: '🌿', slug: 'environment-climate' },
  { name: 'Gun Policy', icon: '🛡️', slug: 'gun-policy' },
  { name: 'Civil Rights', icon: '✊', slug: 'civil-rights' },
  { name: 'Foreign Policy', icon: '🏳️', slug: 'foreign-policy' },
  { name: 'Taxes & Budget', icon: '💰', slug: 'taxes-budget' },
  { name: 'Technology & AI', icon: '🤖', slug: 'technology-ai' },
  { name: 'Transportation', icon: '🚆', slug: 'transportation' },
  { name: 'Public Safety', icon: '🚨', slug: 'public-safety' },
  { name: 'Veterans', icon: '🎖️', slug: 'veterans-military' },
]

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [v, setV] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true) }, { threshold: 0.15 })
    o.observe(el); return () => o.disconnect()
  }, []); return { ref, v }
}

function R({ children, d = 0, c = '' }: { children: React.ReactNode, d?: number, c?: string }) {
  const { ref, v } = useReveal()
  return <div ref={ref} className={`transition-all duration-[1.1s] ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[60px]'} ${c}`}
    style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)', transitionDelay: `${d}ms` }}>{children}</div>
}

export default function Home() {
  const [h, setH] = useState(false)
  const [at, setAt] = useState<string|null>(null)
  useEffect(() => { setTimeout(() => setH(true), 200) }, [])

  return (
    <main className="min-h-screen bg-[#080A12] text-[#F0EDE5] overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0"><div className="absolute inset-0 bg-gradient-to-br from-[#080A12] via-[#0D1020] to-[#080A12]" /><div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#2A4A7F]/8 blur-[150px]" /><div className="absolute bottom-1/3 left-[15%] w-[400px] h-[400px] rounded-full bg-[#8B3A3A]/6 blur-[120px]" /></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className={`transition-all duration-[1.4s] ${h ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}>
            <p className="text-[#7B9EC8] tracking-[0.4em] uppercase text-[11px] font-light mb-8">Political Intelligence Platform</p>
            <h1 className="font-serif text-[clamp(48px,10vw,140px)] leading-[0.9] font-light tracking-[-0.02em]"><span className="text-[#F0EDE5]">Campaign</span><br/><span className="text-[#7B9EC8]">Compass</span></h1>
            <p className="text-[#F0EDE5]/50 text-[clamp(14px,1.4vw,18px)] max-w-lg mt-8 leading-relaxed font-light">Track every stance. Follow every shift. Compare every candidate. Source-backed political intelligence.</p>
          </div>
          <div className={`flex gap-4 mt-12 transition-all duration-[1.4s] delay-300 ${h ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}>
            <button className="px-8 py-4 bg-[#7B9EC8] text-[#080A12] font-medium tracking-[0.15em] text-[12px] uppercase hover:bg-[#9BB8DA] transition-all">Explore Issues</button>
            <button className="px-8 py-4 border border-[#F0EDE5]/15 text-[#F0EDE5]/70 tracking-[0.15em] text-[12px] uppercase hover:border-[#7B9EC8]/40 hover:text-[#7B9EC8] transition-all">Compare</button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#F0EDE5]/8">
          <div className="max-w-7xl mx-auto grid grid-cols-4 divide-x divide-[#F0EDE5]/8">
            {[{ v: '15', l: 'Topics' }, { v: '16', l: 'Geographies' }, { v: '0', l: 'Stances' }, { v: 'ATL', l: 'Starting Market' }].map((s, i) => (
              <div key={i} className="py-5 px-4 text-center"><p className="text-[#7B9EC8] font-serif text-2xl">{s.v}</p><p className="text-[#F0EDE5]/30 text-[10px] tracking-[0.3em] uppercase mt-1">{s.l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <R><p className="text-[#7B9EC8]/60 tracking-[0.4em] uppercase text-[10px] mb-6">The Problem</p>
            <h2 className="font-serif text-[clamp(28px,5vw,64px)] leading-[1.05] font-light">Political information is <span className="text-[#8B3A3A]">scattered</span>, <span className="text-[#8B3A3A]">unstructured</span>, and <span className="text-[#8B3A3A]">impossible to compare</span>.</h2></R>
          <R d={200}><p className="text-[#F0EDE5]/40 text-lg mt-10 max-w-2xl leading-relaxed">Campaign Compass structures it all — stances backed by sources, revision history you can trace, side-by-side comparisons, and real-time alerts when positions shift.</p></R>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t border-[#F0EDE5]/6">
        <div className="max-w-6xl mx-auto">
          <R><p className="text-[#7B9EC8]/60 tracking-[0.4em] uppercase text-[10px] mb-6">How It Works</p><h2 className="font-serif text-[clamp(28px,5vw,56px)] font-light mb-20">Intelligence, <span className="text-[#7B9EC8]">Not Opinion</span></h2></R>
          <div className="grid md:grid-cols-3 gap-1">
            {[{ n: '01', t: 'Structured Stances', d: 'Every position categorized by topic, sourced with citations, and confidence-rated.' },
              { n: '02', t: 'Compare Anything', d: 'Candidate vs candidate. Current vs past position. Your district vs the state.' },
              { n: '03', t: 'Track Changes', d: 'When a candidate shifts, you know. Revision history, source diffs, and alerts.' }].map((x, i) => (
              <R key={i} d={i * 150}><div className="bg-[#0D1020]/60 border border-[#F0EDE5]/6 p-10 h-full hover:border-[#7B9EC8]/20 transition-all duration-500 group">
                <span className="text-[#7B9EC8]/25 font-serif text-[48px] group-hover:text-[#7B9EC8]/50 transition-all">{x.n}</span>
                <h3 className="font-serif text-xl mt-4 mb-4">{x.t}</h3><p className="text-[#F0EDE5]/40 text-sm leading-relaxed">{x.d}</p>
              </div></R>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <R><p className="text-[#7B9EC8]/60 tracking-[0.4em] uppercase text-[10px] mb-6">Policy Topics</p><h2 className="font-serif text-[clamp(28px,5vw,56px)] font-light mb-16">Every Issue. <span className="text-[#7B9EC8]">Every Angle.</span></h2></R>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-[#F0EDE5]/6">
            {topics.map((t, i) => (
              <R key={i} d={i * 40}><button onClick={() => setAt(at === t.slug ? null : t.slug)}
                className={`w-full p-6 text-left transition-all duration-300 ${at === t.slug ? 'bg-[#7B9EC8]/15' : 'bg-[#080A12] hover:bg-[#0D1020]'}`}>
                <span className="text-xl mb-2 block">{t.icon}</span><p className="text-[#F0EDE5]/70 text-xs tracking-wide">{t.name}</p>
              </button></R>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t border-[#F0EDE5]/6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <R><p className="text-[#7B9EC8]/60 tracking-[0.4em] uppercase text-[10px] mb-6">For Voters</p><h3 className="font-serif text-3xl font-light mb-6">Clarity Before the Ballot</h3>
            <div className="space-y-4">{['Search any issue — see where every candidate stands', 'Follow topics, get alerts when positions change', 'Compare candidates side-by-side', 'Every claim links back to an original source'].map((f, i) => <p key={i} className="text-[#F0EDE5]/40 text-sm pl-6 border-l border-[#7B9EC8]/20">{f}</p>)}</div></R>
          <R d={200}><p className="text-[#8B3A3A]/60 tracking-[0.4em] uppercase text-[10px] mb-6">For Campaigns</p><h3 className="font-serif text-3xl font-light mb-6">Manage Your Message</h3>
            <div className="space-y-4">{['Build and publish official issue positions', 'Monitor opponent stances with change alerts', 'Export talking points, social captions, press blurbs', 'Full revision history — own the narrative'].map((f, i) => <p key={i} className="text-[#F0EDE5]/40 text-sm pl-6 border-l border-[#8B3A3A]/20">{f}</p>)}</div></R>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <R><p className="text-[#7B9EC8]/60 tracking-[0.4em] uppercase text-[10px] mb-6">Coverage</p><h2 className="font-serif text-[clamp(28px,5vw,56px)] font-light mb-12">Federal to <span className="text-[#7B9EC8]">Your Block</span></h2></R>
          <R d={200}><div className="flex flex-wrap justify-center gap-3">
            {['United States','Georgia','Texas','California','Florida','North Carolina','Atlanta','Houston','Los Angeles','Miami','Charlotte','Washington DC'].map((g, i) => (
              <span key={i} className="px-4 py-2 border border-[#F0EDE5]/10 text-[#F0EDE5]/50 text-xs tracking-wider hover:border-[#7B9EC8]/30 hover:text-[#7B9EC8] transition-all cursor-pointer">{g}</span>
            ))}</div></R>
        </div>
      </section>

      <section className="py-32 px-6 md:px-12 border-t border-[#F0EDE5]/6">
        <div className="max-w-4xl mx-auto text-center">
          <R><h2 className="font-serif text-[clamp(32px,6vw,72px)] font-light leading-[1.05]">Democracy Deserves<br/><span className="text-[#7B9EC8]">Better Data</span></h2>
            <p className="text-[#F0EDE5]/40 text-lg mt-8 mb-12 max-w-xl mx-auto">Launching with Georgia coverage. Follow us for updates.</p>
            <button className="px-10 py-5 bg-[#7B9EC8] text-[#080A12] font-medium tracking-[0.2em] text-[13px] uppercase hover:bg-[#9BB8DA] transition-all">Get Early Access</button></R>
        </div>
      </section>

      <footer className="border-t border-[#F0EDE5]/6 py-10 px-6"><div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-serif text-lg">Campaign <span className="text-[#7B9EC8]">Compass</span></p>
        <p className="text-[#F0EDE5]/20 text-[10px] tracking-wider">© 2026 THE KOLLECTIVE HOSPITALITY GROUP</p>
      </div></footer>
    </main>
  )
}
