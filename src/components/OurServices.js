import React from "react";
import { Box, Card, CardBody, CardHeader, Text, Grid } from "grommet";
import {
  Battery,
  Workshop,
  Plug,
  StatusGood,
  Storage,
  Actions,
  DocumentTest,
  Power,
  Deliver,
} from "grommet-icons";

const services = [
  {
    icon: (
      <Storage
        color="#FFB400"
        size="xxlarge"
      />
    ),
    title: "Battery Installation",
    desc: "Car, bike, and inverter battery installation.",
  },
  {
    icon: (
      <Power
        color="#FFB400"
        size="xxlarge"
      />
    ),
    title: "Jump Start Assistance",
    desc: "On-site emergency battery jump start service.",
  },
  {
    icon: (
      <DocumentTest
        color="#FFB400"
        size="xxlarge"
      />
    ),
    title: "Oil Change & Top-up",
    desc: "Engine oil change and top-up services.",
  },
  {
    icon: (
      <Plug
        color="#FFB400"
        size="xxlarge"
      />
    ),
    title: "UPS Setup & Support",
    desc: "UPS installation and after-sales support.",
  },
  {
    icon: (
      <Deliver
        color="#FFB400"
        size="xxlarge"
      />
    ),
    title: "On-Site Delivery & Installation",
    desc: "We deliver and install batteries and UPS units at your location.",
  },
  {
    icon: (
      <StatusGood
        color="#FFB400"
        size="xxlarge"
      />
    ),
    title: "Battery Warranty Claims",
    desc: "Hassle free warranty claims for batteries.",
  },
];

function OurServices() {
  return (
    <Box id="services" pad={{ vertical: "large" }} align="center">
      <style>{`
        .service-card {
          transition: box-shadow 0.3s, transform 0.2s;
        }
        .service-card:hover {
          box-shadow: 0 0 32px 0 #FFB400, 0 2px 8px rgba(0,0,0,0.12);
          transform: scale(1.06);
        }
        .service-icon {
          transition: filter 0.3s;
        }
        .service-card:hover .service-icon {
          filter: drop-shadow(0 0 16px #FFB400);
        }
      `}</style>
      <Text
        size="xxlarge"
        color="brand"
        weight="bold"
        margin={{ bottom: "medium" }}
        style={{ fontWeight: 900 }}
      >
        Our Services
      </Text>
      <Box width="100%" align="center">
        <Grid columns={["medium", "medium", "medium"]} gap="large">
          {services.map((service, idx) => (
            <Card
              key={service.title}
              background="neutral-1"
              elevation="large"
              pad="large"
              round="large"
              className="service-card"
              style={{
                minWidth: "220px",
                minHeight: "200px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardHeader align="center" justify="center" pad="none">
                <span className="service-icon">{service.icon}</span>
              </CardHeader>
              <CardBody align="center" justify="center">
                <Text
                  size="large"
                  color="brand"
                  weight="bold"
                  margin={{ top: "medium", bottom: "small" }}
                  style={{ fontWeight: 700, textAlign: "center" }}
                >
                  {service.title}
                </Text>
                <Text
                  size="medium"
                  color="text"
                  style={{ textAlign: "center" }}
                >
                  {service.desc}
                </Text>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default OurServices;
