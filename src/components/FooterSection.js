import React from "react";
import { Box, Text, Anchor } from "grommet";
import { Instagram } from "grommet-icons";

function FooterSection() {
  return (
    <Box
      as="footer"
      pad={{ vertical: "large", horizontal: "xlarge" }}
      background="dark-2"
      align="center"
      style={{
        boxShadow: "0 -4px 24px rgba(0,0,0,0.18)",
        marginTop: 48,
        zIndex: 10,
        position: "relative",
      }}
    >
      <Box
        direction="row"
        gap="xsmall"
        align="center"
        margin={{ top: "small" }}
      >
        <Text color="text" size="small">
          © {new Date().getFullYear()} 2B POWER HOUSE - GSTIN: 33BCEPV9918H1Z5
        </Text>
      </Box>
    </Box>
  );
}

export default FooterSection;
