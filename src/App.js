import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <div className="w-screen h-screen bg-[url('../public/assets/images/bg-main.png')] bg-cover">
        <div className=" mx-auto  max-w-7xl px-3 md:px-10  ">
        <Navbar />

        </div>
      </div>
    </div>
  );
}

export default App;
