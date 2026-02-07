import { useState, useEffect } from 'react'
import './App.css'
import jeffImage from '../public/image.png'

function App() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="animated-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      {/* Main Container */}
      <main className="main-container">
        <div className={`professional-card ${isVisible ? 'visible' : ''}`}>
          
          {/* Header Section */}
          <header className="card-header">
            <div className="header-badge">
              <svg className="badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Professional Service</span>
            </div>
            
            <h1 className="company-name">Jaco Services</h1>
            <p className="company-tagline">Excellence in Every Detail</p>
            
            <div className="guarantee-banner">
              <div className="guarantee-icon-container">
                <svg className="guarantee-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="guarantee-content">
                <div className="guarantee-title">SAME DAY CALL BACK</div>
                <div className="guarantee-subtitle">With Price</div>
              </div>
            </div>
          </header>

          {/* Divider */}
          <div className="section-divider">
            <div className="divider-line"></div>
            <div className="divider-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/>
              </svg>
            </div>
            <div className="divider-line"></div>
          </div>

          {/* Services Section */}
          <section className="services-section">
            <div className="section-header">
              <h2 className="section-title">Our Professional Services</h2>
              <p className="section-subtitle">Comprehensive home solutions tailored to your needs</p>
            </div>
            
            <div className="services-grid">
              
              {/* Service 1 */}
              <article className="service-card">
                <div className="service-card-inner">
                  <div className="service-icon-box">
                    <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="icon-bg"></div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-heading">Residential Cleaning</h3>
                    <p className="service-text">
                      Complete condo cleaning services including dishes, laundry, and professional window washing.
                    </p>
                    <div className="service-features">
                      <span className="feature-tag">Deep Cleaning</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Service 2 */}
              <article className="service-card">
                <div className="service-card-inner">
                  <div className="service-icon-box">
                    <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="icon-bg"></div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-heading">Interior Design</h3>
                    <p className="service-text">
                      Expert consultation on furniture selection, color palettes, window treatments, and custom accent walls. 
                      Create the perfect atmosphere for your home.
                    </p>
                    <div className="service-features">
                      <span className="feature-tag">Custom Design</span>
                      <span className="feature-tag">Expert Advice</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Service 3 */}
              <article className="service-card">
                <div className="service-card-inner">
                  <div className="service-icon-box">
                    <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className="icon-bg"></div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-heading">Home Improvement</h3>
                    <p className="service-text">
                      Professional installation services: shower heads, ceiling fans, TV wall mounting, and screen replacement.
                    </p>
                    <div className="service-features">
                      <span className="feature-tag">Assured comfort</span>
                    </div>
                  </div>
                </div>
              </article>

            </div>
          </section>


          {/* CTA Section */}
          <section className="cta-section">
            <div className="cta-header">
              <h2 className="cta-title">Get Your Free Quote Today</h2>
              <p className="cta-description">
                Call or email Jeff today, and get a price today.
              </p>
            </div>

            {/* Jeff's Image */}
            <div className="jeff-image-container">
              <img
                src={jeffImage}
                alt="Jeff - Professional Service Provider"
                className="jeff-image"
              />
            </div>
            
            <div className="contact-buttons">
              <a href="https://wa.me/14846864369" className="contact-btn btn-primary" target="_blank" rel="noopener noreferrer">
                <div className="btn-icon-wrapper">
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="btn-content">
                  <span className="btn-label">Call or Text via WhatsApp</span>
                  <span className="btn-value">484-686-4369</span>
                </div>
              </a>

              <a href="mailto:samedaycallback@gmail.com" className="contact-btn btn-secondary">
                <div className="btn-icon-wrapper">
                  <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="btn-content">
                  <span className="btn-label">Send us an Email</span>
                  <span className="btn-value">samedaycallback@gmail.com</span>
                </div>
              </a>
            </div>

            <div className="cta-footer">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p>Professional service with same-day response guaranteed</p>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

export default App