
"use client";

import { useState } from "react";

export default function Home() {
  const [apiStatus, setApiStatus] = useState("Not checked");
  const [loading, setLoading] = useState(false);

  async function checkBackend() {
    setLoading(true);
    setApiStatus("Checking...");

    try {
      const response = await fetch("http://127.0.0.1:8000/health");

      if (!response.ok) {
        throw new Error("Backend request failed");
      }

      const data = await response.json();
      setApiStatus(data.status === "healthy" ? "Connected" : "Unexpected response");
    } catch {
      setApiStatus("Connection failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-5xl">
        <header className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            AI-powered workspace
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Document Intelligence
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            Upload documents, extract important information, and ask questions
            with answers grounded in your files.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <h2 className="text-xl font-semibold">Backend connection</h2>
            </div>

            <p className="mb-5 text-sm text-slate-400">
              Verify that your FastAPI service is available.
            </p>

            <div className="mb-5 rounded-xl bg-slate-950 p-4">
              <p className="text-sm text-slate-400">API status</p>
              <p className="mt-1 font-semibold">
                {apiStatus}
              </p>
            </div>

            <button
              onClick={checkBackend}
              disabled={loading}
              className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:opacity-50"
            >
              {loading ? "Checking..." : "Check connection"}
            </button>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="text-2xl">📄</span>
              <h2 className="text-xl font-semibold">Document workspace</h2>
            </div>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Your workspace will let you upload PDFs, search their contents,
              and extract structured information.
            </p>

            <div className="rounded-xl border border-dashed border-slate-700 p-5 text-center">
              <p className="font-medium">Document upload</p>
              <p className="mt-2 text-sm text-slate-500">
                Coming in the next development step
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-10 border-t border-slate-800 pt-5 text-sm text-slate-500">
          AI Document Intelligence Assistant · Local development
        </footer>
      </div>
    </main>
  );
}
