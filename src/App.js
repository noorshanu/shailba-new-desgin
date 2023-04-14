import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main.js";
import Roadmap from "./components/Roadmap.js";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <div className="h-[auto] bg-[url('../public/assets/home.png')] bg-cover pb-60">
        <div className=" mx-auto  max-w-7xl px-3 md:px-10  ">
          <Navbar />
          <Main />
        </div>
      </div>
      <div className="h-[auto] bg-[url('../public/assets/images/bg-full.png')] bg-cover">
        <div className=" mx-auto  max-w-7xl px-3 md:px-10  ">
          <Roadmap />
          <Tokenomics/>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
