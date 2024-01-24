import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import LatestArticles from "./components/LatestArticles";
import Sidebar from "./components/Sidebar";


export default function App() {
  return (
   <div>
      <Sidebar/>
      <Header/>
      <main className="min-h-full">
        <Home/>
        <About/>
        <LatestArticles/>
      </main>
      <Footer/>
   </div>
  )
}