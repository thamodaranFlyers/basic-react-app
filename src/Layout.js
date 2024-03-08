import Navbar from "./components/Navbar";

export const Layout = ({ children }) => {
  let plist = [];
  let perms = {};
  const currentUserID = sessionStorage.getItem("user-id");
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
  return (
    <>
      <Navbar perms={perms} />
      {children}
    </>
  );
};
