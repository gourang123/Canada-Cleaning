import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, PhoneCall, Mail, MapPin, Clock, ChevronDown, CheckCircle2, 
  Star, Leaf, ThumbsUp, Droplets, Building2, Home, Sofa, Brush, 
  MessageCircle, Sparkles, ShieldCheck, ArrowRight, Instagram, Facebook, Twitter, Moon, Sun, ArrowUp
} from 'lucide-react';

const SERVICES = [
  { id: 1, title: 'Residential Cleaning', icon: Home, desc: 'Complete home cleaning services tailored to your lifestyle. Kitchens, bathrooms, dusting, and floors.' },
  { id: 2, title: 'Commercial Cleaning', icon: Building2, desc: 'Maintain a pristine professional environment. Office spaces, retail stores, and corporate facilities.' },
  { id: 3, title: 'Deep Cleaning', icon: Sparkles, desc: 'Intensive top-to-bottom cleaning targeting hidden grime, baseboards, and hard-to-reach areas.' },
  { id: 4, title: 'Move-In / Move-Out', icon: ArrowRight, desc: 'Ensure you leave or enter a spotless space. Comprehensive sanitization for smooth transitions.' },
  { id: 5, title: 'Post-Construction', icon: Brush, desc: 'Specialized dust removal and detailing after renovations or new builds.' },
  { id: 6, title: 'Carpet & Upholstery', icon: Sofa, desc: 'Deep stain removal and fabric refreshing using advanced steam cleaning technology.' },
];

