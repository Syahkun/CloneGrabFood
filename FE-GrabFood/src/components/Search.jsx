import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";

const Search = (props) => {
  console.warn("cek search props", props);
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        name="lokasi"
        value={props.lokasi}
        className=" input-search"
        // onChange={() => console.log("dssdsdsdsd", props.lokasi)}
        onChange={(el) => props.inputLokasi(el)}
      />
      <Button className="button-search mt-2" type="submit">
        cari
      </Button>
    </Form>
  );
};

export default Search;
