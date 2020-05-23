import React from "react";
import { Form, FormControl, Container, Row } from "react-bootstrap";

const SearchPage = () => {
  return (
    <Container fluid>
      <Row>
        <Form inline>
          <FormControl
            type="search"
            style={{ backgroundColor: "#f7f7f7" }}
            id="search2"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
      </Row>
    </Container>
  );
};

export default SearchPage;
