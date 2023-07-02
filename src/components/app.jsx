import './app.css';
import Header from './header/header';
import Landing from './landing/landing'
import Timeline from './timeline/timeline'
import Portfolio from './portfolio/portfolio';
import Footer from './footer/footer'

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Landing />
        <Timeline />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}