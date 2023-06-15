import { useEffect } from 'react';
import './App.css';
import Users from './components/Users';
import { getUsers } from './redux/users/usersSlice';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers("RANDOM"))  
  }, [])
  
  return (
    <div className="App">
      <Users />
    </div>
   
  );
}

export default App;
