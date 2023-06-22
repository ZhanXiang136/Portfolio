import './portfolio.css'

export default function Portfolio() {
    return (
        <section className="portfolio" id='portfolio'>
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
    )
}