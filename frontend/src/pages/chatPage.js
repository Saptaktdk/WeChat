import React from 'react';
import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/layout"


const ChatPage = () => {
  const { user } = ChatState()

  return (
    <div style={{ width: "100%" }}>
      {/* {user && <SideDrawer/>} */}
      <Box>
      {/* {user && <MyChats/>} */}
      {/* {user && <ChatBox/>} */}
      </Box>
    </div>
  )
}

export default ChatPage;