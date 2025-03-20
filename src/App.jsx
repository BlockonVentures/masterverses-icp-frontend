import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import UserLayout from './utils/Layout/UserLayout';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLayout />} >
            <Route index element={<Home />} />
            <Route path='*' element={<Navigate to={'/'} replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
