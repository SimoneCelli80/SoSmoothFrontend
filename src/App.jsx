import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Flashcards from './pages/Flashcards';
import Katas from './pages/Katas';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';




function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/auth/registration" element={<RegistrationPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/katas" element={<Katas />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route 
            path="/dashboard" 
            element={
              <PrivateRoute>
                  <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
