import React, { useEffect } from 'react';
import { ChatState } from "../context/ChatProvider";
import { Box } from "@chakra-ui/layout"
import SideDrawer from "../components/miscelleneous/SideDrawer";
import MyChats from "../components/miscelleneous/MyChats";
import ChatBox from "../components/miscelleneous/ChatBox";


const ChatPage = () => {
  const { user } = ChatState()

 /*  useEffect(() => {
    console.log("user: " , user);
    
  }, []) */
  

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer/>}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
      {user && <MyChats/>}
      {user && <ChatBox/>}
      </Box>
    </div>
  )
}

export default ChatPage;