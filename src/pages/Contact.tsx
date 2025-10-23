import { type JSX, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact(): JSX.Element {
  const [sent, setSent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    
    setIsLoading(true)
    
    emailjs.sendForm(
      'service_9sn8rem',
      'template_yw2f39j',
      formRef.current,
      'oSA5rsgKjM2FLo_K2'
    ).then(
      () => {
        setSent(true)
        setIsLoading(false)
        formRef.current && formRef.current.reset()
        setTimeout(() => setSent(false), 3500)
      },
      (error: any) => {
        console.log(error.text)
        setIsLoading(false)
      }
    )
  }

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "mitchvwebsolutions@gmail.com",
      description: "Send me an email anytime"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/mitchell-vieira-894442151/",
      description: "Connect with me professionally"
    },
    {
      icon: "🐱",
      title: "GitHub",
      value: "https://github.com/PorkyPorkensen",
      description: "Check out my code"
    }
  ]

  return (
    <div className="min-h-screen pt-24 px-4 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="bg-white shadow-2xl rounded-2xl p-8 mb-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Let's Work Together
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your project to life? I'd love to hear about your ideas and discuss how we can make them happen.
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Whether you need a new website, API integration, or backend development, I'm here to help create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-full">
          
          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-6 lg:p-8 w-full">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="text-2xl mr-3">✉️</span>
              Send Me a Message
            </h2>
            
            {sent && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 rounded-lg">
                <p className="text-green-800 font-medium flex items-center">
                  <span className="mr-2">✅</span>
                  Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="user_name"
                  name="user_name"
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="user_email"
                  name="user_email"
                  required
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Methods */}
          <div className="space-y-8 w-full">
            
            {/* Contact Methods */}
            <div className="bg-white shadow-xl rounded-2xl p-6 lg:p-8 w-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="text-2xl mr-3">📞</span>
                Other Ways to Reach Me
              </h2>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="text-2xl">{method.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{method.title}</h3>
                      {method.title === "Email" ? (
                        <p className="text-blue-600 font-medium">{method.value}</p>
                      ) : (
                        <a 
                          href={method.value} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 font-medium hover:text-blue-800 hover:underline transition-colors duration-200"
                        >
                          {method.title === "LinkedIn" ? "linkedin.com/in/mitchell-vieira" : "github.com/PorkyPorkensen"}
                        </a>
                      )}
                      <p className="text-sm text-gray-500">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl rounded-2xl p-6 lg:p-8 text-white w-full">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">⚡</span>
                Quick Response
              </h2>
              <p className="mb-4 opacity-90">
                I typically respond to messages within 24 hours. For urgent inquiries, feel free to reach out directly via email.
              </p>
              <div className="space-y-2 text-sm opacity-80">
                <p>🕐 Response time: Within 24 hours</p>
                <p>🌍 Time zone: EST (UTC-5)</p>
                <p>💬 Preferred contact: Email or contact form</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}