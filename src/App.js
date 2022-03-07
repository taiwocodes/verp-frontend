import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Register from "./pages/register";
import Login from "./pages/login";
import Classroom from './views/classroom'
import Dashboard from "./views/dashboard";
import Discussions from './views/discussions'
import Resources from './views/resources'
import Settings from './views/settings'
import 'antd/dist/antd.css';

function App() {
  return (
    <div>
    <Routes>
    <Route path="/" element={<Landing/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/classroom" element={<Classroom/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/discussions" element={<Discussions/>}/>
    <Route path="/resources" element={<Resources/>}/>
    <Route path="/settings" element={<Settings/>}/>

    </Routes>
    </div>
  );
}

export default App;
