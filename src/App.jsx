import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import HomePage from "./pages/homepage"
import AboutPages from "./pages/AboutPage"
import CoursesPage from "./pages/CourcesPage"
import ContactPage from "./pages/ContactPage"
import AdmissionPage from "./pages/AdmissionPage"
import ChatbotComponent from "./components/Chatbot/ChatbotComponents"
// import './styles/Pages.css'


const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/about" element={<AboutPages/>}/>
      <Route path="/courses" element={<CoursesPage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
      <Route path="/admission" element={<AdmissionPage/>}/>
    </Routes>
    <div>
     <ChatbotComponent/>
    </div>
   </Router>
   </>
  )
}

export default App;