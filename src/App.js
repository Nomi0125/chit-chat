import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { auth } from './configs/firebase';
import Navigation from './navigation/Navigation';
import { checkUser } from './redux/action/authAction';
// import { CHECKUSER } from './redux/constants/types';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // const auth = getAuth();
    async function check() {
      auth.onAuthStateChanged((someUser) => {
        if (someUser) {
          dispatch(checkUser(someUser));
        } else {
          console.log("User not found");
        }
      });
    }
    check();
  }, [dispatch]);
  return (
    <div className="App"> 
  <Navigation />
    </div>
  );
}

export default App;