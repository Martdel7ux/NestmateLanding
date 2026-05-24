import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Home, Menu, Users, X, Zap } from "lucide-react";

// ── Shared glass class strings ────────────────────────────────────────────────
const glass        = "bg-white/[0.05] backdrop-blur-xl border border-white/[0.09] shadow-[0_8px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)]";
const glassBlue    = "bg-[#185FA5]/10 backdrop-blur-xl border border-[#185FA5]/20 shadow-[0_8px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]";
const glassTeal    = "bg-teal-400/8 backdrop-blur-xl border border-teal-400/15 shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)]";
const glassViolet  = "bg-violet-500/8 backdrop-blur-xl border border-violet-500/15 shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)]";

const FORM_URL = "https://forms.gle/RXEx3DykbjrzBGR18";

// ── Page ──────────────────────────────────────────────────────────────────────

export function WaitlistLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090F] font-sans antialiased">

      {/* ── Nav ─────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-16 flex items-center justify-between relative">
          <img src="/logo.png" alt="Nestmate" className="h-14 sm:h-14 w-auto" />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#features" className="text-sm text-white/60 hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">How it works</a>
            <a href="#contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a>
          </div>

          {/* Desktop CTA */}
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/15 transition-all"
          >
            Join waitlist
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-[#07090F]/95 backdrop-blur-xl border-b border-white/[0.06]"
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {[
                  { label: "Features",     href: "#features" },
                  { label: "How it works", href: "#how-it-works" },
                  { label: "Contact",      href: "#contact" },
                ].map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-white/60 hover:text-white transition-colors py-3 border-b border-white/[0.05] last:border-0"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-3 text-center px-5 py-2.5 rounded-full bg-white text-[#07090F] text-sm font-semibold hover:bg-white/90 transition-all"
                >
                  Join the waitlist
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── Hero scroll track — pins hero for 100vh of scroll ──────────── */}
      <div className="relative h-screen">
      <section className="sticky top-0 z-[1] h-screen w-full flex items-center px-4 sm:px-6 pt-14 sm:pt-16 overflow-hidden">

        <img
          src="/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,9,15,0.55) 0%, rgba(7,9,15,0.35) 30%, rgba(7,9,15,0.55) 65%, rgba(7,9,15,0.98) 100%)",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center w-full py-16 sm:py-24">

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-serif font-normal text-white mb-5 sm:mb-6 leading-[1.1]"
          >
            Student housing
            <br />
            simplified.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg md:text-xl text-white/70 mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed px-2 sm:px-0"
          >
            Find your place, connect with flatmates, and access student
            essentials all in one beautiful app built for students in Cyprus.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-[#07090F] font-semibold text-sm hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
            >
              Join the waitlist
            </a>
          </motion.div>

        </div>
      </section>
      </div>{/* end scroll track */}

      {/* ── Curtain — rises up and over the sticky hero ─────────────────── */}
      <div className="relative z-[2] bg-[#07090F] -mt-10">

      {/* ── Features bento ──────────────────────────────────────────────── */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10 sm:mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7EB8D4] mb-4"
            >
              Features
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight"
            >
              Everything you need
            </motion.h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">

            {/* LEFT large card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className={`lg:flex-[1.4] rounded-3xl p-6 sm:p-8 flex flex-col relative overflow-hidden ${glassBlue}`}
            >
              <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#185FA5]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-[#185FA5]/8 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#185FA5]/20 border border-[#185FA5]/30 backdrop-blur-sm flex items-center justify-center mb-5 sm:mb-6 flex-shrink-0">
                  <Home className="w-6 h-6 sm:w-7 sm:h-7 text-[#7EB8D4]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 tracking-tight">Find your place</h3>
                <p className="text-white/45 leading-relaxed mb-6 text-sm">
                  Browse verified properties near your university. Filter by budget, size, and distance. All in one place.
                </p>

                <ul className="space-y-2.5 mb-8">
                  {["Verified property listings", "Near your university", "Filter by budget and size"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/55">
                      <div className="w-4 h-4 rounded-full bg-[#185FA5]/25 border border-[#185FA5]/40 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#7EB8D4]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Mockup */}
                <div className={`mt-auto rounded-2xl p-4 ${glass}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#185FA5]/25 border border-[#185FA5]/20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="h-2.5 w-28 bg-white/18 rounded-full mb-1.5" />
                      <div className="h-2 w-20 bg-white/10 rounded-full" />
                    </div>
                    <div className="text-xs text-[#7EB8D4] bg-[#185FA5]/18 border border-[#185FA5]/25 px-2.5 py-1 rounded-full font-semibold whitespace-nowrap backdrop-blur-sm">
                      €450/mo
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 w-5/6 bg-white/8 rounded-full" />
                    <div className="h-1.5 w-3/5 bg-white/5 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT stacked cards */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:flex-1">

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className={`flex-1 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:bg-teal-400/10 transition-colors duration-300 ${glassTeal}`}
              >
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-teal-400/15 border border-teal-400/25 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight">Connect with flatmates</h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  Match with students by university, budget, and lifestyle. Find perfect flatmates before you even arrive.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className={`flex-1 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:bg-violet-500/10 transition-colors duration-300 ${glassViolet}`}
              >
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-violet-500/15 border border-violet-500/25 backdrop-blur-sm flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform flex-shrink-0">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-violet-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 tracking-tight">Student essentials</h3>
                <p className="text-white/45 text-sm leading-relaxed mb-4 sm:mb-5">
                  Bills calculator, bus routes, study hub, and AI assistant. Built for Cyprus student life.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Bills", "Bus routes", "Study hub", "AI chat"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/[0.06] border border-white/[0.1] backdrop-blur-sm text-xs font-semibold text-white/55">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-10 sm:mb-14">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7EB8D4] mb-4"
            >
              Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight"
            >
              Simple. Fast. Beautiful.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                glassClass: glassBlue,
                glow1: "bg-[#185FA5]/25", glow2: "bg-[#7EB8D4]/15",
                title: "Create your profile",
                desc: "Tell us your university, budget, and preferences. We'll personalize everything for you.",
              },
              {
                step: "02",
                glassClass: glassTeal,
                glow1: "bg-teal-400/20", glow2: "bg-teal-400/10",
                title: "Browse and connect",
                desc: "View properties near your university and find flatmates who match your lifestyle.",
              },
              {
                step: "03",
                glassClass: glassViolet,
                glow1: "bg-violet-500/20", glow2: "bg-violet-400/10",
                title: "Move in with confidence",
                desc: "Access bills calculator, bus routes, and your AI assistant. Everything sorted.",
              },
            ].map(({ step, glassClass, glow1, glow2, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover="hover"
                variants={{
                  hover: {
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 280, damping: 22 },
                  },
                }}
                className={`rounded-3xl p-6 sm:p-8 relative overflow-hidden cursor-default ${glassClass}`}
              >
                <motion.div
                  variants={{ hover: { scale: 1.6, opacity: 1 } }}
                  transition={{ duration: 0.4 }}
                  className={`absolute -top-10 -right-10 w-40 h-40 ${glow1} rounded-full blur-3xl pointer-events-none`}
                />
                <motion.div
                  variants={{ hover: { scale: 1.5, opacity: 1 } }}
                  transition={{ duration: 0.4 }}
                  className={`absolute bottom-0 left-4 w-28 h-28 ${glow2} rounded-full blur-2xl pointer-events-none`}
                />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-5 sm:mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/35">{step}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mb-3 tracking-tight">{title}</h3>
                  <p className="text-white/40 leading-relaxed text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className={`relative overflow-hidden rounded-3xl px-5 py-10 sm:px-8 sm:py-16 text-center ${glass}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#185FA5]/8 to-transparent pointer-events-none" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[#185FA5]/12 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-900/20 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight">
                Ready to simplify your student life?
              </h2>
              <p className="text-white/35 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
                Join the waitlist. Be the first to experience Nestmate.
              </p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white text-[#07090F] font-semibold text-sm hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_4px_24px_rgba(255,255,255,0.15)]"
              >
                Join the waitlist
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className="py-8 sm:py-10 px-4 sm:px-6 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <img src="/logo.png" alt="Nestmate" className="h-8 w-auto" />
          <p className="text-sm text-white/20">© 2026 Nestmate.</p>
        </div>
      </footer>

      </div>{/* end curtain */}
    </div>
  );
}
