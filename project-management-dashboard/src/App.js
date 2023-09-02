import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch('/api/projects');
      const json = await response.json();
      setProjects(json);
    }
    fetchProjects();
  }, []);

  return (
    <div className="App">
      <h1>Project Management Dashboard</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
