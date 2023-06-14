import { Box, Button, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAdd, onDelete, onEdit } from "../redux/todoSlice"

export const Home = () => {
  const input = useRef();
  const dispatch = useDispatch()
  const data = useSelector((state) => state.todo.value)

  const add = () => {
    const word = input.current.value
    dispatch(onAdd(word))
    input.current.value = ""
  };

  const remove = (index) => {
    dispatch(onDelete(index))
  }

  const edit = (index) => {
    const input = prompt("Masukan Edit Disini")
    dispatch(onEdit({ index, input }))
  }

  return (
    <Stack alignItems="center" w="100vw" h="100vh" bgColor="blue.500">
      <Heading>TO DO LIST APP</Heading>
      <Flex>
        <Input w="40vw" ref={input} />
        <Button ml="2" onClick={add}>
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
              <Button onClick={() => remove(i)}>Delete</Button>
              <Button onClick={() => edit(i)}>Edit</Button>
            </Flex>
          );
        })}
      </Box>
    </Stack>
  );
};