"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

export default function AboutSection() {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-gold-500/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <ScrollReveal className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase text-gold-400 border border-gold-400/20 mb-6">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">経営者の、</span>
            <span className="gradient-text">経営者による、</span>
            <br />
            <span className="text-white">経営者のための場所</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-400 to-gold-500 mx-auto rounded-full" />
        </ScrollReveal>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <ScrollReveal direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="relative glass rounded-3xl p-10 glow">
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-2xl blur-sm" />
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-2xl blur-sm" />

                <blockquote className="relative z-10">
                  <div className="text-6xl text-gold-400/30 font-display leading-none mb-4">
                    &ldquo;
                  </div>
                  <p className="text-xl md:text-2xl text-dark-200 leading-relaxed font-light mb-6">
                    一人では見えなかった景色が、
                    <br />
                    仲間と共に見えるようになった。
                    <br />
                    それがNEXUSの価値です。
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
                      T
                    </div>
                    <div>
                      <div className="text-white font-semibold">田中 太郎</div>
                      <div className="text-dark-500 text-sm">
                        IT企業 CEO / 創業15年
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 right-8 w-16 h-16 glass rounded-2xl flex items-center justify-center"
              >
                <span className="text-2xl">🤝</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-6 left-8 w-14 h-14 glass rounded-2xl flex items-center justify-center"
              >
                <span className="text-2xl">💡</span>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Right - Text */}
          <div className="space-y-8">
            <ScrollReveal direction="right" delay={0.1}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                経営の孤独を、力に変える
              </h3>
              <p className="text-dark-400 leading-relaxed">
                経営者という立場は、時に孤独なものです。重要な意思決定を迫られる日々の中で、本音で語り合える仲間の存在は何にも代えがたい財産です。
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-dark-400 leading-relaxed">
                EXECUTIVE
                NEXUSは、業種・業態を超えた経営者同士が深い信頼関係を築き、互いの知見を共有し、共に成長していくためのプラットフォームです。
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div
                ref={counterRef}
                className="grid grid-cols-2 gap-4 pt-4"
              >
                {[
                  {
                    icon: "🎯",
                    title: "ビジョン共有",
                    desc: "経営理念を共に磨き合う",
                  },
                  {
                    icon: "🌐",
                    title: "異業種交流",
                    desc: "業界を超えた新しい視点",
                  },
                  {
                    icon: "📈",
                    title: "事業成長",
                    desc: "実践的な知見の共有",
                  },
                  {
                    icon: "🔗",
                    title: "深い繋がり",
                    desc: "本音で語れる信頼関係",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="glass rounded-2xl p-5 card-hover cursor-default"
                  >
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-dark-500 text-xs">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
