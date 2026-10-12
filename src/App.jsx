import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router";
import { getDoctorById, getDoctorPath } from "./data/doctorDeatails";
import { ThemeProvider } from "./core/createContext";
import Home from "./modules/Pages/Home";
import NotFound from "./modules/Layout/NotFound";
import DoctorDetails from "./modules/Pages/DoctorDetails";
import Loading from "./modules/components/Loading";
import WhatsAppButton from "./modules/components/WhatsAppButton";

function LegacyDoctorDetailsRedirect() {
  const { id } = useParams();
  const doctor = getDoctorById(id);
  if (!doctor) return <Navigate to="/" replace />;
  return <Navigate to={getDoctorPath(doctor)} replace />;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Loading onComplete={handleLoadingComplete} />;
  }

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor-details/:id" element={<LegacyDoctorDetailsRedirect />} />
          <Route path="/:slug" element={<DoctorDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton /> {/* أضف هذا السطر */}
      </BrowserRouter>
    </ThemeProvider>
  );
}