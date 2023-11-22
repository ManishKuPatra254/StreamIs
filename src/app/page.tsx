import Image from "next/image";
import { Navbar } from "./Navbar/Navbar";
import { ComingSoon } from "./ComingSoon/ComingSoon";
import { DisplayFeatures } from "./DisplayFeatures/DisplayFeatures";
import { FAQs } from "./FAQs/FAQs";
import { Footer } from "./Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Navbar />
        <ComingSoon />
        <DisplayFeatures />
        <FAQs />
        <Footer />
      </div>
    </main>
  );
}
