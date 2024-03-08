import "./App.css";

import ProjectList from "./components/ProjectList";
import Navbar from "./components/Navbar";

function App() {
  //think of this as a dashboard page

  const currentUserID = sessionStorage.getItem("user-id");

  let plist = [];
  let perms = {};
  //eventually fetch data using API + currentUserID
  //for now populate here
  if (currentUserID === "1") {
    perms = {
      org_perms: ["view-projects", "support-plan"],
      project_perms: {
        1: ["view-tasks"],
      },
    };
    plist = [
      {
        id: 1,
        name: "project one",
        description: "this is description of project one",
      },
    ];
  } else if (currentUserID === "2") {
    perms = {
      org_perms: ["view-projects", "manage-users", "support-plan"],
      project_perms: {
        1: ["view-tasks"],
        2: ["view-tasks", "create-tasks"],
      },
    };
    plist = [
      {
        id: 1,
        name: "project one",
        description: "this is description of project one",
      },
      {
        id: 2,
        name: "project two",
        description: "this is description of project two",
      },
    ];
  }

  console.log(plist);

  return (
    <div>
      <Navbar perms={perms} />
      <div className="App">
        <header className="App-header">
          <h1 className="text-3xl font-bold underline">this is App.js</h1>
          <ProjectList items={plist} />
        </header>
      </div>
    </div>
  );
}

export default App;
