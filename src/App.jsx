import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, MonitorSmartphone, ShoppingCart, Rocket, Code, Store, Menu, X, Facebook, Instagram, Mail, MessageCircle, ExternalLink } from 'lucide-react'
import './App.css'
import logoWedit from './assets/logo-wedit.png'
import simamCeo from './assets/simam-ceo.png'
import nobrandMockup from './assets/nobrand-mockup.png'
import curatedTableMockup from './assets/curated-table-mockup.png'
import atelierMockup from './assets/atelier-mockup.png'
import stickerbookMockup from './assets/stickerbook-mockup.png'

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    service: 'Business Website',
    goal: ''
  });

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `Hi Wedit! I'm ${formData.name}. I'm interested in a ${formData.service} and my goal is: ${formData.goal}`;
    const whatsappUrl = `https://wa.me/94768677576?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsBookingModalOpen(false);
  };
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app-container">
      {/* Background Elements */}
      <div className="bg-shape blob-1"></div>
      <div className="bg-shape blob-2"></div>
      
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'glass nav-scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="nav-brand">
            <img src={logoWedit} alt="Wedit Logo" className="nav-logo" />
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#consultation" className="btn btn-primary">Book Consultation</a>
          </div>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-menu glass"
            >
              <div className="mobile-links">
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a>
                <a href="https://wa.me/94768677576" className="btn btn-primary" onClick={() => setIsMenuOpen(false)}>Start a Project</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text-wrapper"
          >
            <h1 className="hero-title">
              Build a stunning <br/>
              <span className="text-gradient">Portfolio or Business</span> <br/>
              Website with Wedit
            </h1>
            
            <p className="hero-subtitle">
              Turn your skills into opportunities. Get your business online, boost your sales, and build a strong online presence affordably.
            </p>
            
            <div className="hero-cta">
              <a href="https://wa.me/94768677576" className="btn btn-primary btn-large">
                Start Your Digital Journey
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image-wrapper"
          >
            <div className="ceo-card-wrapper">
              <div className="ceo-card-premium">
                <h4 className="ceo-card-heading">Book a free 30-minute <br/> consultation to get started!</h4>
                
                <div className="ceo-photo-container">
                  <img src={simamCeo} alt="Mohamed Simam Lafeer" className="ceo-photo" />
                  <div className="ceo-badge">CEO</div>
                </div>
                
                <div className="ceo-info">
                  <h3 className="ceo-name">Mohamed Simam Lafeer</h3>
                  <p className="ceo-title">The Founder & CEO of Wedit</p>
                </div>

                <div className="ceo-actions">
                  <button onClick={() => setIsBookingModalOpen(true)} className="btn btn-consultation-hero">
                    Book a free consultation →
                  </button>
                  <p className="message-subtext-hero">or <a href="mailto:wedit2026@gmail.com">leave us a message</a></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our <span className="text-gradient">Solutions</span>
          </motion.h2>

          <div className="services-grid">
            {/* Service 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="service-card glass"
            >
              <div className="service-icon"><Code /></div>
              <h3>Personal Portfolio</h3>
              <p>Modern, clean, and mobile-friendly designs for students and professionals.</p>
              <ul className="service-features">
                <li><CheckCircle2 size={16} /> FREE hosting included</li>
                <li><CheckCircle2 size={16} /> Easy updates & support</li>
                <li><CheckCircle2 size={16} /> Fast delivery</li>
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="service-card glass"
            >
              <div className="service-icon"><ShoppingCart /></div>
              <h3>Online website with WhatsApp Order System</h3>
              <p>Simple & fast selling solutions directly through your business WhatsApp.</p>
              <ul className="service-features">
                <li><CheckCircle2 size={16} /> Instant notifications</li>
                <li><CheckCircle2 size={16} /> User-friendly interface</li>
                <li><CheckCircle2 size={16} /> High conversion rate</li>
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="service-card glass feature-card"
            >
              <div className="service-icon"><Store /></div>
              <h3>Full E-commerce System</h3>
              <p>Robust online stores with payments, cart, and automated order management.</p>
              <ul className="service-features">
                <li><CheckCircle2 size={16} /> Secure payments</li>
                <li><CheckCircle2 size={16} /> Inventory management</li>
                <li><CheckCircle2 size={16} /> Analytics dashboard</li>
              </ul>
            </motion.div>

            {/* Service 4 */}
            <motion.div 
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="service-card glass"
            >
              <div className="service-icon"><MonitorSmartphone /></div>
              <h3>Website + Mobile App</h3>
              <p>Combined solutions for businesses requiring a multi-platform digital presence.</p>
              <ul className="service-features">
                <li><CheckCircle2 size={16} /> Cross-platform sync</li>
                <li><CheckCircle2 size={16} /> Professional look & feel</li>
                <li><CheckCircle2 size={16} /> 24/7 maintenance support</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-wedit glass">
        <div className="container">
          <div className="why-grid">
            <div className="why-header">
              <h2 className="why-tagline text-gradient">Gearing up your business for the digital world.</h2>
            </div>
            <div className="why-items">
              {[
                { icon: <MonitorSmartphone />, text: "Show your business to the world" },
                { icon: <Store />, text: "Increase customer reach 24/7" },
                { icon: <Rocket />, text: "Build strong online presence" },
                { icon: <ShoppingCart />, text: "Boost sales with smart web solutions" },
                { icon: <CheckCircle2 />, text: "Professional & trusted look" }
              ].map((item, i) => (
                <div key={i} className="why-item">
                  <div className="why-icon glass">{item.icon}</div>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio / Our Creations Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
          >
            <h2 className="section-title center">
              Our <span className="text-gradient">Creations</span>
            </h2>
            <p className="section-subtitle center">Real websites we've built — click to explore them live.</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="portfolio-grid"
          >
            {[
              {
                title: 'NO BRAND',
                type: 'Fashion Brand',
                desc: 'Minimalist luxury streetwear brand with a sculptural editorial aesthetic.',
                image: nobrandMockup,
                url: 'https://nobarnd.netlify.app',
                tag: 'Business Website'
              },
              {
                title: 'The Curated Table',
                type: 'Fine Dining',
                desc: 'Sophisticated restaurant site for an elevated Sri Lankan dining experience.',
                image: curatedTableMockup,
                url: 'https://hotel-demo-web.netlify.app',
                tag: 'Business Website'
              },
              {
                title: 'Atelier',
                type: 'Gift Shop',
                desc: 'Premium artisanal gift shop — handcrafted goods with a refined dark aesthetic.',
                image: atelierMockup,
                url: 'https://giftshop-pre.netlify.app',
                tag: 'E-commerce'
              },
              {
                title: 'STICKERBOOK',
                type: 'Creative Store',
                desc: 'Playful comic-style e-commerce store for stickers, pens & creative supplies.',
                image: stickerbookMockup,
                url: 'https://comic-style.netlify.app',
                tag: 'E-commerce'
              }
            ].map((project, index) => (
              <motion.a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                className="project-card glass"
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-type">{project.tag}</span>
                    <div className="view-live-btn">
                      <ExternalLink size={16} />
                      Visit Live Site
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-meta">
                    <span className="project-niche">{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our <span className="text-gradient">Innovative Process</span>
          </motion.h2>
          
          <div className="process-timeline">
            {[
              { id: '01', title: 'Discovery', desc: 'Structuring your idea and defining requirements.' },
              { id: '02', title: 'Concept', desc: 'Researching users and creating initial prototypes.' },
              { id: '03', title: 'UI Design', desc: 'Transforming wireframes into refined interfaces.' },
              { id: '04', title: 'Development', desc: 'Building your MVP with agile principles.' },
              { id: '05', title: 'Scaling', desc: 'Deploying, monitoring, and introduction of new features.' }
            ].map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="process-step"
              >
                <div className="step-number text-gradient">{step.id}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer glass">
        <div className="container footer-content-centered">
            <div className="footer-logo-centered">
              <img src={logoWedit} alt="Wedit Logo" className="footer-logo" />
              <h2 className="footer-tagline-small">Wedit Digital Agency</h2>
            </div>
            
            <div className="footer-socials">
              <a href="https://wa.me/94768677576" target="_blank" rel="noopener noreferrer" className="social-link" title="WhatsApp">
                <MessageCircle size={24} />
              </a>
              <a href="https://www.facebook.com/share/14ZxfHhRhYJ/" target="_blank" rel="noopener noreferrer" className="social-link" title="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/wedit_official?igsh=MWZqaDZ5d25zdHk0ZQ==" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                <Instagram size={24} />
              </a>
              <a href="mailto:wedit2026@gmail.com" className="social-link" title="Email">
                <Mail size={24} />
              </a>
            </div>

            <div className="footer-legal">
              <p>&copy; {new Date().getFullYear()} Wedit. All Rights Reserved.</p>
            </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="booking-modal"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <button className="btn-close-modal" onClick={() => setIsBookingModalOpen(false)}>
                <X />
              </button>
              
              <h2>Start Your <span className="text-gradient">Journey</span></h2>
              <p>Tell us a bit about your project and let's make it happen!</p>

              <form className="booking-form" onSubmit={handleWhatsAppSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    required 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="form-group">
                  <label>Type of Website</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option>Business Website</option>
                    <option>Personal Portfolio</option>
                    <option>E-commerce Store</option>
                    <option>UI/UX Redesign</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Your Project Goal</label>
                  <textarea 
                    placeholder="Tell us what you want to achieve..." 
                    rows="4" 
                    required
                    value={formData.goal}
                    onChange={(e) => setFormData({...formData, goal: e.target.value})}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-consultation-hero">
                  Send via WhatsApp →
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
