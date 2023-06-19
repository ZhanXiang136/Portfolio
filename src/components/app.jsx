import './app.css';
import Header from './header/header';
import Footer from './footer/footer'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to my personal website!</h1>
            <p>Here you'll find information about me, my work, and how to get in touch.</p>
            <button>Get in touch</button>
          </div>
        </section>
        <section className="about">
          <h2>About me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
        <section className="portfolio">
          <h2>Portfolio</h2>
          <ul className="portfolio-list">
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/300x200.png?text=Project+1" alt="Project 1" />
                <h3>Project 1</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/300x200.png?text=Project+2" alt="Project 2" />
                <h3>Project 2</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="https://via.placeholder.com/300x200.png?text=Project+3" alt="Project 3" />
                <h3>Project 3</h3>
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}