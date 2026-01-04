import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <p style={{ marginTop: "1rem" }}>
            Connect with me:
            <a href="#" style={{ color: "#93c5fd", marginLeft: "1rem" }}>
              LinkedIn
            </a>{" "}
            |
            <a href="#" style={{ color: "#93c5fd", margin: "0 1rem" }}>
              GitHub
            </a>{" "}
            |
            <a href="#" style={{ color: "#93c5fd" }}>
              Twitter
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
