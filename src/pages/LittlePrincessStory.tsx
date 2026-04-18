import { HeroSection } from '../components/hero/HeroSection';
import { MeaningSection } from '../components/meaning/MeaningSection';
import { PuzzleSection } from '../components/puzzle/PuzzleSection';
import { LetterSection } from '../components/letter/LetterSection';

export default function LittlePrincessStory() {
  return (
    <div className="bg-space-dark min-h-screen text-starlight selection:bg-space-light/50">
      <HeroSection />
      <MeaningSection />
      <PuzzleSection />
      <LetterSection />
    </div>
  );
}
