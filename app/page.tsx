import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full font-mono text-sm">
        <div className="text-center mt-10">
          <div className="text-lg font-semibold">Welcome to Github Clone</div>
          <Link href="/app">Login</Link>
        </div>
      </div>
    </main>
  );
}
