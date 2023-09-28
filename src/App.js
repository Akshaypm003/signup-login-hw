import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Welcome from "./Welcome";



function App() {

  const [user,setUser] = useState({
    name:'' ,
    email:'',
    password:'',
    signup:true
  })
  const [login,setLogin] = useState(false)
  const [welcome,setWelcome]=useState(false)

  return (
    <div >
     {user.signup && <Signup user={user} setUser={setUser} setLogin={setLogin} login={login}/>}
     {login && <Login user={user} setLogin={setLogin} login={login} welcome={welcome} setWelcome={setWelcome}/>}
     {welcome && <Welcome/>}
    </div>
  );
}

export default App;
