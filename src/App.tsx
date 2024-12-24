//import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import Maps from '@/pages/Maps';
import Weapons from '@/pages/Weapons';
import Throwables from '@/pages/Throwables';
import Vehicles from '@/pages/Vehicles';
import Sensitivity from '@/pages/Sensitivity';
import Handcams from '@/pages/Handcams';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import PatchNotes from '@/pages/PatchNotes';
import Search from '@/pages/Search';

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
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
      <ScrollToTop />
    </ThemeProvider>
  );
};

export default App;
