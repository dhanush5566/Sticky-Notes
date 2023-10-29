
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './Login/Login';
import Home from './Home';
import Layout from './Layout';
import NewReminder from "./Reminders/NewReminder";
import PastReminders from "./Reminders/PastReminders";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="new-remainder" element={<NewReminder />} />
        <Route path="past-remainders" element={<PastReminders />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
