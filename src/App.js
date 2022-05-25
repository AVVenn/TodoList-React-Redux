import React from "react";

import { Box, Grommet } from "grommet";
import AddTodo from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
import Filter from "./Filter/Filter";

import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <Grommet theme={theme} background="dark-1" full>
        <Box pad="small">
          <Filter />
          <AddTodo />
          <TodoList />
        </Box>
      </Grommet>
    </>
  );
}

export default App;
