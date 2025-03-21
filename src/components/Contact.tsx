import React from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-rich-black">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential collaborations?
            I'd love to hear from you! Feel free to reach out through any of these channels.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-neon-purple/10 p-3 rounded-md mr-4">
                <Mail className="text-neon-purple" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Email</h4>
                <a href="mailto:aryanmp2003@gmail.com" className="text-gray-300 hover:text-neon-purple transition-colors">
                  aryanmp2003@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-neon-purple/10 p-3 rounded-md mr-4">
                <MapPin className="text-neon-purple" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Location</h4>
                <p className="text-gray-300">
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-neon-purple/10 p-3 rounded-md mr-4">
                <Phone className="text-neon-purple" size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Phone</h4>
                <a href="tel:+918618098258" className="text-gray-300 hover:text-neon-purple transition-colors">
                  +91 8618098258
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-charcoal rounded-lg p-6 neon-border">
            <h4 className="text-white font-medium mb-4 text-center">Let's Connect</h4>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/Aryan-MP"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neon-purple/10 p-4 rounded-full hover:bg-neon-purple/20 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="text-neon-purple" size={24} />
              </a>
              <a
                href="https://linkedin.com/in/aryan-mp"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neon-purple/10 p-4 rounded-full hover:bg-neon-purple/20 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="text-neon-purple" size={24} />
              </a>
              <a
                href="https://x.com/aryan81727"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neon-purple/10 p-4 rounded-full hover:bg-neon-purple/20 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="text-neon-purple" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
