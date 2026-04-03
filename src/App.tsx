import { HeroSection } from "./components/HeroSection";
import { BentoGrid } from "./components/BentoGrid";


function App() {
  return (
    <div className="min-h-[100dvh] w-full bg-background overflow-x-clip">
      <HeroSection />
      <BentoGrid />
    </div>
  );
}

export default App;
