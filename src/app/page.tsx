import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/education/Education";
import Experience from "@/components/experience/Experience";
import Hero from "@/components/Hero";
import Navbar from "@/components/layouts/Navbar";
import Projects from "@/components/projects/Projects";
import Services from "@/components/service/Services";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div>
<Navbar/>
<Hero/>
<About/>
<Education/>
<Skills/>
<Experience/>
<Projects/>
<Services/>
<Contact/>
    </div>
  );
}
