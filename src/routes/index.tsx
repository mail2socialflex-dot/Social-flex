import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Cursor } from "@/components/site/Cursor";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Stats } from "@/components/site/Stats";
import { AboutCTA } from "@/components/site/AboutCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppCTA";

const title = "Social Flex — Creative & Digital Marketing Agency";
const description =
  "Social Flex is a premium creative agency building brands people remember through strategy, content, design and digital marketing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background md:cursor-none">
      <Cursor />
      <Navbar />
      <main>
        <h1 className="sr-only">Social Flex — creative and digital marketing agency</h1>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Stats />
        <AboutCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </div>
  );
}
