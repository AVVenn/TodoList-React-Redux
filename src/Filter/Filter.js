import React, { useState } from "react";
import { Box, TextInput, Select } from "grommet";
import { Search } from "grommet-icons";
import { FILTER_TYPE } from "../constants/filter";
import { useSelector } from "react-redux";
import { selectFilter, selectFilterText } from "../redux/todoSelectors";
import actionCreators from "../redux/actionCreators";

function Filter() {
  const { todoFilterChange, searchQueryChange } = actionCreators;
  const { currentFilter } = useSelector(selectFilter);
  const { queryString } = useSelector(selectFilterText);

  return (
    <Box
      direction="row"
      gap="small"
      margin={{ top: "small", bottom: "medium" }}
    >
      <TextInput
        value={queryString}
        onChange={({ target: { value } }) => {
          searchQueryChange(value);
        }}
        placeholder="Найти"
        size="large"
        icon={<Search />}
      />
      <Select
        options={Object.values(FILTER_TYPE)}
        value={currentFilter}
        onChange={({ option }) => {
          todoFilterChange(option);
        }}
      />
    </Box>
  );
}

export default Filter;
