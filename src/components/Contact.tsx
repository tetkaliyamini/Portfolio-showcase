import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';

export default function Contact() {
  const socialLinks = [
    {
      icon: <Github size={32} />,
      url: "https://github.com/tetkaliyamini",
      delay: 0
    },
    {
      icon: <Linkedin size={32} />,
      url: "https://linkedin.com/in/yamini-maneswararao-604252303",
      delay: 0.1
    },
    {
      icon: <Code2 size={32} />,
      url: "https://leetcode.com/Yamini_12-",
      delay: 0.2
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Let's Connect
        </motion.h2>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-8 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: link.delay }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={link.url}
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-300"
          >
           "Thank you for visiting my portfolio! I’m always open to learning, collaborating, and working on innovative projects. Let’s connect and explore the possibilities together!"
           Innovation and learning drive me forward. Let’s create impactful solutions together!
          </motion.p>
        </div>
      </div>
    </section>
  );
}