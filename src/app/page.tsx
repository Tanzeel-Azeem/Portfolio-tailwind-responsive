import Image from "next/image";
import Header from "./header";
import Project from "./project"
import Footer from "./footer"
import About from "./about"
import Contact from "./contact"
// import { Image } from "next/image";
// import Header from "./header";
 
export default function Home() {
  return (
    <main className="items-center">
      <Header/>
      <div className="text-center mt-[60px] md:ml-11 md:flex md:justify-between ">
         <div className="md:mt-40 lg:ml-20">
      <h1>Hey! {`I'm`} <br /> Tanzeel</h1>
      <p>{`I'm`} a Front-End Developer and Ready to transform your Dreams into Reality!</p>
     <a href="#about"><button className="px-2 py-1  bg-slate-300 hover:bg-slate-400 duration-200 text-lg  rounded-xl mt-3">Learn More</button></a> 
      <a href="#contact"><button className="px-3 py-1  bg-slate-300 hover:bg-slate-400 duration-200 text-lg ml-3 rounded-xl mt-3">Hire Me</button></a>
    </div>
    <div className=" mt-9 ">
      <Image
      className="pic md:mr-36 md:ml-10 rounded-3xl mr-4"
      
      src='/pic.jpeg'
      alt=""
      height={400}
      width={400}/>
    </div>
      
      </div>
      <Project/>
      <About/>
      <Contact/>
      <Footer/>
   
    </main>                   
  );
}