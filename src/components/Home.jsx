import Navbar from "./Navbar";
import Hero from "./Hero";
import Academics from "./Academics";

function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <Hero />
        <Academics />
      </main>
    </div>
  );
}

export default Home;