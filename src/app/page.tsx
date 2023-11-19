import Image from "next/image";
import { Navbar } from "./Navbar/Navbar";
import { DisplayFeatures } from "./DisplayFeatures/DisplayFeatures";
import { FrequentlyAskedQuestions } from "./FrequentlyAskQuestions/FrequentlyAskedQuestions";
import { Footer } from "./Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Navbar />
        <DisplayFeatures />
        <FrequentlyAskedQuestions />
        <Footer />
      </div>
    </main>
  );
}
