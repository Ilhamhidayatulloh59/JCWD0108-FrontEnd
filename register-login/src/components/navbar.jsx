import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const data = useSelector((state) => state.user.value);

  const handleClick = (to) => {
    navigate(to);
  };
  return (
    <Flex
      w="100vw"
      h="80px"
      bgColor="blue.400"
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex w="50%" ml="3">
        Ini Logo
      </Flex>
      <Flex w="50%" justifyContent="flex-end" gap="3" mr="3">
        {id ? (
          <>
            <Avatar />
            <Text>{data.username}</Text>
          </>
        ) : (
          <>
            <Button onClick={() => handleClick("/login")}>Login</Button>
            <Button onClick={() => handleClick("/register")}>Register</Button>
          </>
        )}
      </Flex>
    </Flex>
  );
};
