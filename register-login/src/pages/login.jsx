import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setValue } from "../redux/userSlice";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onLogin = async () => {
    try {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const response = await Axios.get(
        `http://localhost:2000/users?email=${email}&password=${password}`
      );
      console.log(response.data);
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";

      dispatch(setValue(response.data[0]));
      localStorage.setItem("id", response.data[0].id)
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} w="500px">
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={onLogin}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                login
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
