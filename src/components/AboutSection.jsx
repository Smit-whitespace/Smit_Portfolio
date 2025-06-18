import { BrainCircuit, Briefcase, BriefcaseConveyorBelt, Code, Code2, Code2Icon, CodeSquare, CodeXml, Compass, Rocket, User } from "lucide-react";
export const AboutSection  = () => {
  return (<section id="about" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary"> Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold"> Passionate Full Stack developer and AI-ML enthusiast.</h3>

          <p className="text-muted-foreground"> i specialize in creating responsive, performant web applications and AI-ML projects using modern technologies.</p>

          <p className="text-muted-foreground">
            I'm enthusiastic about creating effective solutions to complex problems, and I'm constantly evolving myself by learning new techniques and technologies to  keep myself at the forefront of the rapidly growing tech landacape. 
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            <a href="#contact" className="cosmic-button"> Get In Touch </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 ">
                <Code2 className="h-6 w-6 "/>
                </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Java Full Stack Developer</h4>
                    <p className="text-muted-foreground">
                      Proficient in Java, Spring Boot, JSP, React, and building secure, scalable web applications.
                    </p>
                  </div>
              </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 ">
                <BrainCircuit className="h-6 w-6 "/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">AI/ML Project Experience</h4>
                <p className="text-muted-foreground">
                  Hands-on experience with deep learning and anomaly detection in real-world video data.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10 ">
                <Compass className="h-6 w-6 "/>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Tech Explorer</h4>
                <p className="text-muted-foreground">
                  Passionate about learning new technologies, with projects like this website and GitHub Profile Analyzer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};