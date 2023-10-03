import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import HomePageHeader from './components/HomePageHeader';
import SkillsPromoter from './components/SkillsPromoter';
import Header from './components/Header';
import Description from './components/Description';
import AboutSkills from './components/AboutSkills';
import Background from './components/Background';
import BackgroundDetails from './components/BackgroundDetails';
import Education from './components/Education';
import EducationDetails from './components/EducationDetails';
import Projects from './routes/Projects';
import ProjectsDetails from './components/ProjectDetails';
import { SkillsProvider } from './components/SkillsContext';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePageHeader />
          <SkillsProvider>
            <SkillsPromoter />
          </SkillsProvider>
          <Footer />
        </Route>
        <Route exact path="/about">
          <Header />
          <Description />
          <SkillsProvider>
            <AboutSkills />
          </SkillsProvider>
          <Background />
          <BackgroundDetails />
          <Education />
          <EducationDetails />
          <Footer />
        </Route>
        <Route exact path="/projects">
          <Header />
          <Projects />
          <ProjectsDetails />
          <Footer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
