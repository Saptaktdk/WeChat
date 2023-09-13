import React, { useState } from 'react';
import { Box, Text } from "@chakra-ui/layout";
import { 
    Tooltip, 
    Menu, 
    MenuButton, 
    MenuList,
    MenuItem,
    MenuDivider, 
    Input,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useToast
 } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { BellIcon, ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { ChatState } from "../../context/ChatProvider";
import ProfileModal from "./ProfileModal";
import { useHistory } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/hooks"
import axios from "axios";
import ChatLoading from "./ChatLoading";
import UserListItem from "../UserAvatar/UserListItem";


const SideDrawer = () => {

    const [search, setSearch] = useState(); 
    const [searchResult, setSearchResult] = useState([]);
    const [ loading, setLoading] = useState(false);
    const [loadingChat, setLoadingChat] = useState();

    const { user } = ChatState();
    const history = useHistory();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const toast = useToast();

    const logoutHandler = () => {
        localStorage.removeItem("userInfo");
        history.push("/");
    }

    const handleSearch = async () => {
        if (!search) {
            toast({
                title: "Please enter something to search",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "top-left"
            });
        }
        try {
            setLoading(true);

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
            };

            const { data } = await axios.get(`/api/user?search=${search}`, config);

            setLoading(false);
            setSearchResult(data);

        } catch (error) {
            toast({
                title: "Error Occured!",
                description: "Failed to load search results",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-left"
            });
        }
    }

    const accessChat = (userId) => {};

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
                    <Button variant="ghost" onClick={onOpen}>
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
                <Menu>
                    <MenuButton
                        as={Button}
                        rightIcon={<ChevronDownIcon/>}>
                            <Avatar 
                                size="sm" 
                                cursor="pointer" 
                                name={user.name}
                                src={user.pic}/>
                    </MenuButton>
                    <MenuList>
                        <ProfileModal user={user}>
                        <MenuItem>My profile</MenuItem>
                        </ProfileModal>
                        <MenuDivider />
                        <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </Box>

        <Drawer 
            placement="left"
            onClose={onClose}
            isOpen={isOpen}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerHeader /* borderBotttomWidth="1px" */>Search User</DrawerHeader>
                <DrawerBody>
                    <Box display="flex" pb={2}>
                        <Input
                            placeholder="Search by name or email"
                            mr={2}
                            value={search}
                            onChange={(e) => setSearch(e.target.value) }
                        />
                        <Button onClick={handleSearch}>Go</Button>
                    </Box>
                    {loading ? (
                        <ChatLoading/>
                    ): (
                        searchResult?.map(user => (
                            <UserListItem 
                                key={user._id}
                                user={user}
                                handleFunction={() => accessChat(user._id)}
                            /> 
                        ))
                    )}
                </DrawerBody> 
            </DrawerContent>

        </Drawer>
    </>
}

export default SideDrawer;