import  { useContext } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Button,
  Stack,
  Flex,
} from "@chakra-ui/react";
import "./styles.css";
import { FiEdit3, FiSettings } from "react-icons/fi";
// import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs';
// import { RiShutDownLine, RiRestartLine, RiFileShredLine } from 'react-icons/ri';
import { useNavigate } from "react-router-dom";
import AppContext from "../../AppContext"; 

export default function ServerSecondaryOptions() {
  const [openPage,setOpenPage] = useContext(AppContext)
  const navigate = useNavigate()
  const handleClick =()=>{
    navigate('/about')
    setOpenPage({openPage:true})
  }
  return (
    /**
     * You may move the Popover outside Flex.
     */
    <Flex justifyContent="center" mt={4}>
      <Popover placement="bottom" isLazy>
        <PopoverTrigger>
          <Button
            w="194px"
            variant="ghost"
            leftIcon={<FiSettings />}
            // justifyContent="space-between"
            fontWeight="normal"
            // colorScheme="red"

            fontSize="sm"
            _hover={{
              bg: "cyan.400",
              color: "white",
            }}
          >
            Students
          </Button>
        </PopoverTrigger>
        <PopoverContent w="fit-content" _focus={{ boxShadow: "none" }}>
          <PopoverArrow />
          <PopoverBody>
            <Stack>
              <Button
                w="194px"
                variant="ghost"
                rightIcon={<FiEdit3 />}
                justifyContent="space-between"
                fontWeight="normal"
                fontSize="sm"
              >
                Edit Student
              </Button>
              <Button
                w="194px"
                variant="ghost"
                // rightIcon={<RiFileShredLine />}
                justifyContent="space-between"
                fontWeight="normal"
                // colorScheme="red"
                fontSize="sm"
                onClick={handleClick}
              >
                List of Students
              </Button>
              <Button
                w="194px"
                variant="ghost"
                // rightIcon={<RiRestartLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
              >
                Restart Server
              </Button>
              <Button
                w="194px"
                variant="ghost"
                // rightIcon={<RiShutDownLine />}
                justifyContent="space-between"
                fontWeight="normal"
                colorScheme="red"
                fontSize="sm"
              >
                Disable Server
              </Button>
            </Stack>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}
