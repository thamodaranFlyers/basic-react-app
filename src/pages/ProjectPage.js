import { useParams } from "react-router-dom";
import ProjectDetail from "../components/ProjectDetail";

function ProjectPage({ item }) {
  console.log("in ProjectPage.js ... ");

  const { id } = useParams();

  //use the id to find the data
  //call some API

  return <ProjectDetail item={item} />;
}
export default ProjectPage;
