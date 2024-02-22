import logo from './logo.svg';
import './App.css';

import ProjectList from './components/ProjectList';

function App() {

  const plist = [
    {'id': 1,
     'name': 'project one',
    'description': 'this is description of project one'
    },
    {'id': 2,
     'name': 'project two',
    'description': 'this is description of project two'
    }
  ];

  console.log(plist);

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="text-3xl font-bold underline">
        this is App.js
      </h1>
      <ProjectList items={plist}/>
      </header>
    </div>
  )
}

export default App;
