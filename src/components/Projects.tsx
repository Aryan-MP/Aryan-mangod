
import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubLink: string;
  demoLink: string;
  index: number;
}
const ProjectCard = ({ title, description, technologies, image, githubLink, demoLink, index }: ProjectProps) => {
  return (
    <div 
      className="relative bg-dark-charcoal rounded-lg overflow-hidden neon-border card-hover opacity-0 animate-fadeIn"
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      {/* Ongoing Badge for the First Project */}
      {index === 0 && (
        <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full animate-pulse z-10">
          🟢 Ongoing
        </span>
      )}

      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-purple/10"></div>
        <div 
          className="w-full h-full bg-rich-black"
          style={{ 
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="text-xs bg-neon-purple/10 text-neon-purple px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
        </div>
      </div>
    </div>
  );
};



const Projects = () => {
  const projects = [
    {
      title: "Smart Agentic AI-Based Algo Trading System",
      description: "A platform in development that enables users to build trading strategies using simple prompts. This smart, agentic system aims to democratize algo trading by allowing anyone to create and execute custom strategies with ease.",
      technologies: ["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"],
      image: "/images/img1.jpg",
      githubLink: "https://github.com",
    },
    {
      title: "Customer Support Web App with Agentic AI Workflow",
      description: "Developed a customer support solution built on Azure that leverages an agentic AI workflow. It integrates Retrieval-Augmented Generation (RAG) for generating confidence-based, context-aware answers and includes an escalation workflow to efficiently handle complex queries.",
      technologies: ["Python", "RAG", "Azure OpenAI", "Azure LogicApps", "ReactJS"],
      image: "/images/img2.jpg",
      githubLink: "https://github.com",
    },
    {
      title: "DevOps Flow & Microservices Deployment Project",
      description: "Engineered an end-to-end DevOps pipeline featuring a reverse proxy, Terraform for Infrastructure as Code, and Jenkins for CI/CD. This project also deployed a microservices architecture in Azure Container Apps and involved contributions to the Microsoft Codebase, demonstrating scalable and robust cloud deployments.",
      technologies: ["Terraform", "Jenkins", "AWS", "Prometheus", "Grafana"],
      image: "/images/img3.jpg",
      githubLink: "https://github.com",
    },
    {
      title: "MovieList Application",
      description: "Built a simple Movie reccomendation and listing app which uses the TMDB API to fetch movie data and display it in a user-friendly way. The app also includes a search feature to filter movies based on user input.",
      technologies: ["API", "React", "NodeJS", "Tailwind CSS"],
      image: "/images/img5.jpg",
      githubLink: "https://github.com",
    },
    {
      title: "File Sharing App with S3 Integration",
      description: "Developed a file-sharing application that leverages Amazon S3 for storage. The frontend supports multipart uploads and downloads for faster, efficient file transfers while accommodating various file types.",
      technologies: ["AWS", "S3 Bucket", "HTML", "JS"],
      image: "/images/img4.jpg",
      githubLink: "https://github.com",
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-charcoal">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
            Each project represents a different challenge and skill set:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
