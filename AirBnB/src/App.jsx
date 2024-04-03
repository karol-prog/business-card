import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Card
        /* props */
        img="../public/images/katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
