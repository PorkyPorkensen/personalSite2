import { type JSX } from 'react'
import selfie2 from '../images/selfie2.png';

export default function About(): JSX.Element {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "AWS", "Express", 
    "CSS", "Tailwind CSS", "HTML", "Google Cloud", "Git", "AWS", "Python"
  ];

  const interests = [
    "🐕 Dogs", "🎮 Gaming", "🥊 MMA", "🏀 Basketball", "🏈 Football"
  ];

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 mb-8">
          <div className="text-center">
            <div className="relative inline-block mb-6">
              <img 
                src={selfie2} 
                alt="Mitchell Vieira" 
                className="w-32 h-32 rounded-full mx-auto border-4 border-blue-100 shadow-lg" 
              />
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                👋
              </div>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              About Mitchell
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Full-Stack Developer passionate about creating impactful web experiences
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-2xl mr-3">📖</span>
            My Story
          </h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              My name is Mitchell Vieira, and I was born and raised just outside of the GTA (Greater Toronto Area), in a city of approximately 150,000 residents. 
              I attended Carleton University from 2017 to 2019, where I pursued a degree in Commerce before having to step away due to medical reasons. 
              Since then, I have gained experience in the retail sector and spent three years with Just Junk, a local waste management company, 
              working directly with customers and delivering prompt, courteous service.
            </p>
            <p>
              For over 3 years, I have immersed myself in web development through self-guided learning and structured online courses. 
              I've completed hundreds of hours of coursework, over 1600 lessons, and a multitude of solo projects as part of Scrimba's "Frontend Career Path". 
              I've also followed numerous YouTube crash courses focusing on the MERN stack.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-2xl mr-3">⚡</span>
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-center font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                {skill}
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-4 text-center italic">
            Currently exploring AI and expanding my Python knowledge
          </p>
        </div>

        {/* Interests Section */}
        <div className="bg-white shadow-xl rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-2xl mr-3">🎯</span>
            When I'm Not Coding
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-full text-lg font-medium text-gray-700 transition-colors duration-200"
              >
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}