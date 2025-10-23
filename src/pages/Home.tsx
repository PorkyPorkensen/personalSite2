import { type JSX } from "react";
import { Link } from "react-router-dom";

export default function Home(): JSX.Element {
  const frontendStack = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Responsive Design", "UI/UX Design"
  ];

  const backendStack = [
    "Node.js", "Express.js", "REST APIs", "Firebase", 
    "MongoDB", "Git", "AWS", "Database Design"
  ];

  const services = [
    {
      icon: "🌐",
      title: "Website Development",
      description: "Custom responsive websites built with modern technologies and best practices.",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Modern UI/UX"]
    },
    {
      icon: "🔗",
      title: "API Integration",
      description: "Seamless integration with third-party services and custom API development.",
      features: ["RESTful APIs", "Third-party Services", "Data Processing", "Real-time Updates"]
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and security.",
      features: ["Server Architecture", "Database Design", "Authentication", "Cloud Deployment"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero/Intro Section */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 mb-8 text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Hi, I'm Mitchell
          </h1>
          <p className="text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer specializing in modern web applications
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto leading-relaxed">
            I create responsive, user-friendly websites and robust backend solutions using cutting-edge technologies. 
            With over 3 years of self-guided learning and hands-on project experience, I bring both technical expertise 
            and creative problem-solving to every project.
          </p>
        </div>

        {/* Tech Stacks Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Frontend Stack */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-3">🎨</span>
              Frontend Skills
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {frontendStack.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-center font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Backend Stack */}
          <div className="bg-white shadow-xl rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-3">🔧</span>
              Backend Skills
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {backendStack.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-full text-center font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center">
            <span className="text-3xl mr-3">💼</span>
            Services I Offer
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-200 hover:bg-gray-100"
              >
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="text-sm text-gray-500 flex items-center"
                    >
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl rounded-2xl p-8 text-center text-white mb-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-6 opacity-90">
            Let's discuss how I can help bring your ideas to life
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}