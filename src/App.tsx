
// @ts-ignore: side-effect import of CSS without type declarations
import "./App.css";
import Navbar from "./components/Navbar.tsx";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import Pricing from "./pages/Pricing.tsx";
import SmallBusiness from "./pages/SmallBusiness.tsx";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";
import ContentCreators from "./pages/ContentCreators.tsx";
import  Contact  from "./pages/Contact.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import EmailContact from "./components/EmailContact.tsx";
import TermsAndConditions from "./pages/Policies/TermsAndConditions.tsx";
import PrivacyPolicy from "./pages/Policies/PrivacyPolicy.tsx";

function App() {
  return (
    <div className="text-secondary flex flex-col min-h-screen">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="flex-1 flex flex-col p-2">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/small-business" element={<SmallBusiness />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/content-creators" element={<ContentCreators />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/contact/email" element={<EmailContact/>}></Route>
          <Route path="/terms-and-conditions" element={<TermsAndConditions/>}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
        </Routes>
      </main>

        <Footer />
    
    </div>
  );
}

export default App;
