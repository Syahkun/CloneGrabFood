import React from "react";
import { Form, FormControl, Container, Row } from "react-bootstrap";

const SearchPage = (props) => {
  console.warn("ini props searchpage", props);
  return (
    <Container fluid style={{ marginTop: "40px" }}>
      <Row>
        <Form inline>
          <FormControl
            type="search"
            onChange={props.inputKeyword}
            value={props.search}
            name="keyword"
            id="search2"
            placeholder="Cari makanan atau resto"
            className="mr-sm-2 W-100"
          />
          <img
            className="images-search2"
            src="https://www.flaticon.com/premium-icon/icons/svg/954/954591.svg"
            alt="..."
          />
        </Form>
      </Row>
    </Container>
  );
};

export default SearchPage;
