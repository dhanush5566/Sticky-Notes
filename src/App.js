
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Header';
import './App.css';
import Home from './Home';
import Layout from './Layout';
import NewReminder from "./Reminders/NewReminder";
import PastReminders from "./Reminders/PastReminders";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="new-remainder" element={<NewReminder />} />
        <Route path="past-remainders" element={<PastReminders />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
