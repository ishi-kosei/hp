"use client";

import { motion } from "framer-motion";

const keywords = [
  "経営戦略",
  "イノベーション",
  "リーダーシップ",
  "DX推進",
  "資金調達",
  "M&A",
  "グローバル展開",
  "人材育成",
  "SDGs",
  "AI活用",
  "事業承継",
  "ブランディング",
];

export default function MarqueeSection() {
  return (
    <section className="relative py-16 overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-transparent to-dark-950 z-10 pointer-events-none" />

      <motion.div
        animate={{ x: [0, -1920] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...keywords, ...keywords, ...keywords].map((keyword, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-2xl md:text-4xl font-bold text-dark-800 hover:text-dark-500 transition-colors duration-300 cursor-default">
              {keyword}
            </span>
            <span className="w-2 h-2 rounded-full bg-gold-400/30" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
