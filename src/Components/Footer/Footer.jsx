import React from 'react'
import './Footer.css'
const About = () => {
  return (
    <>
  {/* Fontawesome 6 is used for footer social icons */}
  {/* FOOTER START */}
  <footer
    className="footer"
    role="contentinfo"
    itemScope=""
    itemType="http://schema.org/WPFooter"
  >
    <div className="footer-container">
      <div
        className="footer-col"
        role="navigation"
        aria-labelledby="quick-nav-heading"
        itemScope=""
        itemType="http://schema.org/SiteNavigationElement"
      >
        <h3 id="quick-nav-heading" itemProp="name">
          Quick Nav
        </h3>
        <ul>
          <li>
            <a href="#" itemProp="url">
              Home
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Contents
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Creations
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Services
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Store
            </a>
          </li>
        </ul>
      </div>
      <div
        className="footer-col"
        role="navigation"
        aria-labelledby="know-heading"
      >
        <h3 id="know-heading" itemProp="name">
          Know
        </h3>
        <ul>
          <li>
            <a href="#" itemProp="url">
              About
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Mission
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Services
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Social
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Get in touch
            </a>
          </li>
        </ul>
      </div>
      <div
        className="footer-col"
        role="navigation"
        aria-labelledby="contents-heading"
      >
        <h3 id="contents-heading" itemProp="name">
          Contents
        </h3>
        <ul>
          <li>
            <a href="#" itemProp="url">
              Inside SDP
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Blog
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Verses / Poems
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Visual Narratives
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Topics Index
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              More
            </a>
          </li>
        </ul>
      </div>
      <div
        className="footer-col"
        role="navigation"
        aria-labelledby="resources-heading"
      >
        <h3 id="resources-heading" itemProp="name">
          Resources
        </h3>
        <ul>
          <li>
            <a href="#" itemProp="url">
              Graphics
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Free codes
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Helpful sites
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              {" "}
              Freebies
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              {" "}
              Templates
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              {" "}
              Mockups
            </a>
          </li>
        </ul>
      </div>
      <div
        className="footer-col"
        role="navigation"
        aria-labelledby="support-heading"
      >
        <h3 id="support-heading" itemProp="name">
          Support
        </h3>
        <ul>
          <li>
            <a href="#" itemProp="url">
              Contact
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              Web chat
            </a>
          </li>
          <li>
            <a href="#" itemProp="url">
              E-mail
            </a>
          </li>
        </ul>
      </div>
      <div
        className="footer-col social"
        role="navigation"
        aria-labelledby="social-heading"
      >
        <h3 id="social-heading" itemProp="name">
          Social
        </h3>
        <ul className="social-icons">
          <li>
            <a href="#" aria-label="Facebook" itemProp="url">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter" itemProp="url">
            
            </a>
          </li>
          <li>
            <a href="#" aria-label="Mastodon" itemProp="url">
              <i className="fa-brands fa-mastodon" />
            </a>
          </li>
        </ul>
      </div>
      <div className="clearfix" />
    </div>
    <div className="footer-bottom">
      <p>
        © 2024{" "}
        <a style={{ color: "inherit" }} href="">
          StackAura.
        </a>{" "}
        Digital Services.
      </p>
      <ul className="footer-bottom-links">
        <li>
          <a href="#">Legal</a>
        </li>
        <li>
          <a href="#">Credits</a>
        </li>
        <li>
          <a href="#">Sponsor/Advertise</a>
        </li>
      </ul>
    </div>
  </footer>
  {/* END OF FOOTER */}
</>

  )
}

export default About
