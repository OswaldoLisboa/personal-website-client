import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LanguageContext from '../contexts/LanguageContext';
import history from '../history';
import './App.css'
import NavBar from './nav/NavBar';
import Footer from './footer/Footer';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.state = {
      language: 'english',
      changeLanguage: this.changeLanguage
    };
  }

  componentDidMount() {
    const browserLanguage = (window.navigator.userLanguage || window.navigator.language).slice(0,2);

    switch (browserLanguage) {
      case 'es':
        this.setState({ language: 'spanish' });
        break;
      case 'pt':
        this.setState({ language: 'portuguese' });
        break;
      default:
        this.setState({ language: 'english' });
        break;
    }
  }

  changeLanguage(language) {
    this.setState({ language });
  }

  render() {
    return (
      <Router history={history}>
        <div className="main-container">
          <LanguageContext.Provider value={this.state}>
            <NavBar/>
            <div className="content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </div>
            <Footer/>
          </LanguageContext.Provider>
        </div>
      </Router>
    )
  }
}

export default App;
