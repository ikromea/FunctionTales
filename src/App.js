import './App.css';
import { BrowserRouter, Route, Routes,Router } from 'react-router-dom';
import MyBook from "./pages/my_book.js"
import Login from "./pages/login.js"
import Register from "./utils/register.js"
import Reset from "./utils/register.js"
import Dashboard from "./utils/dashboard.js"
import Home from "./pages/home.js"

function App() {
  return (
<BrowserRouter>
        <Routes>
          <Route path="/book" element={<MyBook />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
