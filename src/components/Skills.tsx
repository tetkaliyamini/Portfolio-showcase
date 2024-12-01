import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  icon: string;
  level?: string;
}

interface SkillCategory {
  title: string;
  items: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: [
      {
        name: "Java",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        level: "Advanced"
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        level: "Advanced"
      },
      {
        name: "C",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
        level: "Intermediate"
      }
    ]
  },
  {
    title: "Technologies",
    items: [
      {
        name: "Machine Learning",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
      },
      {
        name: "Deep Learning",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
      },
      {
        name: "Natural Language Processing",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
      },
      {
        name: "Web Scraping",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
      }
    ]
  },
  {
    title: "Web Development",
    items: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Flask",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
      },
      {
        name: "HTML/CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      }
    ]
  },
  {
    title: "Tools & Databases",
    items: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "MySQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
      },
      {
        name: "Streamlit",
        icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg"
      }
    ]
  }
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Skills & Technologies
        </motion.h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={item}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-gray-300 text-sm text-center">{skill.name}</span>
                    {skill.level && (
                      <span className="text-blue-400 text-xs mt-1">({skill.level})</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}