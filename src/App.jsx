import React, { useState } from "react";
import "./App.css";
import profilePic from "./profile.jpg";

export default function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return (
          <section className="home fade-in">
            <img src={profilePic} alt="Profile" className="profile-pic" />
            <h1>Ahmed Nadeem</h1>
            <p>BSCS Student at Information Technology University (ITU), Lahore</p>
          </section>
        );
      case "education":
        return (
          <section className="card fade-in">
            <h2>🎓 Education Background</h2>
            <ul>
              <li><strong>BSCS</strong> – Information Technology University (ITU), Lahore (Fall 2023 – Present)
                <ul>
                  <li>Coursework includes Data Structures, OOP, Web Development, AI, and DBMS</li>
                  <li>Participated in coding projects, academic presentations, and technical assignments</li>
                </ul>
              </li>
              <li><strong>Intermediate</strong> – Government College University (GCU), Lahore (2020 – 2022)
                <ul>
                  <li>Strong foundation in Mathematics, Physics, and Computer Science</li>
                  <li>Involved in academic competitions and group projects</li>
                </ul>
              </li>
              <li><strong>Matriculation</strong> – The Educators, Elite Campus, Lahore (2018 – 2020)
                <ul>
                  <li>Achieved strong academic results with a focus on science and computer fundamentals</li>
                  <li>Actively participated in school-level science fairs and quizzes</li>
                </ul>
              </li>
            </ul>
          </section>
        );
      case "skills":
        return (
          <section className="card fade-in">
            <h2>💻 Computer Science Skills</h2>
            <ul>
              <li>Programming Languages: C++, Python, Java (basic)</li>
              <li>Web Development: HTML, CSS, JavaScript, React.js</li>
              <li>Database Management: SQL, MySQL, basic MongoDB</li>
              <li>Object-Oriented Programming (OOP) concepts</li>
              <li>Version Control: Git & GitHub</li>
              <li>Data Structures and Algorithms (basic to intermediate)</li>
              <li>Assembly Language (iAPX 88 basics)</li>
              <li>Software Development Life Cycle (SDLC) knowledge</li>
              <li>Problem-solving & logical thinking</li>
              <li>Debugging and code optimization</li>
              <li>Familiar with Flutter (basic apps)</li>
              <li>Basic AI/ML concepts (using Python)</li>
              <li>Strong written and verbal communication</li>
              <li>Team collaboration and time management</li>
            </ul>
          </section>
        );
      case "projects":
        return (
          <section className="card fade-in">
            <h2>🛠️ Projects</h2>
            <ul>
              <li><strong>Personal Portfolio Website</strong>
                <ul>
                  <li>Built using HTML/CSS and converted into React with MUI v5 and React Router DOM</li>
                  <li>Responsive layout, project cards, and contact form with validation (Yup)</li>
                </ul>
              </li>
              <li><strong>Mobile App</strong> – Java (Android Studio)
                <ul>
                  <li>Created a basic Android application with multiple activities and user input</li>
                  <li>Implemented clean UI and navigation features</li>
                </ul>
              </li>
              <li><strong>Game Development</strong> – "Ounce Tale" (C# with Unity)
                <ul>
                  <li>Developed a 2D adventure game using Unity</li>
                  <li>Designed character movement, environment interaction, and basic story flow</li>
                </ul>
              </li>
              <li><strong>Chess Game</strong> – C++
                <ul>
                  <li>Console-based two-player chess game with move validation and check/checkmate logic</li>
                  <li>Applied OOP concepts and structured design</li>
                </ul>
              </li>
              <li><strong>Snake Game</strong> – C++
                <ul>
                  <li>Created a classic Snake game using console graphics</li>
                  <li>Included score tracking and speed levels</li>
                </ul>
              </li>
              <li><strong>Simple Flutter App</strong>
                <ul>
                  <li>Developed a beginner-level mobile app with screen navigation and form input</li>
                  <li>Practiced Dart basics and Flutter widgets</li>
                </ul>
              </li>
            </ul>
          </section>
        );
      case "contact":
        return (
          <section className="card fade-in">
            <h2>📞 Contact Information</h2>
            <p><strong>Name:</strong> Ahmed Nadeem</p>
            <p><strong>Email:</strong> ahmedbutt2204@gmail.com</p>
            <p><strong>Phone:</strong> 0324-1592794</p>
            <p><strong>Roll Number:</strong> BSCS23185</p>
            <p><strong>University:</strong> Information Technology University (ITU), Lahore</p>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <ul>
          <li onClick={() => setActivePage("home")}>Home</li>
          <li onClick={() => setActivePage("education")}>Education</li>
          <li onClick={() => setActivePage("skills")}>Skills</li>
          <li onClick={() => setActivePage("projects")}>Projects</li>
          <li onClick={() => setActivePage("contact")}>Contact</li>
        </ul>
      </nav>

      <main>
        {renderPage()}
      </main>

      <footer>
        <p>&copy; 2025 Ahmed Nadeem. All rights reserved.</p>
      </footer>
    </div>
  );
}
