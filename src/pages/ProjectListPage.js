import ProjectList from "../components/ProjectList";
import Navbar from "../components/Navbar";

function ProjectListPage({ items }) {
  console.log("in ProjectListPage.js ... ");

  //eventually fetch list from database using some API
  //for now build a list of project objects 

  const currentUserID = sessionStorage.getItem('user-id');

  let plist = []
  //eventually fetch data using API + currentUserID
  //for now populate here 
  if (currentUserID == "1") {
    plist = [
      {'id': 1,
       'name': 'project one',
      'description': 'this is description of project one'
      }
    ];
  }
  else if (currentUserID == "2") {
    plist = [
      {'id': 1,
       'name': 'project one',
      'description': 'this is description of project one'
      },
      {'id': 2,
       'name': 'project two',
      'description': 'this is description of project two'
      }
    ];
  }
  
  console.log(plist);

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1 className="text-3xl font-bold underline">
          this is App.js
          </h1>
          <ProjectList items={plist}/>
        </header>
      </div>
    </div>
  )
}
export default ProjectListPage;