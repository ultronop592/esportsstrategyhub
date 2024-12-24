import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import Maps from '@/pages/Maps'
import Weapons from '@/pages/Weapons'
import Throwables from '@/pages/Throwables'
import Vehicles from '@/pages/Vehicles'
import Sensitivity from '@/pages/Sensitivity'
import Handcams from '@/pages/Handcams'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import TermsOfService from '@/pages/TermsOfService'
import PatchNotes from '@/pages/PatchNotes'
import Search from '@/pages/Search'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/esportsstrategyhub" element={<Home />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/throwables" element={<Throwables />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/sensitivity" element={<Sensitivity />} />
          <Route path="/handcams" element={<Handcams />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/patch-notes" element={<PatchNotes />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
