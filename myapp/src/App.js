import { Box, Button, CircularProgress, Heading } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux'
import { Home } from "./components/todo";
import { increment, decrement, incrementBy, decrementBy } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const setLocalStorage = () => {
    localStorage.setItem("name", "budi")
  }

  const deleteLocalStorage = () => {
    localStorage.removeItem("name")
  }

  return (
    <Box>
      <CircularProgress value={count} />

      <Heading>
        { count }
      </Heading>

      <Heading>
        { localStorage.getItem("name") }
      </Heading>

      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrementBy(5))}>Decrement By 5</Button>
      <Button onClick={() => dispatch(incrementBy(5))}>Increment By 5</Button>
      <Button onClick={setLocalStorage} >set localStorage</Button>
      <Button onClick={deleteLocalStorage} >delete localStorage</Button>
      <Home />
    </Box>
  );
}

export default App;
