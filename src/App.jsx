import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
//import Header from "./components/other/Header";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./contex/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

  useEffect(() => {
  const storedUser = localStorage.getItem("loggedInUser");
  if (storedUser) {
    try {
      const savedUser = JSON.parse(storedUser);
      setUser(savedUser);
      if (savedUser.role === "employee" && savedUser.data) {
        setLoggedInUserData(savedUser.data);
      }
    } catch (error) {
      console.error("Invalid user data in localStorage", error);
      localStorage.removeItem("loggedInUser"); // cleanup if data is corrupted
    }
  }
}, []);

  

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser({role : 'admin'});
      localStorage.setItem("loggedInUser", JSON.stringify({role : "admin"}));
    } else if (authData) {
      const employee = authData.employees.find((e) => e.email == email && e.password == password); 
      if(employee){
        setUser({role : 'employee'});
        setLoggedInUserData(employee);
        localStorage.setItem("loggedInUser", JSON.stringify({role : "employee",data:employee}));
      }
    } else {
      alert("Invalid Credential");
    }
  };

  return (
      <>
        {/* <Header /> */}
        {!user ? <Login handleLogin={handleLogin} /> : ''}
        {user?.role === 'admin' ? <AdminDashboard changeUser={setUser} /> : (user?.role === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      </>
  );
};

export default App;