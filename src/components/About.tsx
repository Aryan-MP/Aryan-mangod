
import React from "react";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-dark-charcoal">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 opacity-0 animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
            <p className="text-gray-300 leading-relaxed">
            Hello! I'm Aryan, a passionate technologist and developer with a deep interest in creating innovative solutions using modern web technologies, artificial intelligence, and cloud computing.
            </p>
            <p className="text-gray-300 leading-relaxed">
            My journey began with a curiosity about how digital products are built. This led me to dive into web development, software engineering, and ultimately into emerging technologies like AI/ML and cloud computing. I earned my BSc in Cloud Computing from REVA University and have since built a robust portfolio—from designing end-to-end DevOps pipelines during my internship at Zoeen Cloud to developing scalable cloud solutions and experimenting with advanced AI agents as a Cloud Consultant at Spektra Systems.
            </p>
            <p className="text-gray-300 leading-relaxed">
            I thrive on challenges, quickly learning new skills and adapting to various technologies. Whether I'm building interactive web apps using React, Next.js, and TypeScript or engineering complex cloud architectures and AI systems, I believe in the power of technology to solve real-world problems and improve lives.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="#contact" 
                className="btn btn-primary"
              >
                Get in Touch
              </a>
              <a 
                href="https://drive.google.com/file/d/1HgJCt1VxWiqF43d8-FMhL-KAeO-_BGdC/view?usp=sharing" 
                className="btn btn-outline flex items-center space-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={16} />
                <span>Resume</span>
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-rich-black p-8 neon-border opacity-0 animate-slideInRight" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-4 text-white">Quick Facts</h3>
            <ul className="space-y-4">
              <li className="flex">
                <span className="text-neon-purple font-mono mr-2">▹</span>
                <p className="text-gray-300">Experience in building modern web applications using React, Next.js, and TypeScript</p>
              </li>
              <li className="flex">
                <span className="text-neon-purple font-mono mr-2">▹</span>
                <p className="text-gray-300">Passionate about AI/ML and its applications in solving real-world problems</p>
              </li>
              <li className="flex">
                <span className="text-neon-purple font-mono mr-2">▹</span>
                <p className="text-gray-300">Advocate for clean code, best practices, and continuous learning</p>
              </li>
              <li className="flex">
                <span className="text-neon-purple font-mono mr-2">▹</span>
                <p className="text-gray-300">Experienced in cloud services and DevOps practices</p>
              </li>
              <li className="flex">
                <span className="text-neon-purple font-mono mr-2">▹</span>
                <p className="text-gray-300">Constantly exploring new technologies and frameworks to drive innovation</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
