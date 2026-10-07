import { useCallback, useState } from "react";
import { Header, Topbar } from "./components/Header";
import { Hero } from "./components/Hero";
import { IsThisYou } from "./components/IsThisYou";
import { Specialties } from "./components/Specialties";
import { About } from "./components/About";
import { Office } from "./components/Office";
import { Process } from "./components/Process";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ConsultModal } from "./components/ConsultModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <div className="min-h-screen bg-cream-100 text-ink">
      <Topbar />
      <Header onBook={openModal} />
      <main>
        <Hero onBook={openModal} />
        <IsThisYou onBook={openModal} />
        <Specialties onBook={openModal} />
        <About onBook={openModal} />
        <Office />
        <Process onBook={openModal} />
        <FAQ onBook={openModal} />
        <Contact />
      </main>
      <Footer />
      <ConsultModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}
