import Hero from "@components/home/Hero";
import Introduction from "@components/home/Introduction";
import Journey from "@components/home/Journey";
import Show from "../components/home/Show";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Journey />
      <Show />
    </main>
  );
}
