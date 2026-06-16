import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import LegalNotice from './pages/LegalNotice'
import CookiePolicy from './pages/CookiePolicy'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidad" element={<PrivacyPolicy />} />
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>
      <CookieBanner />
    </>
  )
}
