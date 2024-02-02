import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <Sidebar />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
