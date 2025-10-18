
"use client";
import { useState } from "react";
// import ContactSection from "./components/ContactSection";
import ContactSection from "./components/Contactsection";
import { Mail, Phone, MapPin,Star} from "lucide-react";
import myPhoto from "./assets/myphoto.jpeg";
import instrupic from "./assets/instrupic.jpeg";
import avadhoot from "./assets/avadhoot.jpeg";
import shubha from "./assets/Shubha.jpeg";
import yashwant from "./assets/Yashwant.jpeg";
import sheldon from "./assets/sheldon.jpeg";
import fazal from "./assets/fazal1.jpeg";
import vivek from "./assets/vivek1.jpeg";
// import audioFile from "./assets/audio.mpeg";
// import audioFile from "./assets/audio.mpeg";
import audioFile from "./assets/demo.mp3";
import teaching_kp from "./assets/teaching_kp.mp4";
import t1 from "./assets/t1.mp4";
// import t2 from "./assets/t2.mp4";
import t2 from "./assets/t2.mp4";
import manan_patil from "./assets/manan_patil.mp4";
import krishpriya from "./assets/Krishpriya.mp4";
import yashmit_suvarna from "./assets/yashmit_suvarna.mp4";

import { 
  Music, 
  Play, 
  Guitar, 
  Headphones, 
  BookOpen 
} from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const [audio] = useState(new Audio(audioFile)); // Create an Audio object

  const handlePlayAudio = () => {
    audio.play(); // Play the audio when the button is clicked
  };

  const testimonials = [
    {
      name: "Manan Patil",
      role: "Student",
      videoUrl: manan_patil,
      // thumbnail: "https://images.pexels.com/photos/7095664/pexels-photo-7095664.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      duration: "0:24"
    },
    {
      name: "Krishpriya",
      role: "Student",
      videoUrl: krishpriya,
      // thumbnail: "https://images.pexels.com/photos/8089416/pexels-photo-8089416.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      duration: "0:21"
    },
    {
      name: "Yashmit Suvarna",
      role: "Student",
      videoUrl: yashmit_suvarna,
      // thumbnail: "https://images.pexels.com/photos/6671607/pexels-photo-6671607.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      duration: "0:41"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Music className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">Kartik Pande</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#collaborations" className="text-gray-700 hover:text-indigo-600 transition-colors">Collaborations</a>
              {/* <a href="#portfolio" className="text-gray-700 hover:text-indigo-600 transition-colors">Portfolio</a> */}
              <a href="#teaching" className="text-gray-700 hover:text-indigo-600 transition-colors">Teaching</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <img 
              src={myPhoto}
              alt="Kartik Pande"
              className="w-40 h-40 rounded-full mx-auto mb-8 object-cover border-4 border-white/20 shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
            Kartik Pande
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-gray-200">
            Percussionist • Performer • Creative Musician
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bringing rhythm to life through percussion. From captivating performances on djembe and cajón to inspiring audiences with creativity and energy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={handlePlayAudio} className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Play className="inline-block w-5 h-5 mr-2" />
              Listen to My Work
            </button>
            <a href="#contact" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
            <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My journey in music has been a vibrant exploration of rhythm and creativity. Over the years, I’ve honed my craft in percussion, performing energetic originals and covers that reflect both discipline and improvisation. Each collaboration and performance has shaped my growth, helping me connect with diverse audiences while building a unique musical identity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={instrupic}
                alt="Recording studio"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Musical Excellence & Experience</h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  My journey in music has been defined by rhythm, creativity, and constant growth. Over the years, I’ve developed a strong command of percussion, mastering advanced Spanish techniques and exploring new ways to blend discipline with improvisation. Rather than following a monotonous cycle, I focus on bringing fresh energy and creativity into every performance.                </p>
                <p>
                  I’ve had the privilege of collaborating and performing with some of the finest musicians, including Gulraj Singh, Kishore Pande, Avadhoot Gupte, Yashwant Vaishnav, Kalinath Mishra, Shubha Joshi, and Sheldon Dsouza. These experiences have shaped my artistry, inspiring me to continually evolve and push boundaries in my music.                </p>
                <p>
                  As an artist, I  have embraced rhythm and expression with a unique touch that blends passion and precision. Every performance reflects not only technical mastery but also a deep emotional connection with the audience. My  journey has been shaped by dedication, creativity, and an unshakable commitment to evolving as a musician, making each beat and note a true reflection of his artistry.               </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold">djembe</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">cajón</span>
                <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-semibold">Music Production</span>
                <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">Composition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Features & Skills</h2>
            <p className="text-xl text-gray-600">What sets my music and teaching approach apart</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Guitar className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Percussion Mastery</h3>
              <p className="text-gray-600">
                Skilled in a wide range of percussion instruments, with deep expertise in advanced Spanish techniques. Known for strong rhythm, timing, and improvisation, bringing versatility and energy across diverse genres.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                <Headphones className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Creative Expression</h3>
              <p className="text-gray-600">
                Focused on innovation over repetition, blending discipline with fresh ideas to craft performances that are dynamic, engaging, and memorable.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovative Teaching</h3>
              <p className="text-gray-600">
                Developed unique pedagogical approaches that combine traditional theory with modern digital music creation.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Collaborations */}
      <section id="collaborations" className="py-20 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold mb-4">Notable Collaborations</h2>
      <p className="text-xl text-gray-300">
        Artists and industry professionals I've had the pleasure to work with
      </p>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Row 1 */}
      <div className="text-center group">
        <img
          src={avadhoot}
          alt="Avadhoot Gupte"
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-lg font-bold mb-1">Avadhoot Gupte</h3>
        <p className="text-gray-400 text-sm">Folk-Fusion Pioneer</p>
      </div>
      <div className="text-center group">
        <img
          src={shubha}
          alt="Shubha Joshi"
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-lg font-bold mb-1">Shubha Joshi</h3>
        <p className="text-gray-400 text-sm">Phenomenal Singer</p>
      </div>

      {/* Row 2 */}
      <div className="text-center group">
        <img
          src={vivek}
          alt="Vivek Sonar"
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-lg font-bold mb-1">Vivek Sonar</h3>
        <p className="text-gray-400 text-sm">Talented Musician</p>
      </div>
      <div className="text-center group">
        <img
          src={yashwant}
          alt="Yashwant Vaishnav"
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-lg font-bold mb-1">Yashwant Vaishnav</h3>
        <p className="text-gray-400 text-sm">Exceptional Artist Of Young Generation</p>
      </div>

      {/* Row 3 */}
      <div className="text-center group">
        <img
          src={fazal}
          alt="Fazal Qureshi"
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-lg font-bold mb-1">Fazal Qureshi</h3>
        <p className="text-gray-400 text-sm">Master Percussionist</p>
      </div>
      <div className="text-center group">
        <img
          src={sheldon}
          alt="Sheldon Dsouza"
          className="w-48 h-48 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <h3 className="text-lg font-bold mb-1">Sheldon Dsouza</h3>
        <p className="text-gray-400 text-sm">Determined Musician</p>
      </div>
    </div>
  </div>
