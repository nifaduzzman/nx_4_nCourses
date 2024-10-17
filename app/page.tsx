import Category from "./components/Category";
import Herosection from "./components/Herosection";
import HomeChannels from "./HomeChannels";


export default function Home() {
  return (
    <main>
      <Herosection/>
      <HomeChannels/>
      <Category/>
    </main>
  );
}
