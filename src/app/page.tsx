import { supabase } from "@/lib/supabase";

export const revalidate = 60;

async function getTopics() {
  const { data } = await supabase.from("politics_topics").select("*").eq("is_active", true).order("name");
  return data || [];
}
async function getOfficials() {
  const { data } = await supabase.from("politics_officials").select("*").eq("is_active", true).order("jurisdiction");
  return data || [];
}
async function getUpdates() {
  const { data } = await supabase.from("politics_updates").select("*, politics_topics(name, icon)").order("created_at", { ascending: false }).limit(20);
  return data || [];
}

const impactColors: Record<string, string> = {
  critical: "bg-red-500/20 text-red-400",
  high: "bg-orange-500/20 text-orange-400",
  medium: "bg-yellow-500/20 text-yellow-400",
  low: "bg-white/5 text-white/40",
};

export default async function Home() {
  const topics = await getTopics();
  const officials = await getOfficials();
  const updates = await getUpdates();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[65vh] flex items-end pb-16 px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14] to-[#080808]" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[130px]" />
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <p className="font-mono text-xs tracking-[0.3em] text-blue-400/60 uppercase mb-4">The Kollective — Civic Intelligence</p>
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.9] font-light">
            Politics<br/><span className="italic text-blue-400">Updates</span>
          </h1>
          <p className="mt-6 font-mono text-sm text-white/35 max-w-md">Policy changes. Official actions. What matters in your community — tracked in real time.</p>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="px-8 py-16 max-w-6xl mx-auto">
        <h2 className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase mb-8">Policy Topics</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {topics.map((t: any) => (
            <div key={t.id} className="group border border-white/5 hover:border-blue-500/30 p-5 transition-all cursor-pointer text-center">
              <span className="text-2xl">{t.icon}</span>
              <p className="font-display text-sm text-white/70 group-hover:text-blue-400 transition-colors mt-2">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Officials */}
      <section className="px-8 py-16 max-w-6xl mx-auto border-t border-white/5">
        <h2 className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase mb-8">Tracked Officials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {officials.map((o: any) => (
            <div key={o.id} className="border border-white/5 hover:border-blue-500/20 p-5 transition-all">
              <p className="font-display text-lg text-white/90">{o.name}</p>
              <p className="font-mono text-[10px] text-white/40 mt-1">{o.title}</p>
              <div className="flex gap-2 mt-3">
                <span className="font-mono text-[9px] tracking-widest uppercase border border-white/10 px-2 py-0.5 text-white/30">{o.party}</span>
                <span className="font-mono text-[9px] tracking-widest uppercase border border-white/10 px-2 py-0.5 text-white/30">{o.jurisdiction}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Updates Feed */}
      {updates.length > 0 && (
        <section className="px-8 py-16 max-w-6xl mx-auto border-t border-white/5">
          <h2 className="font-mono text-xs tracking-[0.3em] text-white/30 uppercase mb-8">Latest Updates</h2>
          <div className="space-y-4">
            {updates.map((u: any) => (
              <div key={u.id} className="border border-white/5 p-6 hover:border-blue-500/15 transition-all">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg text-white/90">{u.title}</h3>
                    <p className="text-sm text-white/40 mt-2 line-clamp-2">{u.summary}</p>
                    <div className="flex gap-3 mt-3">
                      {u.politics_topics && <span className="font-mono text-[9px] text-blue-400/60">{u.politics_topics.icon} {u.politics_topics.name}</span>}
                      {u.source_name && <span className="font-mono text-[9px] text-white/25">via {u.source_name}</span>}
                    </div>
                  </div>
                  {u.impact_level && (
                    <span className={`font-mono text-[9px] tracking-widest uppercase px-2 py-1 rounded ${impactColors[u.impact_level] || ""}`}>
                      {u.impact_level}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <footer className="px-8 py-12 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="font-mono text-[10px] text-white/20">© 2026 THE KOLLECTIVE HOSPITALITY GROUP</p>
          <p className="font-mono text-[10px] text-white/20">POLITICS UPDATES</p>
        </div>
      </footer>
    </main>
  );
}
