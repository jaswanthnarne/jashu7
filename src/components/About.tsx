
import { motion } from "framer-motion";
import { Shield, Server, Code } from "lucide-react";

const About = () => {
  const experiences = [
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Specialized in endpoint security and network protection",
    },
    {
      icon: Server,
      title: "System Administration",
      description: "1+ year experience in IT infrastructure management",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Hands-on experience with modern web technologies",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            About Me
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold">
            Passionate about Technology & Security
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground/80 leading-relaxed mb-6">
              As a dedicated Cybersecurity Enthusiast and IT professional, I bring a comprehensive understanding of system administration, network security, and IT operations. My journey in technology has been driven by a passion for creating secure and efficient digital environments.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Currently serving as an IT Intern and System Administrator, I've gained valuable experience in hardware troubleshooting, software deployment, and network maintenance. My role at the System Support Cell has enhanced my ability to manage complex IT infrastructures while ensuring optimal security measures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {experiences.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl flex items-start gap-4"
              >
                <div className="p-3 rounded-lg bg-primary/10">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
