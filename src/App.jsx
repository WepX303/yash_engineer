import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="nav__logo">
          <img src="/assets/Vector.svg" alt="logo" />
        </div>
        <ul className={`nav__links ${menuOpen ? "active" : ""}`}>
          <li className="link">
            <a href="/construction/index.html" rel="noopener noreferrer">
              Construction
            </a>
          </li>
          {/* <li className="link">
            <a href="/shipping/index.html" rel="noopener noreferrer">
              Shipping
            </a>
          </li> */}
          <li className="link">
            <a href="https://asmanexpress.com" target="_blank" rel="noopener noreferrer">
              AsmanExpress
            </a>
          </li>
        </ul>
        <div className="nav__toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className="destination__container">
        <img className="bg__img__1" src="/assets/bg-dots.png" alt="bg" />
        <div className="content">
          <h1>YASH<br />ENGINEER<br /><span>GROUP</span></h1>
          <p>
            “Ýaş Inžiner” is a visionary company integrating advanced technology
            and sustainable innovation to develop future-ready infrastructure
            across construction, architecture, logistics, and e-commerce,
            setting new standards of quality and reliability.
          </p>
        </div>
      </div>

      <footer className="footer">
  <div className="footer__row">
    <div className="footer__item"><strong>Phone:</strong> +993 64 74 96 81</div>
    <div className="footer__item"><strong>Email:</strong> yashinzener@gmail.com</div>
    <div className="footer__item"><strong>Address:</strong> 230, Bitaraplyk Street, Ashgabat, Turkmenistan</div>
  </div>
</footer>



    </div>

  );
}

export default App;

