import React from "react";
import { Form, FormControl, Container, Row } from "react-bootstrap";

const SearchPage = () => {
  return (
    <Container fluid>
      <Row>
        <Form inline>
          <FormControl
            type="search"
            style={{
              backgroundColor: "#f7f7f7",
              marginTop: "50px",
              width: "210vmin",
            }}
            id="search2"
            placeholder="Search"
            className="mr-sm-2 W-100"
          />
        </Form>
      </Row>
    </Container>
  );
};

export default SearchPage;
