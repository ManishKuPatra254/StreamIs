import Image from "next/image";
import { Navbar } from "./Navbar/Navbar";
import { DisplayFeatures } from "./DisplayFeatures/DisplayFeatures";

export default function Home() {
  return (
    <main className="">
      <div className="">
        <Navbar />
        <DisplayFeatures />
      </div>
    </main>
  );
}
