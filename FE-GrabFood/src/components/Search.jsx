import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Search = (props) => {
  // const changeRouter = async (category, lokasi) => {
  //   if (props.getListCategory) {
  //     props.getListCategory(category, lokasi);
  //   } else {
  //     // await props.history.replace("/" + category);
  //   }
  // };
  console.warn("cek search props", props);
  return (
    <div>
      <input
        autoComplete="off"
        value={props.lokasi}
        onChange={(el) => props.inputLokasi(el)}
        type="text"
        name="lokasi"
        id="lokasi"
        list="datalist1"
      />
      <datalist id="datalist1">
        {props.listLokasi.map((item, key) => (
          <option value={item.lokasi_restoran} />
        ))};
        {/* <option value="China" />
        <option value="Mexico" />
        <option value="United Kingdom" />
        <option value="United States of America" />
        <option value="Uruguay" /> */}
      </datalist>
      <Link to ="/Restoran">
        <Button  onClick={() => props.getListCategory("" , props.lokasi)} className="button-search mt-2" type="submit">
          cari
        </Button>
      </Link>
    </div>
    // <Form inline>
    //   <FormControl
    //     type="text"
    //     placeholder="Search"
    //     name="lokasi"
    //     value={props.lokasi}
    //     className=" input-search"
    //     // onChange={() => console.log("dssdsdsdsd", props.lokasi)}
    //     onChange={(el) => props.inputLokasi(el)}
    //   />
    //   <Button className="button-search mt-2" type="submit">
    //     cari
    //   </Button>
    // </Form>
  );
};

export default Search;
