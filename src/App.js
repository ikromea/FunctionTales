import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Book} from "./pages/book.js"
import {MyBook} from "./pages/my_book.js"
import Home from "./pages/home.js"
import { GoogleLogin, GoogleLogout  } from '@leecheuk/react-google-login';
import { gapi } from 'gapi-script';
import {useEffect, useState} from 'react';

function App() {
  const clientId = '920356221071-f98bql1bjuubsprqcruc9tsl82t3puog.apps.googleusercontent.com';
  const [ profile, setProfile ] = useState([]);
  useEffect(() => {
      const initClient = () => {
          gapi.client.init({
              clientId: clientId,
              scope: ''
          });
      };
      gapi.load('client:auth2', initClient);
  });

  const onSuccess = (res) => {
      setProfile(res.profileObj);
  };

  const onFailure = (err) => {
      console.log('failed', err);
  };

  const logOut = () => {
      setProfile(null);
  };
  return (
    <><div>
    <br />
    <br />
    {profile ? (
        <div>
            <img src={profile.imageUrl} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
        </div>
    ) : (
        <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    )}
</div><BrowserRouter>
        <Routes>
          <Route path="/book" element={<Book />}>
          </Route>
          <Route path="/book2" element={<MyBook />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>
      </BrowserRouter></>


  );
}

export default App;
