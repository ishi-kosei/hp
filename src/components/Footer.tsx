"use client";

import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "コミュニティ",
    links: [
      { label: "私たちについて", href: "#about" },
      { label: "特徴", href: "#features" },
      { label: "イベント", href: "#events" },
    ],
  },
  {
    title: "サポート",
    links: [
      { label: "よくある質問", href: "#" },
      { label: "お問い合わせ", href: "#contact" },
      { label: "利用規約", href: "#" },
    ],
  },
  {
    title: "SNS",
    links: [
      { label: "X (Twitter)", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-dark-950 font-display font-bold text-lg">
                  N
                </span>
              </div>
              <div>
                <span className="text-lg font-bold tracking-wider text-white">
                  EXECUTIVE
                </span>
                <span className="text-lg font-bold tracking-wider gradient-text ml-1">
                  NEXUS
                </span>
              </div>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed max-w-sm mb-6">
              志高き経営者が集う、次世代のビジネスコミュニティ。
              <br />
              共に学び、成長し、未来を創造する場所。
            </p>
            <div className="flex gap-4">
              {["X", "In", "Ig"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-dark-400 text-xs font-bold hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-dark-400 text-sm hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="line-gradient mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 text-xs">
            &copy; 2026 EXECUTIVE NEXUS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-dark-500 text-xs hover:text-dark-300 transition-colors"
            >
              プライバシーポリシー
            </a>
            <a
              href="#"
              className="text-dark-500 text-xs hover:text-dark-300 transition-colors"
            >
              特定商取引法に基づく表記
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
