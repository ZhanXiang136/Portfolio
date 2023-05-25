import './App.css';

function App() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
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
        <section className="contact">
          <h2>Contact me</h2>
          <form>
            <label>Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Message</label>
            <input type="message" />
            <button>Send message</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Name</p>
      </footer>
    </div>
  );
}

export default App;

