import React from "react";
import { Form, FormControl, Container, Row, Button } from "react-bootstrap";

const SearchPage = (props) => {
  console.warn("ini props searchpage", props);
  return (
    <Container fluid>
      <Row>
        <Form inline>
          <FormControl
            type="search"
            onChange={props.inputKeyword}
            value={props.keyword}
            name="keyword"
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
        <Button
          onClick={() => props.handleRequestSearch(props.keyword, props.lokasi)}
          className="button-search mt-2"
          type="submit"
        >
          cari
        </Button>
      </Row>
    </Container>
  );
};

export default SearchPage;
