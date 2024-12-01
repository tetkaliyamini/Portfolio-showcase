import { Calendar } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Machine Learning Intern",
    company: "DataPro",
    period: "May 2024 - July 2024",
    description: "Developed machine learning models using TensorFlow and scikit-learn, focusing on data preprocessing and model evaluation."
  },
  {
    title: "Java Developer Intern",
    company: "Vintern",
    period: "2024",
    description: "Led the development of a Java-based ticketing management system, enhancing backend functionality and streamlining ticket processing."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                </div>
                <span className="text-gray-400 flex items-center gap-2">
                  <Calendar size={16} />
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}