import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import AboutPage from './pages/AboutPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import JobsPage from './pages/JobsPage';
import GetStartedPage from './pages/GetStartedPage';
import ConsultationPage from './pages/ConsultationPage';
import MouseFollower from './components/3d/MouseFollower';

// Create a layout component that includes the common elements
const Layout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      <ScrollToTop />
      <MouseFollower />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/get-started" element={<GetStartedPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

// Create router with future flags enabled
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<Layout />} />
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true
    }
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;