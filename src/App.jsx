import React from 'react';
import TodosPage from './pages/TodosPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import { Navbar } from './components/Navbar';

// export interface ITodo {
//   title: string
//   id: number
//   completed: boolean
// }

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path='/' element={<TodosPage />} />
          <Route path='/' element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
