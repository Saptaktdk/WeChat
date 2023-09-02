import React from 'react'
import { 
        Container, 
        Box, 
        Text, 
        Tabs, 
        TabList, 
        TabPanels, 
        Tab, 
        TabPanel } from '@chakra-ui/react';
import Login from '../components/authentication/Login'
import SignUp from '../components/authentication/SignUp'


const homePage = () => {
  return <Container maxW='xl' centerContent>
    <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
            <Text 
                d="flex"
                textAlign="center"
                fontSize="4x1"
                fontFamily="Work sans"
                fontWeight="bold"
                textColor="black">
                    We-Chat
            </Text>
    </Box>
    <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px">
                <Tabs variant='soft-rounded'>
                    <TabList mb="1em">
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">SignUp</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Login /></TabPanel>
                        <TabPanel><SignUp /></TabPanel>
                    </TabPanels>
                </Tabs>
    </Box>
  </Container>;
}

export default homePage