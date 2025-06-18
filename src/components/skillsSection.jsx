// SkillsSection.jsx
import { cn } from "@/lib/utils";
import { 
  Code2, FileCode, Braces, BrainCircuit, Cpu, Database, 
  Settings, GitBranch, Terminal, Palette, MousePointerClick, FileText 
} from 'lucide-react';
import { useState } from 'react';
import { 
  SiDocker, SiSpringboot, SiPython, SiTensorflow, SiOpencv, 
  SiPandas, SiScikitlearn, SiMongodb, SiMysql, SiReact 
} from 'react-icons/si';

const skills = [
  // Frontend
  { name: "HTML/CSS", category: "frontend", icon: <FileCode size={20} /> },
  { name: "JavaScript", category: "frontend", icon: <Braces size={20} /> },
  { name: "React", category: "frontend", icon: <SiReact size={20} /> },
  { name: "TypeScript", category: "frontend", icon: <Braces size={20} /> },
  { name: "Tailwind CSS", category: "frontend", icon: <Palette size={20} /> },

  // Backend
  { name: "Java", category: "backend", icon: <Code2 size={20} /> },
  { name: "Spring Boot", category: "backend", icon: <SiSpringboot size={20} /> },
  { name: "JSP", category: "backend", icon: <FileText size={20} /> },
  { name: "Node.js", category: "backend", icon: <Cpu size={20} /> },
  { name: "Express", category: "backend", icon: <Settings size={20} /> },
  { name: "MongoDB", category: "backend", icon: <SiMongodb size={20} /> },
  { name: "MySQL", category: "backend", icon: <SiMysql size={20} /> },
  { name: "Hibernate", category: "backend", icon: <Settings size={20} /> },

  // AI/ML
  { name: "Python", category: "ai/ml", icon: <SiPython size={20} /> },
  { name: "TensorFlow", category: "ai/ml", icon: <SiTensorflow size={20} /> },
  { name: "OpenCV", category: "ai/ml", icon: <SiOpencv size={20} /> },
  { name: "Pandas", category: "ai/ml", icon: <SiPandas size={20} /> },
  { name: "Scikit-learn", category: "ai/ml", icon: <SiScikitlearn size={20} /> },

  // Tools
  { name: "Git/GitHub", category: "tools", icon: <GitBranch size={20} /> },
  { name: "Docker", category: "tools", icon: <SiDocker size={20} /> },
  { name: "VS Code", category: "tools", icon: <Terminal size={20} /> },
  { name: "IntelliJ IDEA", category: "tools", icon: <Terminal size={20} /> },
  { name: "Eclipse", category: "tools", icon: <Terminal size={20} /> },
  { name: "Figma", category: "tools", icon: <MousePointerClick size={20} /> }
];

const categoryColors = {
  frontend: "text-green-400",
  backend: "text-blue-400",
  "ai/ml": "text-purple-400",
  tools: "text-gray-400"
};

const categories = ["All", "Frontend", "Backend", "AI/ML", "Tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => {
        if (activeCategory === "Frontend") return skill.category === "frontend";
        if (activeCategory === "Backend") return skill.category === "backend";
        if (activeCategory === "AI/ML") return skill.category === "ai/ml";
        if (activeCategory === "Tools") return skill.category === "tools";
        return true;
      });

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize border border-primary/30",
                activeCategory === category 
                  ? "bg-primary text-white"
                  : "hover:bg-primary/20 text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-[1.03] flex items-center space-x-4"
            >
              <div className={`${categoryColors[skill.category]} flex items-center`}>
                {skill.icon}
              </div>
              <h3 className="font-semibold text-lg text-glow">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
