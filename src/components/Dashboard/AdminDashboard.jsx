import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-5">
      <Header changeUser={props.changeUser} data={{ firstname: "Rohan" }} />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
