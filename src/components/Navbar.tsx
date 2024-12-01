import { useState, useEffect } from 'react';
import { Menu, X, Mail, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certificates", label: "Certificates" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-white"
          >
            Yamini
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex items-center gap-6 text-gray-300">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:text-white transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <a href="mailto:tetakaliyamini@gmail.com" className="flex items-center gap-2 hover:text-white">
                <Mail size={16} />
                <span className="hidden md:inline">Email</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                <span className="hidden md:inline">Vizag, India</span>
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-sm"
            >
              <div className="flex flex-col space-y-4 px-4 py-6">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col space-y-4 text-gray-300 pt-4 border-t border-gray-700">
                  <a href="mailto:tetakaliyamini@gmail.com" className="flex items-center gap-2 hover:text-white">
                    <Mail size={16} />
                    <span>Email</span>
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>Vizag, India</span>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}