const STATS = [
  { number: '1000+', label: 'Homes Cleaned' },
  { number: '500+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '98%', label: 'Customer Satisfaction' },
];

const PROCESS_STEPS = [
  { step: '01', title: 'Request a Quote', desc: 'Fill out our quick online form or call us to get a transparent, no-obligation estimate.' },
  { step: '02', title: 'Schedule Service', desc: 'Choose a date and time that fits your busy schedule. We offer flexible booking options.' },
  { step: '03', title: 'Professional Cleaning', desc: 'Our vetted, trained experts arrive on time and transform your space using eco-friendly products.' },
  { step: '04', title: 'Enjoy a Spotless Space', desc: 'Relax and enjoy your pristine environment, backed by our 100% satisfaction guarantee.' },
];

const TESTIMONIALS = [
  { name: 'Sarah Jenkins', role: 'Homeowner', text: 'Canada Cleaning completely transformed my house! Their attention to detail is unmatched, and I love that they use eco-friendly products.', rating: 5, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150' },
  { name: 'David Chen', role: 'Office Manager', text: 'We hired them for our commercial space and the difference is night and day. Reliable, professional, and discreet.', rating: 5, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
  { name: 'Emily Thompson', role: 'Real Estate Agent', text: 'I use Canada Cleaning for all my move-in/move-out properties. They are my secret weapon for making homes look their absolute best.', rating: 5, image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150' },
];

const FAQS = [
  { question: 'Do I need to be home during the cleaning?', answer: 'No, you do not need to be home. Many of our clients provide us with a spare key or garage code. We are fully insured and bonded for your peace of mind.' },
  { question: 'Are your cleaning products safe for pets and children?', answer: 'Absolutely! We prioritize eco-friendly, non-toxic cleaning products that are tough on dirt but completely safe for your family and furry friends.' },
  { question: 'What is included in a standard cleaning?', answer: 'A standard cleaning includes dusting all surfaces, vacuuming and mopping floors, cleaning and sanitizing bathrooms, and wiping down kitchen counters and appliance exteriors.' },
  { question: 'Do you bring your own supplies?', answer: 'Yes, our team arrives fully equipped with all necessary cleaning supplies and state-of-the-art equipment.' },
  { question: 'What if I am not satisfied with the service?', answer: 'We offer a 100% Satisfaction Guarantee. If you are not happy with any area we cleaned, let us know within 24 hours, and we will re-clean it for free.' },
];

const GALLERY = [
  { 
    beforeImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=1200', // Pre-cleaning (same kitchen)
    afterImage: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&q=80&w=1200',  // Post-cleaning
    label: 'Kitchen Detailing' 
  },
  { 
    beforeImage: 'https://images.unsplash.com/photo-1583847268964-b28e50b7ef40?auto=format&fit=crop&q=80&w=1200', // Cluttered space
    afterImage: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',  // Cleaned space
    label: 'Living Space Refresh' 
  },
  { 
    beforeImage: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&q=80&w=1200', // Messy office desk
    afterImage: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',  // Sanitized office desk
    label: 'Commercial Desk Sanitization' 
  },
];

const BeforeAfterSlider = ({ beforeImage, afterImage, label }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const x = clientX - rect.left;
    const newPosition = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setPosition(newPosition);
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-80 md:h-[400px] w-full rounded-2xl overflow-hidden cursor-ew-resize group shadow-xl touch-none select-none border border-slate-200 dark:border-slate-700"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      {/* Background Image (After - Clean) */}
      <img 
        src={afterImage} 
        alt={`${label} After`} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        draggable="false" 
      />
      <div className="absolute top-4 right-4 bg-emerald-500/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold z-0 shadow-lg uppercase tracking-wider">
        After
      </div>

      {/* Foreground Image (Before - Dirty) with precise clip-path */}
      <img 
        src={beforeImage} 
        alt={`${label} Before`} 
        className="absolute inset-0 w-full h-full object-cover z-10 pointer-events-none" 
        style={{ 
          clipPath: `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`
        }}
        draggable="false"
      />
      <div 
        className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-xs font-bold z-20 shadow-lg uppercase tracking-wider transition-opacity duration-200"
        style={{ opacity: position > 15 ? 1 : 0 }}
      >
        Before
      </div>

      {/* Premium Slider Line & Custom SVG Handle */}
      <div 
        className="absolute inset-y-0 w-1 bg-white z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-[0_0_15px_rgba(0,0,0,0.4)] flex items-center justify-center border border-slate-100 transition-transform group-hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
            <path d="m10 17-5-5 5-5"/>
            <path d="m14 17 5-5-5-5"/>
          </svg>
        </div>
      </div>

      {/* Bottom Label Overlay */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 z-30 pointer-events-none">
        <h4 className="text-white text-xl font-bold drop-shadow-lg">{label}</h4>
      </div>
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll for sticky nav and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`font-sans min-h-screen w-full overflow-x-hidden transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? (darkMode ? 'bg-slate-900/95 shadow-md backdrop-blur-sm border-b border-slate-800' : 'bg-white/95 shadow-md backdrop-blur-sm border-b border-slate-100') : 'bg-transparent border-b border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => scrollToSection('home')}>
              <Sparkles className="h-8 w-8 text-emerald-500 mr-2 transition-transform group-hover:scale-110" />
              <span className={`font-bold text-2xl tracking-tight transition-colors ${isScrolled ? (darkMode ? 'text-white' : 'text-slate-900') : 'text-white'}`}>
                Canada <span className="text-emerald-500">Cleaning</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {['Services', 'About', 'Process', 'Testimonials', 'FAQ'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-semibold tracking-wide transition-colors hover:text-emerald-500 ${isScrolled ? (darkMode ? 'text-slate-300' : 'text-slate-600') : 'text-slate-200'}`}
                >
                  {item}
                </button>
              ))}
              
              <div className="flex items-center space-x-4 pl-4 border-l border-slate-400/30">
                <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full transition-all ${isScrolled ? (darkMode ? 'hover:bg-slate-800 text-slate-300' : 'hover:bg-slate-100 text-slate-600') : 'hover:bg-white/20 text-white'}`}>
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5"
                >
                  Get a Quote
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2 sm:space-x-4">
               <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full transition-colors ${isScrolled ? (darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-600 hover:bg-slate-100') : 'text-white hover:bg-white/20'}`}>
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${isScrolled ? (darkMode ? 'text-slate-300 hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-100') : 'text-white hover:bg-white/20'}`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden absolute top-20 left-0 w-full transition-all duration-300 ease-in-out origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'} ${darkMode ? 'bg-slate-900 border-b border-slate-800 shadow-2xl shadow-black/50' : 'bg-white border-b border-slate-100 shadow-2xl shadow-slate-900/10'}`}>
          <div className="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            {['Services', 'About', 'Process', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-3.5 text-base font-semibold transition-colors rounded-xl ${darkMode ? 'text-slate-300 hover:bg-slate-800 hover:text-emerald-400' : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-600'}`}
              >
                {item}
              </button>
            ))}
            <div className="pt-4 pb-2 px-2">
               <button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-lg shadow-emerald-500/30 flex justify-center items-center text-lg"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center min-h-[100svh] pt-28 pb-32 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80" 
            alt="Professional Cleaning" 
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${darkMode ? 'from-slate-900/95 via-slate-900/80 to-slate-900/95' : 'from-blue-950/90 via-blue-900/70 to-blue-900/90'}`}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full flex-grow flex flex-col items-center justify-center">
          <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-white/10 text-emerald-300 font-bold tracking-widest text-xs sm:text-sm mb-6 border border-white/20 backdrop-blur-md shadow-sm">
            <Sparkles className="w-4 h-4 mr-2" />
            TOP RATED IN CANADA
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight md:leading-[1.1] mb-6 drop-shadow-xl tracking-tight">
            Professional Cleaning Services <br className="hidden md:block" />
            <span className="text-emerald-400">You Can Trust</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-200 mb-10 drop-shadow-md px-2">
            We provide top-tier residential and commercial cleaning solutions. Reclaim your time and let our experienced team handle the mess.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full max-w-md mx-auto sm:max-w-none px-4 sm:px-0">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-lg shadow-emerald-500/30 flex items-center justify-center group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-full font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center">
              <PhoneCall className="mr-2 w-5 h-5" />
              1-800-CLEAN
            </button>
          </div>
        </div>
      </section>

      {/* Trust Badges - Pulled up over the hero section */}
      <div className="relative z-20 -mt-20 md:-mt-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-0">
        <div className={`${darkMode ? 'bg-slate-800/95 border-slate-700 shadow-2xl shadow-black/50' : 'bg-white/95 border-white shadow-2xl shadow-blue-900/10'} backdrop-blur-xl rounded-2xl border p-6 md:p-8 grid grid-cols-2 gap-y-8 gap-x-4 md:grid-cols-4 md:gap-y-0 md:divide-x ${darkMode ? 'divide-slate-700' : 'divide-slate-100'}`}>
          {[
            { icon: ShieldCheck, text: 'Fully Insured' },
            { icon: Star, text: '5-Star Rated' },
            { icon: Leaf, text: 'Eco-Friendly' },
            { icon: ThumbsUp, text: '100% Guaranteed' }
          ].map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center px-2 group text-center">
              <div className={`p-3.5 rounded-2xl mb-4 transition-colors duration-300 ${darkMode ? 'bg-slate-700 group-hover:bg-slate-600' : 'bg-emerald-50 group-hover:bg-emerald-100'}`}>
                <badge.icon className="h-7 w-7 sm:h-8 sm:w-8 text-emerald-500 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className={`font-semibold text-sm sm:text-base ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className={`pt-20 pb-16 md:pt-32 md:pb-24 ${darkMode ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-500 font-semibold tracking-wide uppercase mb-2">Our Services</h2>
            <h3 className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Cleaning Solutions for Every Need</h3>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>From cozy apartments to large corporate offices, our specialized teams are equipped to handle any cleaning challenge with precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className={`group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${darkMode ? 'bg-slate-800 hover:bg-slate-750 border border-slate-700' : 'bg-white hover:shadow-xl border border-slate-100'}`}
              >
                <div className="h-14 w-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{service.title}</h4>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-6 leading-relaxed`}>{service.desc}</p>
                <button className="flex items-center text-emerald-500 font-semibold group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-16 md:py-20 ${darkMode ? 'bg-slate-800' : 'bg-blue-600'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
            {[
              { icon: ShieldCheck, title: 'Experienced Team', desc: 'Vetted, trained, and highly professional cleaning staff.' },
              { icon: Leaf, title: 'Eco-Friendly Products', desc: 'Safe for your family, pets, and the environment.' },
              { icon: Clock, title: 'Reliable Service', desc: 'We show up on time and deliver consistent results.' },
              { icon: ThumbsUp, title: 'Satisfaction Guaranteed', desc: 'Not happy? We will re-clean it at no extra cost.' },
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="h-20 w-20 rounded-full bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                  <feature.icon className="h-10 w-10 text-emerald-400" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-blue-100">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 md:py-32 ${darkMode ? 'bg-slate-900' : 'bg-white'} overflow-hidden relative`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left: Premium Overlapping Images */}
            <div className="lg:w-1/2 relative w-full max-w-md mx-auto lg:max-w-none px-4 sm:px-0">
              {/* Decorative Background Glow (Subtle) */}
              <div className="absolute top-1/4 -left-12 w-64 h-64 bg-emerald-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 dark:opacity-10 pointer-events-none"></div>
              <div className="absolute bottom-1/4 -right-12 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 dark:opacity-10 pointer-events-none"></div>
              
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800 group">
                <img 
                  src="https://images.unsplash.com/photo-1584820927508-cade280eb4cb?auto=format&fit=crop&q=80" 
                  alt="Professional Cleaning Team" 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Experience Badge - Now responsive and visible on all screens */}
              <div className={`absolute -bottom-8 -right-2 sm:-right-8 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-white'} p-4 sm:p-6 rounded-2xl shadow-xl border-4 z-20 flex items-center gap-4 hover:-translate-y-2 transition-transform duration-300`}>
                <div className="h-12 w-12 sm:h-14 sm:w-14 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Star className="text-white h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" />
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-none mb-1">5+</p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Years Exp.</p>
                </div>
              </div>
            </div>
            
            {/* Right: Content & Stats */}
            <div className="lg:w-1/2 relative z-10 pt-8 sm:pt-0">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-full font-semibold tracking-wide uppercase text-sm mb-6 border border-emerald-100 dark:border-emerald-800/50 shadow-sm">
                <Sparkles size={16} className="animate-pulse" />
                <span>About Our Company</span>
              </div>
              
              <h3 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'} mb-6 leading-[1.15] tracking-tight`}>
                Setting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-blue-500">Gold Standard</span> in Cleanliness
              </h3>
              
              <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-8 leading-relaxed`}>
                Founded with a mission to bring unparalleled hygiene to homes and businesses across Canada, we are more than just a cleaning service. We are your dedicated partners in maintaining a healthy, productive, and beautiful environment.
              </p>
              
              {/* Premium Checklist for higher conversion scannability */}
              <ul className="space-y-4 mb-10">
                {[
                  'Rigorously trained & background-checked staff',
                  '100% eco-friendly, family-safe cleaning products',
                  'Customized cleaning plans to fit your lifestyle',
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mt-0.5 mr-4 border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <span className={`text-base md:text-lg font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{item}</span>
                  </li>
                ))}
              </ul>
              
              {/* Minimalist Stats Grid */}
              <div className={`pt-8 border-t ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
                  {STATS.map((stat, idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-1 tracking-tight">{stat.number}</span>
                      <span className={`text-xs md:text-sm font-bold uppercase tracking-wider ${darkMode ? 'text-emerald-400' : 'text-emerald-600'}`}>{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className={`py-16 md:py-24 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-500 font-semibold tracking-wide uppercase mb-2">How It Works</h2>
            <h3 className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>A Simple 4-Step Process</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-emerald-500/30 z-0"></div>

            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-emerald-500 text-white flex items-center justify-center text-3xl font-bold shadow-lg shadow-emerald-500/40 mb-6 border-4 border-white dark:border-slate-800">
                  {step.step}
                </div>
                <h4 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{step.title}</h4>
                <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Gallery */}
      <section className={`py-16 md:py-24 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-500 font-semibold tracking-wide uppercase mb-2">Our Work</h2>
            <h3 className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Before & After Results</h3>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Interact with the sliders below to reveal the stunning transformations achieved by our professional cleaning teams.</p>
          </div>

          {}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {GALLERY.map((item, idx) => (
              <BeforeAfterSlider 
                key={idx} 
                beforeImage={item.beforeImage} 
                afterImage={item.afterImage} 
                label={item.label} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={`py-16 md:py-24 ${darkMode ? 'bg-slate-800' : 'bg-blue-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-500 font-semibold tracking-wide uppercase mb-2">Testimonials</h2>
            <h3 className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>What Our Clients Say</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <div key={idx} className={`p-8 rounded-2xl shadow-sm border ${darkMode ? 'bg-slate-900 border-slate-700' : 'bg-white border-slate-100'} relative`}>
                <div className="flex text-amber-400 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <p className={`text-lg italic mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                  <div>
                    <h5 className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{testimonial.name}</h5>
                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{testimonial.role}</p>
                  </div>
                </div>
                <MessageCircle className={`absolute top-8 right-8 h-12 w-12 opacity-10 ${darkMode ? 'text-white' : 'text-slate-900'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className={`py-16 md:py-20 ${darkMode ? 'bg-slate-900' : 'bg-white'} border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 w-full">
            <h2 className="text-emerald-500 font-semibold tracking-wide uppercase mb-2">Service Coverage</h2>
            <h3 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-6`}>Areas We Proudly Serve</h3>
            <p className={`text-base md:text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'} mb-8`}>
              We provide professional cleaning services across major metropolitan areas and surrounding suburbs. Check our map or contact us to see if we cover your specific location.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Toronto, ON', 'Vancouver, BC', 'Montreal, QC', 'Calgary, AB', 'Ottawa, ON', 'Edmonton, AB', 'Winnipeg, MB', 'Halifax, NS'].map((city, idx) => (
                <li key={idx} className={`flex items-center text-sm md:text-base ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  <MapPin className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                  {city}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 w-full h-64 md:h-80 bg-slate-200 rounded-2xl overflow-hidden relative shadow-lg mt-8 md:mt-0">
             {/* Simulated Map Background */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
              alt="Map" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-3">
                <MapPin className="h-8 w-8 text-emerald-500" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">Canada Wide Coverage</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Expanding rapidly</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className={`py-16 md:py-24 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-500 font-semibold tracking-wide uppercase mb-2">Common Questions</h2>
            <h3 className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Frequently Asked Questions</h3>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx} 
                className={`rounded-xl border ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'} overflow-hidden transition-all duration-200`}
              >
                <button 
                  className={`w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none ${darkMode ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-50'}`}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-semibold text-lg pr-8">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-emerald-500 transform transition-transform duration-300 flex-shrink-0 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-48 py-5 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-16 md:py-24 ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-500 font-semibold tracking-wide uppercase mb-2">Get in Touch</h2>
            <h3 className={`text-3xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} mb-4`}>Ready for a cleaner space?</h3>
            <p className={`text-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Contact our dedicated team today to discuss your cleaning needs and get a customized quote.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Phone Card */}
            <div className={`flex flex-col items-center text-center p-8 rounded-2xl border transition-transform hover:-translate-y-2 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'}`}>
              <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
                <PhoneCall className="h-8 w-8 text-emerald-500" />
              </div>
              <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Phone</h4>
              <p className={`text-lg font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>1-800-CLEAN-NOW</p>
              <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Call us for immediate assistance</p>
            </div>

            {/* Email Card */}
            <div className={`flex flex-col items-center text-center p-8 rounded-2xl border transition-transform hover:-translate-y-2 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'}`}>
              <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-emerald-500" />
              </div>
              <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Email</h4>
              <p className={`text-lg font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>hello@canadacleaning.ca</p>
              <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>We'll reply within 24 hours</p>
            </div>

            {/* Hours Card */}
            <div className={`flex flex-col items-center text-center p-8 rounded-2xl border transition-transform hover:-translate-y-2 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100 shadow-xl shadow-slate-200/50'}`}>
              <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-emerald-500" />
              </div>
              <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Business Hours</h4>
              <p className={`text-base font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className={`text-base font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Sat: 9:00 AM - 2:00 PM</p>
              <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`${darkMode ? 'bg-black border-t border-slate-800' : 'bg-slate-900'} text-slate-300 py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div>
              <div className="flex items-center mb-6">
                <Sparkles className="h-8 w-8 text-emerald-500 mr-2" />
                <span className="font-bold text-2xl tracking-tight text-white">
                  Canada <span className="text-emerald-500">Cleaning</span>
                </span>
              </div>
              <p className="mb-6 text-slate-400 leading-relaxed">
                Premium residential and commercial cleaning services across Canada. Trusted, reliable, and eco-friendly.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'About Us', 'Our Process', 'Testimonials', 'Contact'].map((link) => (
                  <li key={link}>
                     <button onClick={() => scrollToSection(link === 'Home' ? 'home' : link.toLowerCase().replace(' ', '-'))} className="hover:text-emerald-400 transition-colors">{link}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {SERVICES.map((service) => (
                  <li key={service.id}>
                    <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors">{service.title}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Accessibility</a></li>
              </ul>
            </div>
          </div>

          <div className={`pt-8 border-t ${darkMode ? 'border-slate-800' : 'border-slate-800'} text-center md:flex md:justify-between items-center text-slate-500`}>
            <p>&copy; {new Date().getFullYear()} Canada Cleaning. All rights reserved.</p>
            <p className="mt-4 md:mt-0">Designed for perfection.</p>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-40">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`h-12 w-12 rounded-full shadow-lg flex items-center justify-center transition-all ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'} ${darkMode ? 'bg-slate-800 text-emerald-400 hover:bg-slate-700' : 'bg-white text-emerald-500 hover:bg-slate-50'}`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>

        <a 
          href="https://wa.me/1234567890" 
          target="_blank"
          rel="noreferrer"
          className="h-14 w-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl shadow-green-500/30 flex items-center justify-center transition-transform hover:-translate-y-1"
          aria-label="Contact on WhatsApp"
        >
          {/* Custom minimal WhatsApp-like Icon since it's not in standard Lucide */}
          <MessageCircle size={28} />
        </a>
      </div>

    </div>
  );
}