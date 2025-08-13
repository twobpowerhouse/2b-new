import React, { useEffect } from "react";
import { Box, Button, Grommet } from "grommet";

const CHATBASE_ID = "LjaM8svtZzI2vwl_F2iTe"; // Your Chatbase chatbot ID

const ChatbaseBubble = () => {
  useEffect(() => {
    if (document.getElementById("chatbase-bubble-script")) return;

    const script = document.createElement("script");
    script.id = "chatbase-bubble-script";
    script.src = `https://www.chatbase.co/embed.min.js`;
    script.setAttribute("chatbotId", CHATBASE_ID);
    script.setAttribute("domain", "www.chatbase.co");
    script.defer = true;

    script.onload = () => {
      console.log("Chatbase loaded");
    };

    document.body.appendChild(script);
  }, []);

  const openBot = () => {
    if (window.chatbase) {
      window.chatbase("open");
    }
  };

  const closeBot = () => {
    if (window.chatbase) {
      window.chatbase("close");
    }
  };

  return (
    <Grommet>
      <Box direction="row" gap="small" pad="medium">
        <Button label="Open Chatbot" primary onClick={openBot} />
        <Button label="Close Chatbot" color="status-critical" onClick={closeBot} />
      </Box>
    </Grommet>
  );
};

export default ChatbaseBubble;