</section>
      
      {/* Teaching Outcomes */}
            <section id="teaching" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching Impact & Outcomes</h2>
            <p className="text-xl text-gray-600">Empowering the next generation of musicians</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Teaching Philosophy</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                I believe that every student has a unique musical voice waiting to be discovered. My teaching approach combines technical excellence with creative exploration, ensuring students not only master their instruments but also develop their artistic identity.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Personalized Learning</h4>
                    <p className="text-gray-600">Tailored lessons based on individual goals and learning styles</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Opportunities</h4>
                    <p className="text-gray-600">Regular recitals and collaboration opportunities</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Technology Integration</h4>
                    <p className="text-gray-600">Modern tools and recording techniques in lessons</p>
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="flex justify-center">
            <div className="w-full max-w-xl aspect-video rounded-2xl shadow-xl overflow-hidden">
              <video className="w-full h-full object-cover" controls>
                <source src={t1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <p className="text-gray-600 italic mt-4">
                "Watch my performance at the annual music festival."
              </p> */}
            </div>
            </div>
            {/* <div>
              <img 
                src={teaching}
                alt="Teaching session"
                className="rounded-2xl shadow-xl"
              />
            </div> */}
          </div>

          {/* <div className="lg:col-span-2 mt-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Teaching in Action</h3>
                <div className="w-72 h-[400px] rounded-2xl overflow-hidden shadow-xl">
                  <video 
                     className="object-cover w-full h-full rounded-2xl"
                     controls
                    // poster="https://images.pexels.com/photos/7095037/pexels-photo-7095037.jpeg?auto=compress&cs=tinysrgb&w=800"
                  >
                    <source src={t2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="flex justify-center">
                <div className="w-full max-w-xl aspect-video rounded-2xl shadow-xl overflow-hidden">
                <video className="w-full h-full object-cover" controls>
                <source src={teaching_kp} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
                </div>
                </div>
                
                <p className="text-gray-600 text-center mt-4">
                  Watch how I guide students through advanced music theory and practical application in my studio
                </p>
              </div>
            </div> */}
            <div className="lg:col-span-2 mt-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Teaching in Action
              </h3>
              <div className="flex justify-center gap-8 items-start">
      {/* Vertical video */}
              <div className="w-72 h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <video 
                className="object-cover w-full h-full rounded-2xl"
                controls
          // poster="https://images.pexels.com/photos/7095037/pexels-photo-7095037.jpeg?auto=compress&cs=tinysrgb&w=800"
                >
                  <source src={t2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
      {/* Horizontal (aspect-video) video */}
      {/* <div className="w-full max-w-xl aspect-video rounded-2xl shadow-xl overflow-hidden">
        <video className="w-full h-full object-cover" controls>
          <source src={teaching_kp} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
    <p className="text-gray-600 text-center mt-4">
      Watch how I guide students through advanced music theory and practical application in my studio
    </p>
  </div>
</div>

        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Student <span className="text-indigo-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our students about their musical journey and experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative">
                  <video 
                    className="w-full h-96 object-cover object-top cursor-pointer group-hover:scale-105 transition-transform duration-300"
                    // poster={testimonial.thumbnail}
                    controls
                    preload="metadata"
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {testimonial.duration}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none"></div>
                </div>
                <div className="p-6">
                  <div className="flex space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Play className="h-3 w-3" />
                        <span>Video Testimonial</span>
                      </span>
                      <span>{testimonial.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
     <section id="contact" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
      <p className="text-xl text-gray-600">Ready to collaborate or start your musical journey?</p>
    </div>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <Mail className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-gray-600">kartik260405@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <Phone className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <p className="text-gray-600">+91 7208771937</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Studio Location</h4>
              <p className="text-gray-600">102,S3, Moraj Riverside Park<br />Panvel, 410206</p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl">
          <h4 className="font-bold text-gray-900 mb-3">Services Available:</h4>
          <ul className="space-y-2 text-gray-600">
            <li>• Private Music Lessons</li>
            <li>• Online Music Lessons</li>
            <li>• Group Music Classes</li>
            <li>• Music Composition & Arrangement</li>
            <li>• Theory & Exam Preparation</li>
          </ul>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <ContactSection />
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-500">
              © 2025 Kartik Pande. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;