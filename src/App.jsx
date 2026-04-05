import Header from './Components/Header'
import Footer from './Components/Footer'
import Hero from './Sections/Hero'
import Why from './Sections/Why'
import Impact from './Sections/Impact'

function App() {
  return (
    /* This single DIV wraps everything */
    <div className="flex flex-col min-h-screen w-full bg-black overflow-x-hidden">

      <Header />

      {/* Main content area */}
      <main className="flex-grow">
        <Hero />
        <Why />
        <Impact />
      </main>

      <Footer />

    </div>
  )
}

export default App