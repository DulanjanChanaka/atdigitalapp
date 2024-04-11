import Bottom from "../components/Bottom";
import Hero from "../components/Hero";
import MiddleOne from "../components/MiddleOne";
import MiddleTwo from "../components/MiddleTwo";


function Home() {
  return (
    <div className="flex flex-col items-center">
       <Hero/> 
       <MiddleOne/>
       <MiddleTwo/>
       <Bottom/>
    </div>
  )
}

export default Home;