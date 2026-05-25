import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Key, Menu, Users, X, Zap } from "lucide-react";

// ── Shared glass class strings ────────────────────────────────────────────────
const glassBlue    = "bg-[#185FA5]/10 backdrop-blur-xl border border-[#185FA5]/20 shadow-[0_8px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]";
const glassTeal    = "bg-teal-400/8 backdrop-blur-xl border border-teal-400/15 shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)]";
const glassViolet  = "bg-violet-500/8 backdrop-blur-xl border border-violet-500/15 shadow-[0_8px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.05)]";

const FORM_URL = "https://forms.gle/RXEx3DykbjrzBGR18";

// ── Page ──────────────────────────────────────────────────────────────────────

export function WaitlistLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01", title: "Create your profile",
      desc: "Tell us your university, budget, and preferences. We'll personalize everything for you.",
      glassClass: glassBlue, accent: "text-[#7EB8D4]", glow: "bg-[#185FA5]/25",
    },
    {
      step: "02", title: "Browse and connect",
      desc: "View properties near your university and find flatmates who match your lifestyle.",
      glassClass: glassTeal, accent: "text-teal-400", glow: "bg-teal-400/20",
    },
    {
      step: "03", title: "Move in with confidence",
      desc: "Access bills calculator, bus routes, and your AI assistant. Everything sorted.",
      glassClass: glassViolet, accent: "text-violet-400", glow: "bg-violet-500/20",
    },
  ];

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
              "linear-gradient(to bottom, rgba(7,9,15,0.7) 0%, rgba(7,9,15,0.55) 30%, rgba(7,9,15,0.65) 65%, rgba(7,9,15,0.98) 100%)",
          }}
        />

        {/* Subtle film grain */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            opacity: 0.09,
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "300px 300px",
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
            className="font-poppins font-light text-base sm:text-lg md:text-xl text-white/70 mb-10 sm:mb-12 max-w-xl mx-auto leading-relaxed px-2 sm:px-0"
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
              {/* Atmospheric layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#185FA5]/15 via-transparent to-transparent pointer-events-none" />
              <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#185FA5]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -top-10 -left-10 w-56 h-56 bg-[#7EB8D4]/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7EB8D4]/30 to-transparent pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Label + title */}
                <div className="mb-7">
                  <div className="flex items-center gap-2.5 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-[#185FA5]/25 border border-[#185FA5]/30 backdrop-blur-sm flex items-center justify-center">
                      <Home className="w-4 h-4 text-[#7EB8D4]" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7EB8D4]">Housing</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mb-3 leading-tight">
                    Find your place
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-poppins font-light">
                    Verified properties near your university. Filter by budget, size, and distance.
                  </p>
                </div>

                {/* Listings mockup */}
                <div className="mt-auto">
                  {/* Filter pills */}
                  <div className="flex gap-2 mb-4">
                    {[
                      { label: "All", active: true },
                      { label: "Studio", active: false },
                      { label: "Shared", active: false },
                    ].map(({ label, active }) => (
                      <span key={label} className={`text-[10px] font-semibold px-3 py-1 rounded-full border ${
                        active
                          ? "bg-[#185FA5]/30 border-[#185FA5]/40 text-[#7EB8D4]"
                          : "bg-white/[0.04] border-white/10 text-white/30"
                      }`}>
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { name: "Studio near UCLan Cyprus",  loc: "5 min walk",  price: "€450", img: "bg-gradient-to-br from-blue-500/50 to-indigo-600/40",  active: true,  Icon: Home  },
                      { name: "2-bed shared apartment",    loc: "10 min walk", price: "€320", img: "bg-gradient-to-br from-teal-500/40 to-cyan-600/30",     active: false, Icon: Users },
                      { name: "En-suite private room",     loc: "5 min walk",  price: "€520", img: "bg-gradient-to-br from-violet-500/40 to-purple-600/30", active: false, Icon: Key   },
                    ].map(({ name, loc, price, img, active, Icon }, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 rounded-2xl p-3 border transition-colors ${
                          active
                            ? "bg-[#185FA5]/20 border-[#185FA5]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
                            : "bg-white/[0.03] border-white/[0.06]"
                        }`}
                      >
                        <div className={`w-11 h-11 rounded-xl flex-shrink-0 flex items-center justify-center ${img}`}>
                          <Icon className="w-5 h-5 text-white/80" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-semibold truncate ${active ? "text-white" : "text-white/45"}`}>
                            {name}
                          </p>
                          <p className="text-[10px] text-white/30 mt-0.5">{loc}</p>
                        </div>
                        <div className={`text-[10px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap border ${
                          active
                            ? "text-[#7EB8D4] bg-[#185FA5]/25 border-[#185FA5]/35"
                            : "text-white/35 bg-white/[0.05] border-white/[0.08]"
                        }`}>
                          {price}/mo
                        </div>
                      </div>
                    ))}
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
                <h3 className="text-lg sm:text-xl font-serif font-normal text-white mb-2">Connect with flatmates</h3>
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
                <h3 className="text-lg sm:text-xl font-serif font-normal text-white mb-2">Student essentials</h3>
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

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-start">

            {/* Left — step list */}
            <div className="flex-1 flex flex-col">
              {steps.map(({ step, title, glassClass, accent }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  onMouseEnter={() => setActiveStep(i)}
                  onClick={() => setActiveStep(i)}
                  className={`relative px-6 py-7 mb-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeStep === i ? glassClass : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className={`font-serif text-3xl sm:text-4xl transition-all duration-300 leading-tight ${
                      activeStep === i ? "text-white" : "text-white/25"
                    }`}>
                      {title}
                    </h3>
                    <span className={`text-sm font-semibold tracking-widest flex-shrink-0 transition-all duration-300 ${
                      activeStep === i ? accent : "text-white/20"
                    }`}>
                      {step}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right — content panel */}
            <div className="flex-1 w-full lg:sticky lg:top-28">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className={`rounded-3xl p-8 sm:p-10 relative overflow-hidden min-h-[260px] flex flex-col justify-end ${steps[activeStep].glassClass}`}
                >
                  <div className={`absolute -top-12 -right-12 w-56 h-56 ${steps[activeStep].glow} rounded-full blur-3xl pointer-events-none`} />
                  <div className={`absolute bottom-0 left-8 w-36 h-36 ${steps[activeStep].glow} opacity-50 rounded-full blur-2xl pointer-events-none`} />

                  <div className="relative z-10">
                    <span className={`text-[96px] font-serif leading-none ${steps[activeStep].accent} opacity-10 select-none absolute -top-6 right-6`}>
                      {steps[activeStep].step}
                    </span>
                    <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${steps[activeStep].accent} mb-4`}>
                      Step {steps[activeStep].step}
                    </p>
                    <h4 className="text-2xl sm:text-3xl font-serif text-white mb-4 leading-snug">
                      {steps[activeStep].title}
                    </h4>
                    <p className="text-white/50 leading-relaxed text-base font-poppins font-light">
                      {steps[activeStep].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

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
            className="relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-20 text-center bg-white/[0.04] backdrop-blur-2xl border border-white/[0.1] shadow-[0_24px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(255,255,255,0.03)]"
          >
            {/* Glow blobs */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#185FA5]/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-[#7EB8D4]/10 rounded-full blur-[50px] pointer-events-none" />

            {/* Top highlight line */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
            {/* Inner diagonal sheen */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-[#185FA5]/[0.06] pointer-events-none" />

            <div className="relative z-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7EB8D4] mb-5">
                Early access
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-white mb-5 leading-[1.15]">
                Ready to simplify your
                <br className="hidden sm:block" /> student life?
              </h2>
              <p className="font-poppins font-light text-white/45 text-base sm:text-lg mb-10 leading-relaxed max-w-md mx-auto">
                Join the waitlist. Be the first to experience Nestmate.
              </p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 rounded-full bg-white text-[#07090F] font-semibold text-sm hover:bg-white/90 active:scale-[0.98] transition-all shadow-[0_4px_32px_rgba(255,255,255,0.2),0_0_0_1px_rgba(255,255,255,0.1)]"
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
