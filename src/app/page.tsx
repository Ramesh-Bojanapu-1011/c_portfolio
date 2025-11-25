import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="relative w-full caret-transparent overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="flex w-screen justify-center items-center py-6">
        <Link href="/" aria-label="Home">
          <Image
            src={"/index_logo.png"}
            width={500}
            height={600}
            alt="Enkonix logo"
          />
        </Link>
      </div>

      <Marquee
        gradient={false}
        speed={40}
        className="bg-slate-50 dark:bg-slate-800/40 py-2"
      >
        <span className="font-bold text-lg text-red-600 dark:text-slate-100">
          Welcome to Enkonix Software Services Pvt. Ltd — Empowering Innovation,
          Delivering Excellence Worldwide | Reach us at hr@enkonix.in | Call us:
          +91-9108191003
        </span>
      </Marquee>

      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/hero.svg')" }}
        role="img"
        aria-label="Campus aerial view"
      >
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-24">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-2xl tracking-tight leading-tight">
              Enkonix — Our Journey of Growth
            </h1>

            <div className="mt-8 space-y-4 text-lg md:text-xl max-w-3xl mx-auto opacity-95">
              <p className="opacity-90">
                From a small engineering team to a global software partner,
              </p>
              <p className="opacity-90">
                we deliver robust, scalable solutions that drive customer
                success.
              </p>
              <p className="mt-4 opacity-90">
                Explore our services, case studies, and product offerings.
              </p>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
              <Link
                href="/landging"
                aria-label="Enkonix Enterprise Software"
                className="inline-flex items-center justify-center rounded-full px-10 py-5 bg-linear-to-r from-yellow-400 to-orange-500 dark:from-yellow-500 dark:to-orange-600 text-black dark:text-white font-bold shadow-2xl transform transition hover:-translate-y-1 hover:scale-105 duration-300 ring-1 ring-black/10"
              >
                <div className="text-center">
                  <div className="text-sm">Enkonix</div>
                  <div className="text-base">Enterprise Software</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
