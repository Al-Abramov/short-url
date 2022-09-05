import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/layout';
import { RequireAuth } from './components/require-auth';
import { Authorization } from './pages/authorization';
import { MainPage } from './pages/main';
import { Registration } from './pages/registration';
import { WelcomePage } from './pages/welcome';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<WelcomePage />} />
        <Route path="registration" element={<Registration />} />
        <Route path="authorize" element={<Authorization />} />
        <Route
          path="main"
          element={
            <RequireAuth>
              <MainPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
