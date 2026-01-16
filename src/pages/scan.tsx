import Head from "next/head";
import { useEffect, useState } from "react";
import { QuoteCard } from "@/components/QuoteCard";

type Quote = { text: string; lang?: string; source?: string; ai?: boolean };

export default function ScanPage() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang") ?? "nl";
    fetch(`/api/quotes/random?lang=${encodeURIComponent(lang)}`)
      .then((r) => r.json())
      .then(setQuote)
      .catch(() => setError("Kon geen quote laden. Probeer opnieuw."));
  }, []);

  return (
    <>
      <Head>
        <title>Lift-up – Jouw quote</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-b from-white to-gray-50">
        <h1 className="sr-only">Motiverende quote</h1>
        {quote ? (
          <QuoteCard text={quote.text} source={quote.ai ? "AI" : quote.source} />
        ) : error ? (
          <div className="text-red-600" role="alert">{error}</div>
        ) : (
          <div className="text-gray-500">Laden…</div>
        )}
        <p className="mt-6 text-xs text-gray-500 max-w-md text-center">
          Deze tekst kan automatisch gegenereerd zijn. Voor persoonlijke hulp: bezoek{" "}
          <a className="underline" href="https://www.113.nl/" target="_blank" rel="noreferrer">113 Zelfmoordpreventie</a>.
        </p>
      </main>
    </>
  );
}
