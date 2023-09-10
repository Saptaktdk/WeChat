import React, { useState } from 'react';
import { Box, Text } from "@chakra-ui/layout";
import { Tooltip, Menu, MenuButton } from "@chakra-ui/react"
import { Button } from "@chakra-ui/button"
import { BellIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons"


const SideDrawer = () => {

    const [search, setSearch] = useState(""); 
    const [searchResult, setSearchResult] = useState([]);
    const [ loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState();

    return <>
        <Box
            display="flex"
            justifyContent='space-between'
            alignItems='center'
            bg="white"
            w="100%"
            p="5px 10px 5px 10px"
            borderWidth="5px"
            >
            <Tooltip 
                label="Search Users to chat"
                hasArrow
                placement="bottom-end"
                >
                    <Button variant="ghost">
                    <SearchIcon />
                    <Text
                        d={{ base: "none", md: "flex"}}
                        px="4"
                        >
                            Search User
                    </Text>
                    </Button>        
            </Tooltip>

            <Text 
                fontSize="2xl" 
                fontFamily="Work sans"
                >
                    We-Chat
            </Text>

            <div>
                <Menu>
                    <MenuButton p={1}>
                        <BellIcon fontSize="2xl" m={1}/>
                    </MenuButton>
                </Menu>
            </div>
        </Box>
    </>
}

export default SideDrawer;