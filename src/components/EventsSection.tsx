"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const events = [
  {
    date: "2026.03.15",
    day: "SAT",
    title: "第42回 エグゼクティブ・ラウンドテーブル",
    location: "東京・丸の内",
    tag: "定例会",
    tagColor: "text-primary-400 border-primary-400/30",
    description: "テーマ「AI時代の経営戦略」",
    status: "受付中",
    statusColor: "text-emerald-400",
  },
  {
    date: "2026.03.28",
    day: "FRI",
    title: "スタートアップCEO × 大企業経営者 対談",
    location: "オンライン",
    tag: "特別講演",
    tagColor: "text-gold-400 border-gold-400/30",
    description: "ゲスト: 著名テック企業CEO",
    status: "残りわずか",
    statusColor: "text-gold-400",
  },
  {
    date: "2026.04.12",
    day: "SAT",
    title: "シリコンバレー視察ツアー 2026",
    location: "San Francisco, CA",
    tag: "海外視察",
    tagColor: "text-violet-400 border-violet-400/30",
    description: "5日間の集中視察プログラム",
    status: "申込開始前",
    statusColor: "text-dark-500",
  },
  {
    date: "2026.04.26",
    day: "SAT",
    title: "年次カンファレンス NEXUS Summit 2026",
    location: "東京・六本木",
    tag: "カンファレンス",
    tagColor: "text-rose-400 border-rose-400/30",
    description: "全メンバー参加の年次イベント",
    status: "受付中",
    statusColor: "text-emerald-400",
  },
];

export default function EventsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section header */}
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase text-gold-400 border border-gold-400/20 mb-6">
            Events
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">出会い</span>
            <span className="text-white">が生まれる場所</span>
          </h2>
          <p className="text-dark-400 max-w-xl mx-auto">
            月間10以上のイベントを通じて、
            <br className="hidden sm:block" />
            価値ある出会いと学びの機会を提供します。
          </p>
        </ScrollReveal>

        {/* Events Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-dark-700 to-transparent" />

          <div className="space-y-8">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                className={`relative flex items-center gap-6 md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-400 ring-4 ring-dark-950 z-10" />

                {/* Date (desktop only) */}
                <div
                  className={`hidden md:block w-[calc(50%-3rem)] text-right ${
                    i % 2 !== 0 ? "text-left" : ""
                  }`}
                >
                  <div className="text-2xl font-bold gradient-text">
                    {event.date}
                  </div>
                  <div className="text-dark-500 text-sm mt-1">{event.day}</div>
                </div>

                {/* Card */}
                <div className="ml-16 md:ml-0 md:w-[calc(50%-3rem)] glass rounded-2xl p-6 card-hover group">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Date (mobile only) */}
                    <div className="md:hidden">
                      <div className="text-sm font-bold gradient-text">
                        {event.date}
                      </div>
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] tracking-wider uppercase border ${event.tagColor}`}
                    >
                      {event.tag}
                    </span>
                    <span className={`text-xs ${event.statusColor}`}>
                      ● {event.status}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
                    {event.title}
                  </h3>

                  <p className="text-dark-400 text-sm mb-3">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-2 text-dark-500 text-xs">
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View all button */}
        <ScrollReveal className="text-center mt-16" delay={0.5}>
          <a href="#" className="btn-outline inline-block text-sm">
            すべてのイベントを見る
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
