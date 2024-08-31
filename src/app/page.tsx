
import CallToAction from "@/components/CallToAction";
import ScrollUp from "@/components/Common/ScrollUp";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Waitlist from "@/components/waitlist";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HearMe AI - AI-Powered Meeting Summarization Tool",
  description: "Join the waitlist for HearMe AI, the tool that summarizes professional meetings and calls across any platform.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <section id="Hero">
        <Hero />
      </section>
      <section id="Features">
        <Features />
      </section>
      <section id="Pricing">
        <CallToAction />
      </section>
      <section id="Pricing">
        <Pricing />
      </section>
      <section id="Testimonials">
        <Testimonials />
      </section>
      <section id="Faq">
        <Faq />
      </section>
      <section id="Team">
        <Team />
      </section>
      <section id="Waitlist">
        <Waitlist />
      </section>
    </main>
  );
}