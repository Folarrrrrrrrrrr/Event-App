import Image from "next/image";
import Hero from"@/app/components/Hero"
import Services from "./components/Services";
export default function Home() {
  return (
    <div className="items-center justify-items-center min-w-screen min-h-screen p-20 pb-5  sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Hero className=""/>
      <Services/>
    </div>
  );
}
