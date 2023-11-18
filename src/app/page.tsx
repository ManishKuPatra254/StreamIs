import Image from "next/image";
import { Navbar } from "./Navbar/Navbar";
import { DisplayFeatures } from "./DisplayFeatures/DisplayFeatures";
import { FrequentlyAskedQuestions } from "./FrequentlyAskQuestions/FrequentlyAskedQuestions";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Navbar />
        <DisplayFeatures />
        <FrequentlyAskedQuestions />
      </div>
    </main>
  );
}
