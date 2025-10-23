import { type JSX } from 'react'
import selfie2 from '../images/selfie2.png';

export default function About(): JSX.Element {
  return (
    <div className="min-h-screen pt-24 px-4">
      <div className="max-w-4xl mx-auto shadow-xl p-6 rounded-md bg-white">
        <h1 className="text-4xl font-bold text-center mb-8">About Myself</h1>
        <img src={selfie2} alt="About Me" className="w-1/5 h-auto rounded-full mb-6 mx-auto" />
        <p className="text-lg text-gray-600 text-center px-8">
          My name is Mitchell Vieira, and I was born and raised just outside of the GTA (Greater Toronto Area), in a city of approximately 150,000 residents. 
          I attended Carleton University from 2017 to 2019, where I pursued a degree in Commerce before having to step away due to medical reasons. 
          Since then, I have gained experience in the retail sector and spent three years with Just Junk, a local waste management company. In this role, 
          I worked directly with customers, delivering prompt and courteous service.
        </p>
        <br />
        <p className="text-lg text-gray-600 text-center px-8">
        For over 3 years, I have immersed myself in web development through self-guided learning and structured online courses. 
        I’ve completed 100s of hours of coursework, over 1600 lessons, and a multitude of solo projects as part of Scrimba's "Frontend Career Path". 
        Alongside that, I have also followed along with a multitude of YouTube crash courses revolving around the MERN stack. 
        I am proficient in JavaScript, Typescript, React, NodeJS, Express, CSS (Tailwind Included), HTML, Git and am currently delving into the worlds of AWS, AI and Python.
        </p>
        <br />
        <p className="text-lg text-gray-600 text-center px-8">
        In addition to coding, I am passionate about my dogs, gaming, MMA, basketball, and football.
        </p>
      </div>
    </div>
  )
}