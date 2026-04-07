import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, MonitorSmartphone, ShoppingCart, Rocket, Code, Store, Menu, X } from 'lucide-react'
import './App.css'

function App() {
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
            <img src="/src/assets/logo-wedit.png" alt="Wedit Logo" className="nav-logo" />
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="https://wa.me/94768677576" className="btn btn-primary">Start a Project</a>
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
              <span className="text-gradient">Portfolio or business</span> <br/>
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
            <div className="hero-image-placeholder glass">
               {/* Decorative structural UI */}
               <div className="ui-header glass">
                 <div className="ui-dots">
                   <span></span><span></span><span></span>
                 </div>
               </div>
               <div className="ui-body">
                 <div className="ui-line line-1"></div>
                 <div className="ui-line line-2"></div>
                 <div className="ui-line line-3"></div>
                 <div className="ui-box"></div>
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
              <h3>WhatsApp Order System</h3>
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
              <img src="/src/assets/logo-wedit.png" alt="Wedit Logo" className="footer-logo" />
              <p className="text-muted">Gearing up your business for the digital world.</p>
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

      {/* Process Section */}
      <section className="process">
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

      {/* CTA/Contact Section */}
      <section id="contact" className="contact-cta">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="contact-card glass"
          >
            <div className="contact-info">
              <h2>Gear up your business for the <span className="text-gradient">Digital World!</span></h2>
              <p>Wait no more — Get your modern, high-quality website today. Contact us via WhatsApp to start.</p>
              
              <div className="contact-details">
                <a href="https://wa.me/94768677576" className="btn btn-primary cta-btn">
                  Message +94 76 867 7576
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer glass">
        <div className="container footer-content">
           <div className="footer-brand">
             <img src="/src/assets/logo-wedit.png" alt="Wedit Logo" className="footer-logo" />
             <p className="text-muted mt-2">Custom high-quality web development services for the modern internet.</p>
             <div className="footer-contacts mt-4">
               <a href="mailto:wedit2026@gmail.com" className="contact-link">wedit2026@gmail.com</a>
               <a href="https://www.instagram.com/wedit_official?igsh=MWZqaDZ5d25zdHk0ZQ==" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram: @wedit_official</a>
             </div>
           </div>
           <div className="footer-links">
             <p>&copy; {new Date().getFullYear()} Wedit. All Rights Reserved.</p>
           </div>
        </div>
      </footer>
    </div>
  )
}

export default App
