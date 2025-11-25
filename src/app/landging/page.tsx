"use client";
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Hedder from "@/components/Hedder";
import Marquee from "react-fast-marquee";
import Footer from "@/components/Footer";

// Small counter that animates from 0 -> end when scrolled into view
const Counter: React.FC<{
  end: number;
  duration?: number;
  suffix?: string;
}> = ({ end, duration = 1600, suffix = "+" }) => {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            let start: number | null = null;
            const step = (timestamp: number) => {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const current = Math.floor(progress * end);
              setValue(current);
              if (progress < 1) requestAnimationFrame(step);
              else setValue(end);
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, [end, duration]);

  return (
    <div
      ref={ref}
      className="text-4xl md:text-5xl font-extrabold text-yellow-400"
    >
      {value}
      {suffix}
    </div>
  );
};

const page = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const stats = [
    {
      key: "projects",
      title: "Projects",
      end: 70,
      desc: "Crafted with Code. Delivered with Heart.",
    },
    {
      key: "team",
      title: "Team",
      end: 10,
      desc: "A Team That Turns Every Day Into a Milestone.",
    },
    {
      key: "clients",
      title: "Clients",
      end: 10,
      desc: "Our True Success Lies in the Satisfaction of Our Clients.",
    },
    {
      key: "offices",
      title: "Offices",
      end: 4,
      desc: "Expanding Horizons with Offices Nationwide.",
    },
  ];

  const features = [
    {
      key: "pe",
      abbrev: "PE",
      title: "Product Engineering",
      desc: "Build, iterate and ship robust products.",
      iconClasses:
        "w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-400 flex items-center justify-center text-slate-900 font-semibold",
      cardHover: "hover:border-cyan-400/20",
    },
    {
      key: "cd",
      abbrev: "CD",
      title: "Cloud & DevOps",
      desc: "Secure, automated operations and scaling.",
      iconClasses:
        "w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-slate-900 font-semibold",
      cardHover: "hover:border-yellow-400/20",
    },
    {
      key: "ux",
      abbrev: "UX",
      title: "UX & Design",
      desc: "Design systems and human-centered interfaces.",
      iconClasses:
        "w-12 h-12 rounded-lg bg-gradient-to-br from-green-300 to-cyan-300 flex items-center justify-center text-slate-900 font-semibold",
      cardHover: "hover:border-green-300/20",
    },
  ];

  const mvvs = [
    {
      key: "mission",
      title: "Our Mission",
      desc: "To innovate and deliver impactful tech solutions that transform businesses and uplift communities.",
      icon: "highlights1.png",
    },
    {
      key: "vision",
      title: "Our Vision",
      desc: "To be a global leader in digital transformation, inspiring progress through technology.",
      icon: "highlights2.png",
    },
    {
      key: "values",
      title: "Our Values",
      desc: "Integrity, Collaboration, Innovation — delivering customer-centric excellence.",
      icon: "highlights3.png",
    },
  ];

  return (
    <>
      <Hedder />

      <main className=" caret-transparent max-w-svw overflow-hidden">
        {/* Video hero section: place a video file at public/hero.mp4. poster falls back to /hero.svg */}
        <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/hero.mp4"
            poster="/hero.svg"
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />

          <div
            data-aos="fade-up"
            className="relative z-10 max-w-5xl px-6 py-24 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-yellow-400 tracking-tight">
              WELCOME TO
              <br />
              ENKONIX SOFTWARE SERVICES
            </h2>

            <div className="mx-auto mt-6 w-40 border-t-4 border-cyan-400" />

            <p className="mt-8 text-base md:text-lg text-slate-200 leading-relaxed">
              At Enkonix Software Services Pvt. Ltd, we specialize in end-to-end
              software development — offering robust frontend and backend
              solutions as a full-stack team. Our expertise spans modern
              frameworks and cloud platforms to build scalable, high-performance
              applications tailored to client needs.
            </p>

            <p className="mt-6 text-sm md:text-base font-semibold text-slate-100">
              From concept to code — Enkonix powers your digital vision.
            </p>
          </div>
        </section>

        {/* Mission / Vision / Values - glass cards using theme colors */}
        <section className="py-16 dark:bg-stone-950/90 bg-black/90 shadow-2xl shadow-blue-50 transition-colors text-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-extrabold text-yellow-400">
              Mission, Vision & Values
            </h3>
            <p className="mt-3 text-slate-300 max-w-3xl mx-auto">
              What drives Enkonix — our guiding mission, long-term vision and
              core principles.
            </p>

            <div className="mt-8 relative">
              <div className="hidden md:block absolute left-1/2 top-6 bottom-6 w-px bg-yellow-400 transform -translate-x-1/2" />

              <div className="space-y-10">
                {mvvs.map((m, i) => (
                  <div
                    key={m.key}
                    data-aos="fade-up"
                    data-aos-delay={i * 120}
                    className={`relative  md:flex md:items-center md:justify-between  ${
                      i % 2 != 0 ? " md:flex-row-reverse " : ""
                    }`}
                  >
                    <div className="md:w-5/12 md:px-6">
                      <div className="rounded-3xl p-6 bg-white/4 dark:bg-white/6 border border-transparent hover:border-cyan-400/20 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 backdrop-blur-md">
                        <h4 className="text-xl font-semibold text-white">
                          {m.title}
                        </h4>
                        <p className="mt-3 text-sm text-slate-200 leading-relaxed">
                          {m.desc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`absolute  ${
                        i % 2 != 0 ? "  left-[48%] " : " right-[48%]"
                      }   `}
                    >
                      <div className="flex items-center justify-center w-full">
                        <div className="w-14 h-14 rounded-full bg-linear-to-br from-yellow-400 to-orange-400   flex items-center justify-center text-slate-900 font-bold shadow-lg ring-4 ring-white/5">
                          <img
                            src={`/${m.icon}`}
                            alt={m.title}
                            className="w-7 h-7 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trusted partners marquee */}
        <section className="py-16 dark:bg-stone-950/90 bg-black/90  shadow-2xl shadow-blue-50 transition-colors">
          <div className="  mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400 dark:text-white">
              Trusted payroll and HR Services
            </h3>
            <p className="mt-3 text-slate-200 ">
              Trusted payroll and HR Services for companies worldwide
            </p>

            <div className="mt-8 relative">
              <Marquee
                speed={50}
                pauseOnHover={true}
                play={true}
                gradient={false}
                className="py-6"
              >
                {[
                  "Client A",
                  "Client B",
                  "Client C",
                  "Client D",
                  "Client E",
                  "Client F",
                ].map((name, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center w-56 mx-8"
                  >
                    <div className="w-40 h-20 flex items-center justify-center bg-white dark:bg-slate-800 rounded-md shadow-sm">
                      <img
                        src="/logo.svg"
                        alt={`${name} logo`}
                        className="w-32 h-auto dark:invert"
                      />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        {/* CTA banner (uses site colors - blue -> indigo) */}
        <section className="py-16 dark:bg-stone-950/90 bg-black/90 shadow-2xl shadow-blue-50 text-white transition-colors">
          <div className=" max-w-7xl   mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div data-aos="fade-right" className="md:w-1/2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  EMPLOYEE MANAGEMENT SYSTEM (EMS)
                </h3>

                <p className="mt-4 text-slate-100/90 dark:text-slate-200 max-w-xl">
                  Transform how you manage people with Enkonix EMS — a
                  centralized platform for attendance, leave, payroll
                  integration, performance reviews, and self-service. Reduce
                  administrative overhead and improve employee experience with
                  reliable automation and real-time insights.
                </p>
              </div>

              <div
                data-aos="fade-left"
                className="md:w-1/2 flex justify-center md:justify-end"
              >
                <div className="w-80">
                  <svg
                    viewBox="0 0 600 400"
                    width="100%"
                    height="100%"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Illustration"
                    className="filter dark:brightness-90"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="600"
                      height="400"
                      rx="16"
                      fill="rgba(255,255,255,0.04)"
                    />
                    <rect
                      x="36"
                      y="44"
                      width="340"
                      height="240"
                      rx="8"
                      fill="#ffffff"
                      opacity="0.06"
                    />
                    <rect
                      x="380"
                      y="80"
                      width="180"
                      height="280"
                      rx="8"
                      fill="#fff"
                      opacity="0.04"
                    />

                    {/* <!-- device screen --> */}
                    <rect
                      x="52"
                      y="60"
                      width="308"
                      height="196"
                      rx="6"
                      fill="#fff"
                    />
                    <rect
                      x="64"
                      y="76"
                      width="284"
                      height="28"
                      rx="4"
                      fill="#0ea5a4"
                    />
                    <rect
                      x="64"
                      y="112"
                      width="220"
                      height="16"
                      rx="4"
                      fill="#1e3a8a"
                    />
                    <rect
                      x="64"
                      y="136"
                      width="240"
                      height="12"
                      rx="4"
                      fill="#1e40af"
                    />
                    <rect
                      x="64"
                      y="156"
                      width="200"
                      height="12"
                      rx="4"
                      fill="#0ea5a4"
                    />

                    {/* <!-- phone mock --> */}
                    <rect
                      x="396"
                      y="96"
                      width="136"
                      height="232"
                      rx="12"
                      fill="white"
                      opacity="0.95"
                    />
                    <rect
                      x="410"
                      y="112"
                      width="104"
                      height="28"
                      rx="6"
                      fill="#1e3a8a"
                    />
                    <rect
                      x="410"
                      y="150"
                      width="88"
                      height="12"
                      rx="6"
                      fill="#0ea5a4"
                    />
                    <rect
                      x="410"
                      y="172"
                      width="104"
                      height="8"
                      rx="4"
                      fill="#1e40af"
                    />

                    {/* <!-- accent circles --> */}
                    <circle cx="520" cy="64" r="18" fill="#ffb020" />
                    <circle cx="540" cy="320" r="12" fill="#06b6d4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Restyled Services section — split layout with mock device and floating cards */}
        <section className="py-16 dark:bg-stone-950/90 bg-black/90 shadow-2xl shadow-blue-50 transition-colors text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* left: lively mock device with floating badges */}
              <div
                className="flex items-center justify-center order-1 md:order-1"
                data-aos="fade-right"
              >
                <div className="relative w-full max-w-sm">
                  <div className="rounded-2xl p-6 bg-linear-to-br from-cyan-600 to-indigo-700 dark:from-indigo-800 dark:to-slate-900 text-white shadow-2xl transform -rotate-3">
                    <div className="h-56 rounded-lg bg-white/6 dark:bg-white/8 p-4 flex flex-col gap-3">
                      <div className="h-4 w-2/3 bg-linear-to-r from-yellow-300 to-orange-400 rounded" />
                      <div className="flex gap-3 items-center">
                        <div className="w-14 h-14 rounded-lg bg-linear-to-br from-cyan-300 to-indigo-300" />
                        <div className="flex-1">
                          <div className="h-3 bg-white/30 rounded w-3/4" />
                          <div className="h-3 bg-white/20 rounded w-1/2 mt-2" />
                        </div>
                      </div>
                      <div className="mt-auto grid grid-cols-3 gap-2">
                        <div className="h-8 bg-linear-to-r from-yellow-400 to-orange-400 rounded" />
                        <div className="h-8 bg-linear-to-r from-green-300 to-cyan-300 rounded" />
                        <div className="h-8 bg-linear-to-r from-cyan-400 to-indigo-400 rounded" />
                      </div>
                    </div>
                  </div>

                  {/* floating badges */}
                  <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-linear-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-slate-900 font-bold shadow-lg">
                    AI
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-14 h-14 rounded-full bg-linear-to-br from-green-300 to-cyan-300 flex items-center justify-center text-slate-900 font-bold shadow-lg">
                    CI
                  </div>
                  <div className="absolute top-2 right-10 w-10 h-10 rounded-full bg-linear-to-br from-cyan-400 to-indigo-400 flex items-center justify-center text-slate-900 font-semibold shadow-md">
                    UX
                  </div>
                </div>
              </div>

              {/* right: stacked feature cards */}
              <div className="order-2 md:order-2">
                <h3 className="text-3xl font-extrabold text-yellow-400">
                  Our Core Services
                </h3>
                <p className="mt-4  max-w-xl">
                  We combine product thinking with engineering excellence to
                  deliver scalable, secure and user-friendly products.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      data-aos="fade-up"
                      data-aos-delay={i * 100}
                      className={`p-4 rounded-2xl bg-white/6 dark:bg-white/5 border border-transparent  hover:border-yellow-400  shadow-md transition transform hover:-translate-y-1  `}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-linear-to-br from-yellow-400 to-orange-400 flex items-center justify-center text-slate-900 font-semibold `}
                        >
                          {f.abbrev}
                        </div>
                        <div>
                          <div className="font-semibold dark:text-white">
                            {f.title}
                          </div>
                          <div className="text-sm text-slate-100">{f.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned stats / counters: dark band, glass cards, icons, staggered animations */}
        <section className="py-20 dark:bg-stone-950/90 bg-black/90 shadow-2xl shadow-blue-50  text-white transition-colors">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">
              WHY CHOOSE ENKONIX SOFTWARE SERVICES PVT. LTD?
            </h3>
            <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
              At Enkonix, we don’t just build tech — we build trust. Our team
              crafts tailored software with innovation, precision, and passion.
            </p>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((s, i) => (
                <div
                  key={s.key}
                  data-aos="fade-up"
                  data-aos-delay={i * 120}
                  className="rounded-2xl p-8 bg-white/5 dark:bg-white/5 border border-transparent hover:border-amber-300 hover:shadow-2xl transition-shadow duration-300 text-center     transform"
                >
                  <div className="flex items-center justify-center">
                    {/* simple icon per card */}
                    <div className="w-12 h-12 rounded-full bg-amber-300 flex items-center justify-center shadow-md">
                      {s.key === "projects" && (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M3 7h18"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7 11h10"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10 15h4"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                      {s.key === "team" && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M12 12a4 4 0 100-8 4 4 0 000 8z"
                            stroke="#fff"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M6 20c0-3 3-5 6-5s6 2 6 5"
                            stroke="#fff"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {s.key === "clients" && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6"
                            stroke="#fff"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7 10l5 5 5-5"
                            stroke="#fff"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {s.key === "offices" && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M3 21h18"
                            stroke="#fff"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />
                          <rect
                            x="3"
                            y="3"
                            width="7"
                            height="14"
                            rx="1"
                            stroke="#fff"
                            strokeWidth="1.4"
                          />
                          <rect
                            x="14"
                            y="7"
                            width="7"
                            height="10"
                            rx="1"
                            stroke="#fff"
                            strokeWidth="1.4"
                          />
                        </svg>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 text-sm font-medium text-slate-200">
                    {s.title}
                  </div>

                  <div className="mt-6">
                    <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                      <Counter end={s.end} suffix="+" />
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-slate-300">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client testimonials - uses theme colors and dark-mode */}
        <section className="py-16 dark:bg-stone-950/90 bg-black/90 shadow-2xl shadow-blue-50   text-white transition-colors">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-extrabold text-yellow-400">
              What Our Clients Say
            </h3>
            <p className="mt-3 text-slate-300 max-w-3xl mx-auto">
              Real stories from real clients who experienced transformation
              working with Enkonix.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  quote:
                    "Their commitment to timelines and quality is unmatched. We're already on the next project with them.",
                  author: "Anand R.",
                  role: "Founder, QuickBank",
                },
                {
                  quote:
                    "Their team delivered a powerful backend system in record time. Extremely reliable and committed.",
                  author: "Karan B.",
                  role: "Head of Tech at FinForce",
                },
                {
                  quote:
                    "Our UI went from 2000s to futuristic! Their design sense is fire. Truly understand users.",
                  author: "Swetha L.",
                  role: "Product Manager, StyleFusion",
                },
                {
                  quote:
                    "Best dev team we've ever worked with. Full stack delivery + documentation = 100%.",
                  author: "John M.",
                  role: "COO, DevStrive Inc.",
                },
                {
                  quote:
                    "Our conversion rates doubled after they revamped our frontend. Legit game changers.",
                  author: "Preethi D.",
                  role: "Digital Head at ShopDeck",
                },
                {
                  quote:
                    "The perfect balance of design, performance, and delivery. Highly recommend this team.",
                  author: "Riya N.",
                  role: "Marketing Director at EchoCloud",
                },
              ].map((t, idx) => (
                <figure
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 120}
                  className="relative rounded-3xl p-8 bg-linear-to-bl from-white/5 to-white/3 dark:from-white/6 dark:to-white/4 border border-transparent hover:border-cyan-400/25 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 backdrop-blur-md text-left flex flex-col justify-between overflow-visible shadow-lg"
                >
                  <blockquote className="text-slate-100 not-italic text-base md:text-lg leading-relaxed">
                    “{t.quote}”
                  </blockquote>

                  <figcaption className="mt-6 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-yellow-400 font-semibold">
                        {t.author}
                      </div>
                      <div className="text-slate-300 text-sm">{t.role}</div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-linear-to-br from-cyan-400 to-indigo-300 flex items-center justify-center shadow-md ring-2 ring-cyan-600/20">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M7 8h10M7 12h10M7 16h7"
                            stroke="#042640"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
