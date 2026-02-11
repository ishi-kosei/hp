"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6" ref={ref}>
        {/* CTA Banner */}
        <ScrollReveal>
          <div className="relative rounded-[2rem] overflow-hidden mb-24">
            {/* Banner background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-dark-950 to-gold-900/30" />
            <div className="absolute inset-0 noise" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full blur-[80px]" />

            <div className="relative z-10 p-12 md:p-20 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center rotate-12"
              >
                <span className="text-3xl -rotate-12">✨</span>
              </motion.div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">あなたも</span>
                <span className="gradient-text">仲間</span>
                <span className="text-white">になりませんか</span>
              </h2>

              <p className="text-dark-300 max-w-xl mx-auto mb-10 leading-relaxed">
                まずは無料の説明会にご参加ください。
                <br />
                NEXUSの雰囲気を体感し、メンバーとの対話を通じて
                <br className="hidden md:block" />
                あなたに合ったコミュニティかどうかをお確かめいただけます。
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#contact-form" className="btn-primary text-base">
                  無料説明会に申し込む
                </a>
                <a href="#" className="btn-outline text-base">
                  資料をダウンロード
                </a>
              </div>

              {/* Trust signals */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-dark-500 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  審査制・完全招待制
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  入会金・年会費制
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  初月無料体験あり
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <div id="contact-form" className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info */}
          <ScrollReveal direction="left">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase text-gold-400 border border-gold-400/20 mb-6">
                Contact
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                お問い合わせ
              </h3>
              <p className="text-dark-400 leading-relaxed mb-10">
                入会に関するご質問や、説明会のお申し込みなど、
                お気軽にお問い合わせください。
                <br />
                通常2営業日以内にご返信いたします。
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    ),
                    label: "Email",
                    value: "info@executive-nexus.jp",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    ),
                    label: "Phone",
                    value: "03-XXXX-XXXX",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    ),
                    label: "Address",
                    value: "東京都千代田区丸の内1-X-X",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 text-dark-300"
                  >
                    <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-gold-400">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-dark-500 text-xs tracking-wider uppercase">
                        {item.label}
                      </div>
                      <div className="text-dark-200">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <div className="glass rounded-3xl p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-emerald-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    送信完了しました
                  </h4>
                  <p className="text-dark-400 text-sm">
                    2営業日以内にご連絡いたします。
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-dark-300 text-sm mb-2">
                      お名前 <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all duration-300"
                      placeholder="山田 太郎"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-300 text-sm mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      value={formState.company}
                      onChange={(e) =>
                        setFormState({ ...formState, company: e.target.value })
                      }
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all duration-300"
                      placeholder="株式会社サンプル"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-300 text-sm mb-2">
                      メールアドレス <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all duration-300"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-dark-300 text-sm mb-2">
                      お問い合わせ内容
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-600 focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all duration-300 resize-none"
                      placeholder="お気軽にご記入ください"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="inline-block w-5 h-5 border-2 border-dark-950/30 border-t-dark-950 rounded-full"
                        />
                        送信中...
                      </span>
                    ) : (
                      "送信する"
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
