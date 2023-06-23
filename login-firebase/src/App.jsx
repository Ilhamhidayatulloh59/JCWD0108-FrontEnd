import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Text,
  useColorModeValue,
  Center,
  Heading,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import { useRef, useState } from "react";
const provider = new GoogleAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const email = useRef();
  const password = useRef();

  onAuthStateChanged(auth, (userLogin) => {
    setUser(userLogin);
  });

  const onRegister = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );

      email.current.value = ""
      password.current.value = ""
    } catch (err) {
      console.log(err);
    }
  };

  const onLogin = async () => {
    try {
      await signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      );

      email.current.value = ""
      password.current.value = ""
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
      <Stack spacing={8} mx={"auto"} maxW={"lg"} w="50vw" py={12} px={6}>
        <Heading>{user?.email}</Heading>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={email} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={password} />
            </FormControl>
            <Stack spacing={2}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onRegister}
              >
                Sign up
              </Button>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={onLogin}
              >
                Sign in
              </Button>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => signOut(auth)}
              >
                Sign out
              </Button>
              <Button
                w={"full"}
                maxW={"md"}
                variant={"outline"}
                leftIcon={<FcGoogle />}
                onClick={() => signInWithPopup(auth, provider)}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default App;
