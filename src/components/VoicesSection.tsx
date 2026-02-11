"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

const voices = [
  {
    name: "佐藤 美咲",
    role: "ヘルスケアスタートアップ CEO",
    company: "創業3年 / 従業員50名",
    initial: "S",
    gradient: "from-rose-400 to-pink-500",
    quote:
      "NEXUSで出会った先輩経営者のアドバイスのおかげで、シリーズAの資金調達を成功させることができました。一人では絶対に辿り着けなかった結果です。",
    impact: "資金調達 3億円達成",
  },
  {
    name: "山田 健一",
    role: "製造業 代表取締役",
    company: "創業25年 / 従業員200名",
    initial: "Y",
    gradient: "from-blue-400 to-indigo-500",
    quote:
      "老舗企業のDXに悩んでいた時、NEXUSのメンバーからの具体的な助言が突破口になりました。同じ悩みを持つ仲間がいることが、何より心強かった。",
    impact: "DX推進で売上 130% 成長",
  },
  {
    name: "鈴木 大輝",
    role: "Fintech企業 共同創業者",
    company: "創業5年 / 従業員120名",
    initial: "D",
    gradient: "from-emerald-400 to-teal-500",
    quote:
      "海外視察プログラムで得たインスピレーションから、新規事業のアイデアが生まれました。グローバルな視点を持つことの重要性を実感しています。",
    impact: "新規事業 年商5億円",
  },
  {
    name: "高橋 優子",
    role: "コンサルティング会社 代表",
    company: "創業10年 / 従業員80名",
    initial: "T",
    gradient: "from-amber-400 to-orange-500",
    quote:
      "女性経営者としての孤独感がありましたが、NEXUSでは性別を超えた本質的な経営の議論ができます。ここでの学びが私の経営スタイルを大きく変えました。",
    impact: "クライアント数 2倍に成長",
  },
];

export default function VoicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="voices" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-[#0c0c15] to-dark-950" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase text-gold-400 border border-gold-400/20 mb-6">
            Member Voices
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">メンバーの</span>
            <span className="gradient-text">声</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            NEXUSで得た経験が、経営の転機になった
            <br className="hidden sm:block" />
            メンバーたちのリアルなストーリー。
          </p>
        </ScrollReveal>

        {/* Voices Cards - Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {voices.map((voice, i) => (
            <motion.div
              key={voice.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              className="glass rounded-3xl p-8 card-hover group relative overflow-hidden"
            >
              {/* Decorative glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${voice.gradient} rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Quote mark */}
                <div className="text-5xl text-gold-400/20 font-display leading-none mb-4">
                  &ldquo;
                </div>

                {/* Quote text */}
                <p className="text-dark-200 leading-relaxed mb-6 text-[15px]">
                  {voice.quote}
                </p>

                {/* Impact badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-400/20 mb-6">
                  <svg
                    className="w-4 h-4 text-gold-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                  <span className="text-gold-400 text-xs font-semibold tracking-wider">
                    {voice.impact}
                  </span>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${voice.gradient} flex items-center justify-center text-white font-bold text-lg`}
                  >
                    {voice.initial}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{voice.name}</div>
                    <div className="text-dark-500 text-sm">{voice.role}</div>
                    <div className="text-dark-600 text-xs mt-0.5">
                      {voice.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl p-8"
          >
            <div className="text-4xl text-gold-400/20 font-display leading-none mb-4">
              &ldquo;
            </div>
            <p className="text-dark-200 leading-relaxed mb-6">
              {voices[activeIndex].quote}
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-400/20 mb-6">
              <span className="text-gold-400 text-xs font-semibold">
                {voices[activeIndex].impact}
              </span>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${voices[activeIndex].gradient} flex items-center justify-center text-white font-bold`}
              >
                {voices[activeIndex].initial}
              </div>
              <div>
                <div className="text-white font-semibold">
                  {voices[activeIndex].name}
                </div>
                <div className="text-dark-500 text-sm">
                  {voices[activeIndex].role}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {voices.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "w-6 bg-gold-400"
                    : "bg-dark-600 hover:bg-dark-500"
                }`}
                aria-label={`Voice ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
