
'use client';

import About from "../components/layout/About";
import HeroSection from "../components/layout/HeroSection";
import ReactOut from "../components/layout/ReactOut";
import SelectedWorks from "../components/layout/SelectedWorks";

const Home = () => {

  return (
    <div className="flex justify-center"> {/* Add overflow-x-hidden here */}
      <div className="mt-[150px] w-[1128px]">
        <HeroSection />
        <About />
        <SelectedWorks/>
        <ReactOut/>
      </div>
    </div>

  )
}

export default Home