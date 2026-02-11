"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    id: 1,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "少人数制グループ",
    subtitle: "Intimate Groups",
    description: "8〜12名の少人数グループで、深い信頼関係を構築。毎月の定例会では、経営課題を本音で議論し、実践的なフィードバックを得られます。",
    highlight: "月1回定例会",
    color: "from-primary-400 to-primary-600",
    bgColor: "bg-primary-500/10",
  },
  {
    id: 2,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "エグゼクティブ講演",
    subtitle: "Executive Talks",
    description: "日本を代表する経営者やイノベーターを招いた限定講演会。最前線のビジネスインサイトを直接学ぶことができます。",
    highlight: "年間30+回開催",
    color: "from-gold-400 to-gold-600",
    bgColor: "bg-gold-500/10",
  },
  {
    id: 3,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "海外視察プログラム",
    subtitle: "Global Insights",
    description: "シリコンバレー、シンガポール、ロンドンなど世界のビジネスハブを訪問。グローバルな視点で自社のビジネスを見直す機会を提供します。",
    highlight: "年2回海外視察",
    color: "from-emerald-400 to-emerald-600",
    bgColor: "bg-emerald-500/10",
  },
  {
    id: 4,
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "メンタリング制度",
    subtitle: "Mentorship",
    description: "経験豊富な先輩経営者がメンターとして伴走。事業の壁にぶつかった時、的確なアドバイスと精神的なサポートを受けられます。",
    highlight: "1対1メンタリング",
    color: "from-violet-400 to-violet-600",
    bgColor: "bg-violet-500/10",
  },
];

export default function FeaturesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-32 overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/95 to-dark-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase text-gold-400 border border-gold-400/20 mb-6">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">あなたの成長を</span>
            <span className="gradient-text">加速</span>
            <span className="text-white">させる</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            経営者としての成長を多角的にサポートする、
            <br className="hidden sm:block" />
            厳選されたプログラムをご用意しています。
          </p>
        </ScrollReveal>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHoveredId(feature.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative glass rounded-3xl p-8 md:p-10 card-hover cursor-default overflow-hidden"
            >
              {/* Hover glow */}
              <motion.div
                className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${feature.color} blur-[80px] transition-opacity duration-500`}
                style={{ opacity: hoveredId === feature.id ? 0.15 : 0 }}
              />

              <div className="relative z-10">
                {/* Icon & Highlight */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bgColor} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] tracking-wider uppercase text-dark-400 border border-white/10 group-hover:border-gold-400/30 group-hover:text-gold-400 transition-all duration-300">
                    {feature.highlight}
                  </span>
                </div>

                {/* Text */}
                <div className="mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-gold-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <span className="text-xs text-dark-600 tracking-wider uppercase font-display italic">
                    {feature.subtitle}
                  </span>
                </div>

                <p className="text-dark-400 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Arrow */}
                <div className="mt-6 flex items-center gap-2 text-dark-500 group-hover:text-gold-400 transition-all duration-300">
                  <span className="text-sm font-medium">詳しく見る</span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    animate={{ x: hoveredId === feature.id ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
