import React from "react";

export function QuoteCard({ text, source }: { text: string; source?: string }) {
  return (
    <div className="max-w-xl mx-auto rounded-xl border border-gray-200 shadow-sm p-6 bg-white">
      <p className="text-xl md:text-2xl leading-relaxed font-medium text-gray-900">
        "{text}"
      </p>
      {source ? (
        <p className="mt-4 text-sm text-gray-500">Bron: {source}</p>
      ) : null}
    </div>
  );
}
