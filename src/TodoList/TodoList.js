import React from "react";
import { Box, Grid, Text } from "grommet";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { selectFilteredTodosByQueryString } from "../redux/todoSelectors";

function TodoList() {
  const filteredTodos = useSelector(selectFilteredTodosByQueryString);

  if (!filteredTodos.length) {
    return (
      <Text size="4xl" textAlign="center" margin={{ vertical: "medium" }}>
        Заметок нет
      </Text>
    );
  }

  return (
    <Box>
      <Grid
        gap="medium"
        fill="horizontal"
        columns={{
          count: 4,
          size: "auto",
        }}
      >
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            isCompleted={todo.isCompleted}
            id={todo.id}
          />
        ))}
      </Grid>
    </Box>
  );
}
export default React.memo(TodoList);
