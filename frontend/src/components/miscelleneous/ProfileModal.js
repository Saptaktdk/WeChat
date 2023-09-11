import React from 'react'
import { useDisclosure } from "@chakra-ui/hooks";
import { IconButton } from "@chakra-ui/button";
import { ViewIcon } from "@chakra-ui/icons";


const ProfileModal = ({ user, children }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            {
                children ? ( 
                <span onClick={onOpen}>{children}</span> 
                ) : (
                    <IconButton 
                        d={{ base: "flex" }}
                        icon= {<ViewIcon />}
                        onClick={onOpen}
                    />
                )}
        </>
    );
    
};

export default ProfileModal;