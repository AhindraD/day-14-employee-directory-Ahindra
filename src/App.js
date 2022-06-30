import logo from './logo.svg';
import './App.css';
import UserCards from './components/UserCards';
import users from "./users";

function App() {
  let name = 'Ahin';
  let sayHello = () => 'Hey, There';


  return (
    <>
      <h1>Users at Acme Inc.</h1>
      <div className="container">
        {users.map(user => <UserCards user={user} />)}
      </div>
    </>
  );
}

export default App;
