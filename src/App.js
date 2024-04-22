import 'react-toastify/dist/ReactToastify.css'

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Login from './components/Login';
import React from 'react';
import Register from './components/Register';
import TaskList from './components/TaskList';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <div className="container" data-testid="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/all-tasks" element={<TaskList />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
