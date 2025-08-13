import React from "react";
import { Grommet, Box, Main } from "grommet";
import { hpe } from "grommet-theme-hpe";
import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import ProductCategories from "./components/ProductCategories";
import OurServices from "./components/OurServices";
import WhyChooseUs from "./components/WhyChooseUs";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import ChatbaseBubble from "./components/ChatbaseBubble";

function App() {
  return (
    <Grommet theme={hpe} full themeMode="light">
      <style>{`
        .header-fixed {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          z-index: 100;
        }
        .footer-fixed {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100vw;
          z-index: 100;
        }
        .main-scroll {
          margin-top: 80px; /* header height */
          /* Removed margin-bottom, height, and overflow restrictions */
        }
      `}</style>
      <div className="header-fixed">
        <HeaderNav />
      </div>
      <Box background="background">
        <Main className="main-scroll">
          <HeroSection />
          <Box margin={{ vertical: "small" }}>
            <ProductCategories />
          </Box>
          <Box margin={{ vertical: "small" }}>
            <OurServices />
          </Box>
          <Box margin={{ vertical: "small" }}>
            <WhyChooseUs />
          </Box>
          <Box margin={{ vertical: "small" }}>
            <ContactSection />
          </Box>
        </Main>
        <ChatbaseBubble />
        <FooterSection />
      </Box>
      {/* <div className="footer-fixed"> */}
      {/* </div> */}
    </Grommet>
  );
}

export default App;
