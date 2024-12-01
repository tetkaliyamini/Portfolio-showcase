import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface Certificate {
  title: string;
  issuer: string;
  icon?: string;
}

const certificates: Certificate[] = [
  {
    title: "Machine Learning",
    issuer: "DataPro",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
  },
  {
    title: "Java Development",
    issuer: "Vintern",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    title: "AWS Generative AI",
    issuer: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
  },
  {
    title: "Decoding Blockchain",
    issuer: "CUTM Odisha",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitcoin/bitcoin-original.svg"
  },
  {
    title: "Database Management",
    issuer: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
  },
  {
    title: "Data Analytics",
    issuer: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    title: "Machine Learning",
    issuer: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
  },
  {
    title: "AIML Essentials",
    issuer: "AWS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Certifications
        </motion.h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-900/50 rounded-lg p-6 flex flex-col items-center text-center"
            >
              {cert.icon ? (
                <img 
                  src={cert.icon} 
                  alt={cert.title} 
                  className="w-16 h-16 mb-4"
                />
              ) : (
                <Award className="w-16 h-16 mb-4 text-blue-500" />
              )}
              <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 text-sm">Issued by {cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}