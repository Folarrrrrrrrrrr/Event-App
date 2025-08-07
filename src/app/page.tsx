"use client" ;
// import Home from"@/app/components/Home"
import Services from "./components/Services";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <div className="items-center justify-items-center min-w-screen min-h-screen p-20 pb-5  sm:p-10 font-[family-name:var(--font-geist-sans)]">
      {/* <Home /> */}
      {/* <Home/> */}
      <HomePage className=""/>
      <Services/>
      <Gallery/>
      <Contact/>
    </div>
  );
}
