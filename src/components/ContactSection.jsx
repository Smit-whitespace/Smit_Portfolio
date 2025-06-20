import { Mail, MapPin, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m currently open to software development opportunities.
          If you’d like to connect, discuss this project, or explore opportunities, feel free to reach out:
        </p>

        <div className="mx-auto max-w-[700px] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 justify-center">

          {/* Email */}
          <div className="flex items-start p-4 bg-secondary/50 rounded-xl space-x-4">
            <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Email</h4>
              <a
                href="mailto:smitkagathara7@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                smitkagathara7@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start p-4 bg-secondary/50 rounded-xl space-x-4">
            <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Phone</h4>
              <a
                href="tel:+917990235859"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                +91 79902 35859
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start p-4 bg-secondary/50 rounded-xl space-x-4">
            <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Location</h4>
              <span className="text-muted-foreground">
                Gandhinagar, Gujarat, India
              </span>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-start p-4 bg-secondary/50 rounded-xl space-x-4">
            <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
              <FaLinkedin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/smitkagathara/"
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
              >
                linkedin.com/in/smitkagathara
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
