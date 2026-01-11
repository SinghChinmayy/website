import Hero from "@/components/Hero";
import LatestLogs from "@/components/LatestLogs";
import { getLatestLogs } from "@/lib/logs";

export default function Home() {
  const latestLogs = getLatestLogs(5);

  return (
    <main id="main-content" className="min-h-screen pt-20">
      <Hero />
      <LatestLogs logs={latestLogs} />
    </main>
  );
}
