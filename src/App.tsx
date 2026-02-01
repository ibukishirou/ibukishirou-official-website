import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Calendar from './pages/Calendar'
import Achievements from './pages/Achievements'
import Goods from './pages/Goods'
import Guidelines from './pages/Guidelines'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function App() {
  const navigate = useNavigate()

  // 404.htmlからのリダイレクト処理
  useEffect(() => {
    const queryPath = window.location.search.replace('?', '/')
    if (queryPath && queryPath !== '/') {
      navigate(queryPath, { replace: true })
    }
  }, [navigate])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="achievements" element={<Achievements />} />
        <Route path="goods" element={<Goods />} />
        <Route path="guidelines" element={<Guidelines />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="terms" element={<Terms />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
    </Routes>
  )
}

export default App
