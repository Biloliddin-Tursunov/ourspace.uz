import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-space-dark min-h-screen flex items-center justify-center text-starlight selection:bg-space-light/50">
      {/* Asosiy sahifa hozircha bo'sh (Empty for now) */}
      <Link to={"stories/little-princess"}>For Little Princess</Link>
    </main>
  );
}
