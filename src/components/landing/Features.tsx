"use client";

import { motion } from "framer-motion";

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

const features = [
  {
    icon: "💸",
    title: "Instant Cash Back",
    description: "Get your money instantly. No waiting periods, no minimum thresholds.",
    stats: ["50%", "commission split"],
  },
  {
    icon: "🌐",
    title: "Universal Coverage",
    description: "Works with all major online retailers and thousands of others.",
    stats: ["5000+", "partner stores"],
  },
  {
    icon: "🤖",
    title: "Smart Detection",
    description: "Automatically finds and applies the best cash back rates.",
    stats: ["100%", "automated"],
  },
  {
    icon: "💰",
    title: "Real Cash",
    description: "Get real money, not points or gift cards. It's your money, after all.",
    stats: ["$0", "minimum payout"],
  },
];

export function Features() {
  return (
    <section className="relative py-32 bg-dark-500 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,224,143,0.1) 0%, rgba(0,224,143,0) 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Features that set us apart
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to maximize your cash back
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...springTransition, delay: index * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: springTransition
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-dark-400 rounded-2xl transform transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-dark-300" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 rounded-2xl transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative p-8">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold text-primary">
                    {feature.stats[0]}
                  </span>
                  <span className="text-gray-500">{feature.stats[1]}</span>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
