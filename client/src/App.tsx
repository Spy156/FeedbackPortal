import './index.css'
import Navbar from './components/Navbar'
import { ThemeProvider } from "@/components/theme-provider"
import Home from "./pages/Home/home.tsx";
import Query from './pages/Query/query.tsx';
import Feedback from './pages/Feedback/feedback.tsx';
import QueryDetails from './pages/querydetails.tsx'
import Analysis from './pages/analysis.tsx'
import FacultyDashboard from './pages/faculty_dashboard.tsx'
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
  <ThemeProvider>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/query' element={<Query />}></Route>
          <Route path='/feedback' element={<Feedback />}></Route>
          <Route path='/query-details' element={<QueryDetails />}></Route>
          <Route path='/profile/faculty_dashboard' element={<Analysis />}></Route>
          <Route path='/profile/faculty_dashboard/analysis' element={<FacultyDashboard />}></Route>
        </Routes>
      </div>
  </ThemeProvider>
  )
}

export default App
