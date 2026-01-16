import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lift-up – QR-gedreven positiviteit</title>
        <meta name="description" content="T-shirts met QR-code die je dag een lift geven met motiverende quotes." />
      </Head>
      <main className="min-h-screen">
        <section className="bg-gradient-to-b from-brand to-black text-white">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              Lift-up: draag positiviteit. Scan. Glimlach.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
              Een T-shirt met QR-code die leidt naar motiverende quotes. Voor iedereen die wel eens een kleine lift kan gebruiken.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href="/scan?utm_source=landing&utm_medium=button"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-brand-accent text-black font-semibold hover:opacity-90"
              >
                Probeer nu (demo)
              </Link>
              <a
                href="#shop"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-white/30 hover:bg-white/10"
              >
                Shop (binnenkort)
              </a>
            </div>
          </div>
        </section>

        <section id="shop" className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">T-shirt Prototype</h2>
          <p className="mt-2 text-gray-600">
            V1: Eén basic T-shirt met QR "Scan mij" en een subtiel Lift-up logo. Bestellen volgt in de volgende release.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4">
              <div className="aspect-square bg-gray-100 rounded mb-3 flex items-center justify-center text-gray-400">
                Mockup
              </div>
              <h3 className="font-semibold">Lift-up Tee (Prototype)</h3>
              <p className="text-sm text-gray-500">Maten: S–XL – Kleur: Zwart</p>
              <button
                disabled
                className="mt-4 w-full px-4 py-2 rounded bg-gray-300 text-gray-700 cursor-not-allowed"
                title="Binnenkort beschikbaar"
              >
                Binnenkort
              </button>
            </div>
          </div>
        </section>

        <footer className="border-t">
          <div className="max-w-5xl mx-auto px-6 py-8 text-sm text-gray-500">
            © {new Date().getFullYear()} Lift-up. <a className="underline" href="/scan">Scan demo</a> ·
            <a className="underline ml-2" href="https://www.113.nl/" target="_blank" rel="noreferrer">Hulp nodig?</a>
          </div>
        </footer>
      </main>
    </>
  );
}
