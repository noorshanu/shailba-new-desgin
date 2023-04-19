import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main.js";
import Roadmap from "./components/Roadmap.js";
import Tokenomics from "./components/Tokenomics";

function App() {
  return (
    <div className="w-screen h-auto overflow-x-hidden bg-[url('../public/assets/images/bg-sm.png')] bg-cover bg-no-repeat">
      <div className="h-[auto] sm:bg-[url('../public/assets/home.png')] bg-transparent bg-cover sm:pb-60">
        <div className=" mx-auto  max-w-7xl px-3 md:px-10  ">
          <Navbar />
          <Main />
        </div>
      </div>
      <div className="h-[auto]  sm:bg-[url('../public/assets/images/bg-full.png')] bg-transparent bg-cover">
        <div className=" mx-auto  max-w-7xl px-3 md:px-10  ">
          <Roadmap />
        </div>
        <div className="sm:bg-none bg-[url('../public/assets/images/bg-tokenomic.png')] bg-cover">
          {/* <div className=" mx-auto  max-w-7xl px-3 md:px-10  ">
            <Tokenomics />
          </div> */}
        </div>
        <div className=" mx-auto  max-w-7xl px-3 md:px-10  ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
