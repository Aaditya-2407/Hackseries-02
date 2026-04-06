import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom'

import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Sections/Hero'
import Why from './Sections/Why'
import Impact from './Sections/Impact'
import RoadmapsGrid from './Sections/RoadmapsGrid'

import RoadmapWebDev from './Pages/RoadmapWebDev'
import RoadmapAIML from './Pages/RoadmapAIML'
import RoadmapDSA from './Pages/RoadmapDSA'
import RoadmapProgramming from './Pages/RoadmapProgramming'
import RoadmapCloud from './Pages/RoadmapCloud'

import Gallery from './Pages/Gallery'

function Home() {
  return (
    <div className="relative w-full bg-black overflow-x-hidden">

      <Header />


      <main className="relative z-10 w-full bg-black shadow-[0_50px_50px_rgba(0,0,0,0.5)] mb-[60vh] md:mb-[65vh]">
        <Hero />
        <Why />
        <Impact />
        <RoadmapsGrid />
      </main>


      <Footer />

    </div>
  )
}

import Registration from './Pages/Registration'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/roadmaps" element={<Outlet />}>
          <Route path="webdev" element={<RoadmapWebDev />} />
          <Route path="aiml" element={<RoadmapAIML />} />
          <Route path="cloud" element={<RoadmapCloud />} />
          <Route path="programming" element={<RoadmapProgramming />} />
          <Route path="dsa" element={<RoadmapDSA />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App