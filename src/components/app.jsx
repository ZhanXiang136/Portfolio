import './app.css';
import Header from './header/header';
import Landing from './landing/landing'
import About from './about/about'
import Portfolio from './portfolio/portfolio';
import Footer from './footer/footer'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Landing />
        <About />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}