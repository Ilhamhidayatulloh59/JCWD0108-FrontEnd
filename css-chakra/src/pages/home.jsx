import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { useState, useRef } from "react";

export const Home = () => {
  const [data, setData] = useState(["Coding", "Eat", "Sleep"]);
  const input = useRef();

  const onAdd = () => {
    const word = input.current.value

    setData([...data, word ]);
    input.current.value = "";
  };

  const onDelete = (index) => {
    const arr = [...data]
    arr.splice(index, 1)
    setData(arr)
  }

  return (
    <Stack alignItems="center" w="100vw" h="100vh" bgColor="blue.500">
      <Heading>TO DO LIST APP</Heading>
      <Flex>
        <Input w="40vw" ref={input} />
        <Button ml="2" onClick={onAdd}>
          Add
        </Button>
      </Flex>
      <Box>
        {data.map((v, i) => {
          return (
            <Flex justifyContent="center" alignItems="center">
              <Flex
                w="40vw"
                m="2"
                h="40px"
                justifyContent="center"
                alignItems="center"
                borderRadius="md"
                border="1px solid white"
                fontWeight="bold"
                fontSize="2xl"
              >
                {v}
              </Flex>
              <Button onClick={() => onDelete(i)}>Delete</Button>
            </Flex>
          );
        })}
      </Box>
    </Stack>
  );
};
