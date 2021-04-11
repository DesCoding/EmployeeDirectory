import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function Nav(props) {
  return (
    <Navbar className="bg-light justify-content-between">
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className=" mr-sm-2"
          onChange={props.handleInputChange}
        />
        <Button type="submit" onClick={props.handleFormSubmit}>
          Submit
        </Button>
      </Form>
    </Navbar>
  );
}

export default Nav;