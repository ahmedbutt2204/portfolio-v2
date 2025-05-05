import React from 'react';

function Projects() {
  return (
    <div className="container">
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ border: '1px solid #ddd', padding: '20px', width: '300px', borderRadius: '8px', backgroundColor: '#fff' }}>
          <h3>📱 Word Puzzle Game App</h3>
          <p>A mobile word puzzle game built with Unity, designed to enhance vocabulary and puzzle-solving skills.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '20px', width: '300px', borderRadius: '8px', backgroundColor: '#fff' }}>
          <h3>🎮 Bounce Tale Game</h3>
          <p>A 2D game developed using Unity and Godot engines, inspired by classic platformers with modern features.</p>
        </div>
        <div style={{ border: '1px solid #ddd', padding: '20px', width: '300px', borderRadius: '8px', backgroundColor: '#fff' }}>
          <h3>🌐 Travel Agency Management System</h3>
          <p>A web-based system created using React and MongoDB for managing travel bookings and customer information.</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
