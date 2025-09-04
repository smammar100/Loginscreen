import HeroSection from './pages/HeroSection';
import SignInSection from './pages/SignInSection';

function App() {
  return (
    <div className="flex flex-col md:flex-row w-lvw h-lvh">
      <HeroSection />
      <SignInSection />
    </div>
  )
}

export default App;
