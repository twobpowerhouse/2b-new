import React from "react";
import { Box, Card, CardBody, Text, Grid } from "grommet";
import {
  ShieldSecurity,
  Trigger,
  Support,
  Money,
  Currency,
  Calendar,
  Search,
  SearchAdvanced,
  Aid,
} from "grommet-icons";

const reasons = [
  {
    icon: <ShieldSecurity color="#FFB400" size="xxlarge" />,
    title: "Authorised Dealer",
  },
  {
    icon: <Calendar color="#FFB400" size="xxlarge" />, // lock
    title: "Fresh Stock",
  },
  {
    icon: <Trigger color="#FFB400" size="xxlarge" />, // lightning
    title: "Fast Installation",
  },
  {
    icon: <Support color="#FFB400" size="xxlarge" />, // handshake
    title: "Local Support",
  },
  {
    icon: <Currency color="#FFB400" size="xxlarge" />, // money
    title: "Competitive Prices",
  },
  {
    icon: <Aid color="#FFB400" size="xxlarge" />, // money
    title: "Free Battery Checkup",
  },
];

function getCenteredGridItems(items, columns) {
  const rows = Math.ceil(items.length / columns);
  const lastRowCount = items.length % columns || columns;
  const spacers = columns - lastRowCount;
  const gridItems = [];
  for (let r = 0; r < rows; r++) {
    const start = r * columns;
    const end = start + columns;
    const rowItems = items.slice(start, end);
    if (r === rows - 1 && spacers && lastRowCount !== columns) {
      // Add spacers before and after last row
      for (let i = 0; i < Math.floor(spacers / 2); i++) {
        gridItems.push(<Box key={`spacer-left-${i}`} />);
      }
      rowItems.forEach((item) => gridItems.push(item));
      for (let i = 0; i < Math.ceil(spacers / 2); i++) {
        gridItems.push(<Box key={`spacer-right-${i}`} />);
      }
    } else {
      rowItems.forEach((item) => gridItems.push(item));
    }
  }
  return gridItems;
}

function WhyChooseUs() {
  return (
    <Box
      id="why"
      pad={{ vertical: "large" }}
      align="center"
      background="neutral-2"
    >
      <style>{`
        .why-icon {
          transition: filter 0.3s;
        }
        .why-card:hover .why-icon {
          filter: drop-shadow(0 0 16px #FFB400);
        }
        .why-card {
          transition: box-shadow 0.3s, transform 0.2s;
        }
        .why-card:hover {
          box-shadow: 0 0 32px 0 #FFB400, 0 2px 8px rgba(0,0,0,0.12);
          transform: scale(1.06);
        }
      `}</style>
      <Text
        size="xxlarge"
        color="brand"
        weight="bold"
        margin={{ bottom: "medium" }}
        style={{ fontWeight: 900 }}
      >
        Why Choose Us?
      </Text>
      <Box width="100%" align="center">
        <Grid columns={["medium", "medium", "medium"]} gap="large">
          {getCenteredGridItems(
            reasons.map((reason) => (
              <Card
                key={reason.title}
                background="neutral-1"
                elevation="large"
                pad="large"
                round="large"
                className="why-card"
                style={{
                  minWidth: "220px",
                  minHeight: "200px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CardBody align="center" justify="center">
                  <span className="why-icon why-icon-hover">{reason.icon}</span>
                  <Text
                    size="large"
                    color="brand"
                    weight="bold"
                    margin={{ top: "medium" }}
                    style={{ fontWeight: 700 }}
                  >
                    {reason.title}
                  </Text>
                </CardBody>
              </Card>
            )),
            3
          )}
        </Grid>
      </Box>
    </Box>
  );
}

export default WhyChooseUs;
