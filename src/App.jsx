import { Routes, Route, useLocation } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Flashcards from './pages/Flashcards';
import Katas from './pages/Katas';
import ConfirmEmail from './pages/ConfirmEmail';
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  duration: 0.2,
  ease: "easeInOut"
};

function App() {
   
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Homepage />
              </motion.div>
              } 
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/auth/registration" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
              <RegistrationPage />
            </motion.div> 
              } 
            />
            <Route path="/auth/login" element={
               <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
               <LoginPage />
             </motion.div>
              } 
            />
            <Route path="/auth/confirm" element={
              
                <ConfirmEmail />
              } 
            /> 
            <Route path="/katas" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Katas />
              </motion.div>
              } 
            />
            <Route path="/flashcards" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Flashcards />
              </motion.div>
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <PrivateRoute>
                      <Dashboard />
                  </PrivateRoute>       
                </motion.div>
              }
            />
          </Routes>
    </AnimatePresence>
  );
}

export default App;
