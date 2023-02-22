import React, { useState } from "react";
import Stats from "./components/stats/stats";
import Users from "./components/users/users";
import AddUser from "./components/users/addUser/addUser";

function App() {
  const [hidden, setHidden] = useState(false);
  const [addUser, setAddUser] = useState(false);

  return (
    <div className="min-h-screen">
      <Stats />
      <button onClick={() => setHidden(!hidden)}>{hidden ? "Show DB" : "Hide DB"}</button>
      <button onClick={() => setAddUser(true)}>Add User</button>
      {addUser && <AddUser setAddUser={() => setAddUser(false)} />}
      {!hidden && <Users />}
    </div>
  );
}

export default App;
