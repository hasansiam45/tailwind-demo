import logo from './logo.svg';
import './App.css';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
  </div>
  );
}

export default App;
