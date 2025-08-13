import React from "react";
import { Box, Text, Button, Card, CardBody, CardHeader, Anchor } from "grommet";
import {
  Location,
  Phone,
  Chat,
  Map,
  Clock,
  MailOption,
} from "grommet-icons";

function ContactSection() {
  React.useEffect(() => {
    // Add highlight style for social links
    const style = document.createElement("style");
    style.innerHTML = `
      .social-link-custom {
        text-decoration: none !important;
        border-radius: 6px;
        padding: 4px 14px;
        transition: background 0.2s, box-shadow 0.2s, color 0.2s;
        font-weight: 400;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .social-link-custom:hover {
        background: #00C781;
        color: #fff !important;
        box-shadow: 0 0 12px #00C781;
        text-decoration: none !important;
      }
      .social-link-custom:hover svg {
        color: #fff !important;
        fill: #fff !important;
        stroke: #fff !important;
      }
      .social-link-custom svg {
        vertical-align: middle;
        transition: color 0.2s, fill 0.2s, stroke 0.2s;
      }
      .mail-link-custom {
        text-decoration: none !important;
        color: #666 !important;
        transition: color 0.2s;
      }
      .mail-link-custom:hover {
        color: #00C781 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <Box id="contact" pad={{ vertical: "large" }} align="center">
      <Text
        size="xxlarge"
        color="brand"
        weight="bold"
        margin={{ bottom: "medium" }}
      >
        Contact Us
      </Text>
      <Box direction="row" gap="large" justify="center" wrap>
        {/* Info Card */}
        <Card
          background="neutral-1"
          elevation="large"
          pad="medium"
          width="medium"
          style={{
            minWidth: 400,
            transition: "box-shadow 0.3s, transform 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 32px 0 #7AC142, 0 2px 16px rgba(0,0,0,0.18)";
            e.currentTarget.style.transform = "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.18)";
            e.currentTarget.style.transform = "none";
          }}
        >
          <CardHeader pad="small" align="center" gap="medium">
            <Location color="brand" />
            <Text color="brand" weight="bold">
              2B POWER HOUSE - AMARON BATTERIES & LUBRICANTS
            </Text>
          </CardHeader>
          <CardBody pad="small" gap="medium">
            <Box direction="row" gap="small" align="center">
              <Map color="brand" />
              <Text color="text">
                Old Dindigul- Karur road, Gujiliamparai, Dindigul, Tamilnadu -
                624703
              </Text>
            </Box>

            <Box direction="row" gap="small" align="center">
              <Clock color="brand" />
              <Text color="text">Mon-Sat: 9am - 6pm | Sun: Holiday</Text>
            </Box>
            <Box direction="row" gap="small" align="center">
              <MailOption color="brand" />
              <Anchor
                href="mailto:2bpowerhouse@gmail.com"
                label={<>2bpowerhouse@gmail.com</>}
                color="text"
                target="_blank"
                style={{ textDecoration: 'none' }}
                className="mail-link-custom"
              />
            </Box>
            <Box direction="row" gap="small" align="center">
              <Box direction="row" gap="small" align="center">
                <Button
                  href="tel:+917010020798"
                  label={
                    <>
                      <Phone color="brand" />
                      7010020798
                    </>
                  }
                  color="text"
                  target="_blank"
                  className="social-link-custom"
                />
              </Box>

              <Box direction="row" gap="small" align="center">
                <Button
                  href="https://youtube.com/"
                  label={
                    <>
                      <Chat color="brand" />
                      Chat Now
                    </>
                  }
                  color="text"
                  target="_blank"
                  className="social-link-custom"
                />
              </Box>
            </Box>

            {/* Social Links Only */}
          </CardBody>
        </Card>
        {/* Google Map Card */}
        <Card
          background="neutral-1"
          elevation="large"
          pad={window.innerWidth < 700 ? "medium" : "large"}
          width={window.innerWidth < 700 ? "100%" : "large"}
          style={{
            minWidth: window.innerWidth < 700 ? 0 : 400,
            width: window.innerWidth < 700 ? "100%" : undefined,
            alignItems: "center",
            justifyContent: "center",
            transition: "box-shadow 0.3s, transform 0.2s",
            marginBottom: window.innerWidth < 700 ? 16 : 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 32px 0 #7AC142, 0 2px 16px rgba(0,0,0,0.18)";
            e.currentTarget.style.transform = "scale(1.06)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.18)";
            e.currentTarget.style.transform = "none";
          }}
        >
          <CardHeader pad="small" align="center" justify="center">
            <Text color="brand" weight="bold">
              Google Maps Location
            </Text>
          </CardHeader>
          <CardBody pad="small" align="center" justify="center">
            <Box
              align="center"
              justify="center"
              style={{
                width: window.innerWidth < 700 ? "100%" : "200%",
                height: window.innerWidth < 700 ? 140 : 200,
                maxWidth: "100vw",
              }}
            >
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=2B+Power+House+Gujiliamparai&output=embed"
                width={window.innerWidth < 700 ? "100%" : "200%"}
                height={window.innerWidth < 700 ? 140 : 200}
                style={{ border: 0, borderRadius: 8, width: "100%" }}
                allowFullScreen="true"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}

export default ContactSection;
