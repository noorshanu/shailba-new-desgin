import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main.js";

function App() {
  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <div className="h-[auto] bg-[url('../public/assets/images/bg-main.png')] bg-cover">
        <div className=" mx-auto  max-w-7xl px-3 md:px-10  ">
          <Navbar />
          <Main />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
