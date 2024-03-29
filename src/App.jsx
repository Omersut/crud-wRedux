import UserList from './features/users/UserList';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddUser from './features/users/addUser';
import EditUser from './features/users/editUser';

function App() {
  return (
    <>
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-32">
      <h1 className='text-center font-bold text-2xl text-gray-700'>Movie and Series Quotes</h1>
      <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </Router>
    </div>
    
    </>
  );
}

export default App;
