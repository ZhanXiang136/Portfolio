import './portfolio.css'
import PokemonBattle from '../../assets/pokemon-battle.png'
import PokemonMenu from '../../assets/pokemon-main.png'
import CodeOverFlowMaze from '../../assets/code-overflow-maze.png'

export default function Portfolio() {
  return (
      <section className="portfolio" id='portfolio'>
        <h2>Portfolio</h2>
        <ul className="portfolio-list">
          <li>
            <a href="https://github.com/ZhanXiang136/PokemonGame">
              <img id='pokemon-image' src={PokemonMenu} 
              onMouseEnter={() => {document.querySelector("#pokemon-image").src = PokemonBattle}} 
              onMouseLeave={() => {document.querySelector("#pokemon-image").src = PokemonMenu}}/>
              <h3>Pokemon Battle Simulator</h3>
            </a>
          </li>
          <li>
            <a href="https://github.com/dhuang6334/Code-Overflow">
              <img src={CodeOverFlowMaze} alt="Project 2" />
              <h3>Maze</h3>
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