// import icons
// import { Github } from "lucide-react"

import { FaGithub  } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Footer(){
    return(
        <div className="px-9 bg-slate-600 flex flex-wrap justify-evenly md:justify-center mt-14 p-3 w-full h-auto" >
            <div className="mr-44 mt-3"> 
              <p>Copyright © 2024 </p>
            </div>
            <div className="mr-4 flex flex-wrap">
                <div className="mt-4 mr-5 md:11">
                <a className="text-xl md:2xl  " href="https://github.com/Tanzeel-Azeem" target="_blank"><FaGithub /></a><br /><span>GitHub</span>
            </div>
            <div className="mt-4 mr-5 md:11">
                <a className="text-xl md:2xl  " href="https://www.linkedin.com/in/tanzeel-azeem-463049303/" target="_blank"><FaLinkedin /></a><br /><span>LinkedIn</span>
            </div>
            <div className="mt-4 mr-5 md:11">
                <a className="text-xl md:2xl  " href="https://www.facebook.com/profile.php?id=61565432076923" target="_blank"><FaFacebook /></a><br /><span>Facebook</span>
            </div>
            </div>
            
        </div>
    )
}