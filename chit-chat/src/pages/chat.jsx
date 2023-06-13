import { Button, Heading, HStack, Stack, Textarea } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Navigate, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

export const Chat = () => {
  //   const navigate = useNavigate();
  const [move, setMove] = useState(false);
  const [message, setMessage] = useState("")
  const input = useRef()

  const onAdd = () => {
    // navigate("/list")
    setMove(true);
    setMessage(input.current.value)
  };

  return move ? (
    <Navigate to="/list" state={message} />
  ) : (
    <Stack w="100vw" alignItems="center">
      <Stack w="50vw" h="40vh" bgColor="black" alignItems="center" p="5">
        <Heading fontSize="6xl" color="white">
          ChitChat Express Your Feeling
        </Heading>
        <HStack w="inherit" justifyContent="center" alignItems="end">
          <Textarea ref={input} w="60%" bgColor="white" placeholder="what's on your mind" />
          <Button
            onClick={onAdd}
            colorScheme="blue"
            w="14"
            h="14"
            borderRadius="50%"
            p="2"
          >
            <ArrowForwardIcon w="10" h="10" />
          </Button>
        </HStack>
      </Stack>
    </Stack>
  );
};
