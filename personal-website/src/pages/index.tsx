import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className="flex h-screen font-mono justify-center">
        <div className="grid grow grid-rows-3 justify-center">
          <div>
            <div className="animate-pulse text-xl">
              Welcome to AJ&apos;s Personal Website 2.0
            </div>
            <div className=" text-sm">
              built with Next JS + TailwindCSS + DaisyUI
            </div>
            <div className=" text-sm">Continuously being updated</div>
          </div>

          <div className="text-med text-accent">
            Here you&apos;ll get a view into my journey as I dive into personal
            growth and software engineering.
          </div>
          <div className="text-med text-accent">
            I will try to cover what I&apos;m learning, new topics I discover
            and experiences that seem worthy of recording.
          </div>
        </div>
      </main>
    </>
  );
}
