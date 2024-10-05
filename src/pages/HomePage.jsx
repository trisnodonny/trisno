import Hero from "@components/partial/Hero";
import Introduction from "@components/partial/Introduction";
import Journey from "@components/partial/Journey";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Introduction />
      <Journey />
      <Introduction />
    </main>
  );
}
