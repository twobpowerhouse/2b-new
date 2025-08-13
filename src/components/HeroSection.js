import React, { useState } from "react";
import { Box, Heading, Text, Card, Button, ResponsiveContext } from "grommet";
import { FormPrevious, FormNext } from "grommet-icons";

const images = [
  require("../assets/photos/photo1.jpg"),
  require("../assets/photos/photo2.jpg"),
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const nextImage = () => setCurrent((current + 1) % images.length);
  const prevImage = () =>
    setCurrent((current - 1 + images.length) % images.length);

  // Counter animation states
  const [batteryCount, setBatteryCount] = useState(0);
  const [oilCount, setOilCount] = useState(0);
  const batteryTarget = 950;
  const oilTarget = 100;

  React.useEffect(() => {
    let batteryInterval, oilInterval;
    // Animate batteries
    batteryInterval = setInterval(() => {
      setBatteryCount((prev) => {
        if (prev < batteryTarget) {
          const increment = prev < batteryTarget - 50 ? 13 : 1;
          return Math.min(prev + increment, batteryTarget);
        }
        clearInterval(batteryInterval);
        return prev;
      });
    }, 18);
    // Animate oils
    oilInterval = setInterval(() => {
      setOilCount((prev) => {
        if (prev < oilTarget) {
          const increment = prev < oilTarget - 10 ? 3 : 1;
          return Math.min(prev + increment, oilTarget);
        }
        clearInterval(oilInterval);
        return prev;
      });
    }, 50);
    return () => {
      clearInterval(batteryInterval);
      clearInterval(oilInterval);
    };
  }, []);

  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes arrowBounce {
        0% { transform: translateY(0); }
        30% { transform: translateY(-8px); }
        60% { transform: translateY(4px); }
        100% { transform: translateY(0); }
      }
      .slider-arrow-animated:hover {
        animation: arrowBounce 0.5s;
      }
      .slider-img-box {
        transition: box-shadow 0.3s, transform 0.3s;
      }
      .slider-img-box:hover {
        transform: scale(1.04);
        box-shadow: 0 0 32px 0 #7AC142, 0 0 24px #003366, 0 2px 16px rgba(0,0,0,0.18);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Dynamic glow color based on current image
  const glowColors = [
    "#7AC142", // Amaron green for first image
    "#0033A0", // Blue for second image
  ];
  const glowColor = glowColors[current] || "#7AC142";

  return (
    <ResponsiveContext.Consumer>
      {(size) => {
        const isMobile = size === "small";
        return (
          <Box
            id="home"
            align="center"
            justify="center"
            pad={{ vertical: "large", horizontal: "medium" }}
            background={{ color: "background", opacity: "strong" }}
            style={{ minHeight: "50vh", position: "relative" }}
          >
            <Heading
              level={1}
              size="large"
              color="brand"
              margin="none"
              style={{ fontWeight: 900 }}
            >
              2B POWER HOUSE
            </Heading>
            <Text
              size="large"
              color="text"
              margin={{ top: "medium", bottom: "large" }}
              style={{ fontWeight: 500 }}
            >
              Powering Vehicles & Homes with Trusted Brands.
            </Text>
            {/* Main content layout */}
            {isMobile ? (
              <>
                {/* Photo slider full row */}
                <Box
                  direction="row"
                  align="center"
                  justify="center"
                  background={{ color: "neutral-1", opacity: "strong" }}
                  pad="large"
                  round="large"
                  gap="large"
                  elevation="large"
                  style={{ maxWidth: "1200px", width: "100%" }}
                >
                  <Button
                    icon={
                      <FormPrevious
                        color="brand"
                        size="xxlarge"
                        style={{ strokeWidth: 2.5 }}
                      />
                    }
                    onClick={prevImage}
                    plain
                    style={{
                      background: "none",
                      border: "none",
                      fontWeight: "bold",
                    }}
                    className="slider-arrow-animated"
                  />
                  <Box
                    width="large"
                    height="medium"
                    round="large"
                    overflow="hidden"
                    background="black"
                    margin={{ horizontal: "small" }}
                    className="slider-img-box"
                    style={{
                      boxShadow: "0 0 24px #222",
                      transition: "box-shadow 0.3s, transform 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 32px 0 ${glowColor}, 0 0 24px #003366, 0 2px 16px rgba(0,0,0,0.18)`;
                      e.currentTarget.style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 24px #222";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <img
                      src={images[current]}
                      alt="Shop"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Button
                    icon={
                      <FormNext
                        color="brand"
                        size="xxlarge"
                        style={{ strokeWidth: 2.5 }}
                      />
                    }
                    onClick={nextImage}
                    plain
                    style={{
                      background: "none",
                      border: "none",
                      fontWeight: "bold",
                    }}
                    className="slider-arrow-animated"
                  />
                </Box>
                {/* Stats cards below, each in their own row */}
                {/* Removed duplicate stats cards for mobile layout */}
              </>
            ) : (
              <Box
                direction="row"
                align="center"
                justify="center"
                background={{ color: "neutral-1", opacity: "strong" }}
                pad="large"
                round="large"
                gap="large"
                elevation="large"
                style={{ maxWidth: "1200px", width: "100%" }}
              >
                {/* Photo slider */}
                <Box direction="row" align="center" justify="center" gap="none">
                  <Button
                    icon={
                      <FormPrevious
                        color="brand"
                        size="xxlarge"
                        style={{ strokeWidth: 2.5 }}
                      />
                    }
                    onClick={prevImage}
                    plain
                    style={{
                      background: "none",
                      border: "none",
                      fontWeight: "bold",
                    }}
                    className="slider-arrow-animated"
                  />
                  <Box
                    width="large"
                    height="medium"
                    round="large"
                    overflow="hidden"
                    background="black"
                    margin={{ horizontal: "small" }}
                    className="slider-img-box"
                    style={{
                      boxShadow: "0 0 24px #222",
                      transition: "box-shadow 0.3s, transform 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 32px 0 ${glowColor}, 0 0 24px #003366, 0 2px 16px rgba(0,0,0,0.18)`;
                      e.currentTarget.style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 0 24px #222";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <img
                      src={images[current]}
                      alt="Shop"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Button
                    icon={
                      <FormNext
                        color="brand"
                        size="xxlarge"
                        style={{ strokeWidth: 2.5 }}
                      />
                    }
                    onClick={nextImage}
                    plain
                    style={{
                      background: "none",
                      border: "none",
                      fontWeight: "bold",
                    }}
                    className="slider-arrow-animated"
                  />
                </Box>
                {/* Stats cards side-by-side */}
                <Box
                  direction="column"
                  gap="large"
                  align="center"
                  justify="center"
                >
                  <Card
                    background="neutral-1"
                    pad="large"
                    round="large"
                    elevation="medium"
                    style={{
                      minWidth: "200px",
                      minHeight: "120px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "2px solid var(--hpe-brand-color, #00C781)",
                      transition: "box-shadow 0.3s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 32px 0 #7AC142, 0 2px 16px rgba(0,0,0,0.18)";
                      e.currentTarget.style.transform = "scale(1.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <Text
                      size="xxlarge"
                      color="brand"
                      weight="bold"
                      alignSelf="center"
                      style={{ textAlign: "center", width: "100%" }}
                    >
                      {batteryCount}+
                    </Text>
                    <Text
                      size="large"
                      color="text"
                      alignSelf="center"
                      style={{ textAlign: "center", width: "110%" }}
                    >
                      Batteries Sold
                    </Text>
                  </Card>
                  <Card
                    background="neutral-1"
                    pad="large"
                    round="large"
                    elevation="medium"
                    style={{
                      minWidth: "200px",
                      minHeight: "120px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "2px solid var(--hpe-brand-color, #00C781)",
                      transition: "box-shadow 0.3s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 32px 0 #7AC142, 0 2px 16px rgba(0,0,0,0.18)";
                      e.currentTarget.style.transform = "scale(1.06)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "none";
                    }}
                  >
                    <Text
                      size="xxlarge"
                      color="brand"
                      weight="bold"
                      alignSelf="center"
                    >
                      {oilCount}+
                    </Text>
                    <Text
                      size="large"
                      color="text"
                      alignSelf="center"
                      style={{ textAlign: "center", width: "120%" }}
                    >
                      Lubricants Sold
                    </Text>
                  </Card>
                </Box>
              </Box>
            )}
          </Box>
        );
      }}
    </ResponsiveContext.Consumer>
  );
}

export default HeroSection;
