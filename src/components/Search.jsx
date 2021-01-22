import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Form } from "react-bootstrap";

const Search = () => {
  const { searchKey, searchProfiles } = useContext(GlobalContext);
  const [localSearch, setLocalSearch] = useState("");

  const searchStateProfiles = (e) => {
    setLocalSearch(e.target.value);
    searchProfiles(e.target.value);
  };

  return (
    <Form className="mb-3">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="custom-bold">Search by full name</Form.Label>
        <Form.Control
          type="type"
          placeholder="E.g. Elon Musk"
          value={localSearch}
          onChange={(e) => searchStateProfiles(e)}
        />
      </Form.Group>
    </Form>
  );
};

export default Search;
