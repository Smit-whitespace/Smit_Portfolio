import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { MainSection } from "../components/MainSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/skillsSection";
import { ProjectSection } from "../components/ProjectSection";

export const Home =() =>{
  return <div className="min-h=screen bg-background text-foreground overflow-x-hidden">
    {/* Theme Toggle */    }
      <ThemeToggle />  
    {/* Background Effects */    }
      <StarBackground />
    {/* Navbar */    }
      <Navbar />
    {/* Main Content */    }
      <main>
        <MainSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
      </main>
    {/* Footer */    }

  </div>;
};