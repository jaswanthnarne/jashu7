
import { motion } from "framer-motion";
import { Code2, Shield, Server, Laptop, Network, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: Shield,
      skills: [
        { name: "Network Security", proficiency: 88 },
        { name: "Endpoint Protection", proficiency: 85 },
        { name: "Security Auditing", proficiency: 90 },
        { name: "Threat Analysis", proficiency: 87 },
      ],
    },
    {
      title: "System Administration",
      icon: Server,
      skills: [
        { name: "Infrastructure Management", proficiency: 89 },
        { name: "System Maintenance", proficiency: 90 },
        { name: "Network Administration", proficiency: 86 },
        { name: "Hardware Troubleshooting", proficiency: 88 },
      ],
    },
    {
      title: "Development",
      icon: Code2,
      skills: [
        { name: "Full-Stack Development", proficiency: 85 },
        { name: "API Integration", proficiency: 87 },
        { name: "Database Management", proficiency: 89 },
        { name: "Version Control", proficiency: 90 },
      ],
    },
    {
      title: "IT Operations",
      icon: Laptop,
      skills: [
        { name: "Help Desk Support", proficiency: 90 },
        { name: "Asset Management", proficiency: 88 },
        { name: "Software Deployment", proficiency: 87 },
        { name: "System Documentation", proficiency: 86 },
      ],
    },
    {
      title: "Networking",
      icon: Network,
      skills: [
        { name: "Network Configuration", proficiency: 89 },
        { name: "Protocol Analysis", proficiency: 86 },
        { name: "Router & Switch Management", proficiency: 88 },
        { name: "VPN Setup", proficiency: 85 },
      ],
    },
    {
      title: "Technical Support",
      icon: Wrench,
      skills: [
        { name: "Problem Resolution", proficiency: 90 },
        { name: "User Training", proficiency: 87 },
        { name: "System Diagnostics", proficiency: 88 },
        { name: "Performance Optimization", proficiency: 89 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 inline-block cyber-glow"
          >
            Skills & Expertise
          </motion.span>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-3xl md:text-4xl font-bold cyber-glow"
          >
            Technical Proficiencies
          </motion.h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-6 rounded-xl hover:border-primary/30 transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 neon-pulse">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold cyber-glow">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.1) }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-foreground/80">{skill.name}</span>
                      <span className="text-sm text-primary">{skill.proficiency}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.1) }}
                        className="skill-progress"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
