import React, { useState, useCallback } from "react";
import { Card, CardBody, CardFooter, CardHeader, Button, Text } from "grommet";
import { Close, Checkmark, Trash, Edit } from "grommet-icons";
import Modal from "../Modal/Modal";
import actionCreators from "../redux/actionCreators";

function TodoItem({ text, id, isCompleted }) {
  const [openModalTodo, setOpenModalTodo] = useState(false);
  const { removeTodo, toggleFieldIsCompleted } = actionCreators;

  const openAndCloseModalWindow = useCallback(() => {
    setOpenModalTodo((prevVal) => !prevVal);
  }, [setOpenModalTodo]);

  console.log(`${text} render`);
  return (
    <>
      <Card height="small" background="orange" pad="small">
        <CardHeader pad="small" justify="end">
          <Button
            icon={
              isCompleted ? (
                <Checkmark color="status-ok" />
              ) : (
                <Close color="red" />
              )
            }
            hoverIndicator
            onClick={() => {
              toggleFieldIsCompleted(id);
            }}
          />
        </CardHeader>
        <CardBody>
          <Text truncate="tip">{text} </Text>
        </CardBody>
        <CardFooter pad={{ horizontal: "small" }}>
          <Button
            icon={<Edit color="dark-1" />}
            hoverIndicator
            onClick={() => {
              openAndCloseModalWindow();
            }}
          />
          <Button
            icon={<Trash color="dark-1" />}
            hoverIndicator
            onClick={() => {
              removeTodo(id);
            }}
          />
        </CardFooter>
      </Card>
      {openModalTodo && (
        <Modal
          openAndCloseModalWindow={openAndCloseModalWindow}
          text={text}
          id={id}
        />
      )}
    </>
  );
}

export default React.memo(TodoItem);
