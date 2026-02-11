"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function AnimatedNumber({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate(value) {
        setDisplayValue(Math.round(value));
      },
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "会員経営者",
    description: "志を共にする仲間たち",
  },
  {
    number: 98,
    suffix: "%",
    label: "更新率",
    description: "高い満足度と継続率",
  },
  {
    number: 120,
    suffix: "+",
    label: "年間イベント数",
    description: "学びと出会いの機会",
  },
  {
    number: 15,
    suffix: "兆円",
    prefix: "",
    label: "メンバー企業総売上",
    description: "日本経済を動かす力",
  },
];

export default function NumbersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-[#0b0b14] to-dark-950" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-center relative group"
            >
              {/* Vertical separator (not on first item) */}
              {i > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-dark-700 to-transparent" />
              )}
              
              <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} prefix={stat.prefix || ""} />
              </div>
              <div className="text-white font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-dark-500 text-xs">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
