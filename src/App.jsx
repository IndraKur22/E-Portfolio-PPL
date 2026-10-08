import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import PracticeTimeline from './components/PracticeTimeline'
import BestLearning from './components/BestLearning'
import Documentation from './components/Documentation'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Profile />
        <PracticeTimeline />
        <BestLearning />
        <Documentation />
      </main>
      <Footer />
    </>
  )
}

export default App
