import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import InputSearch from "../components/InputSearch";

const Search = (props) => {
  console.warn("cek search props", props);
  return (
    <div>
      <InputSearch {...props} />
      {/* <input
        autoComplete="off"
        value={props.lokasi}
        onChange={props.inputLokasi}
        type="text"
        name="lokasi"
        id="lokasi"
        list="datalist1"
      />
      <datalist id="datalist1">
        {props.listLokasi.map((item, key) => (
          <option value={item.lokasi_restoran} />
        ))}
      </datalist> */}
      <Link to="/Restoran">
        <Button
          onClick={() => props.getListCategory("", props.lokasi)}
          className="button-search mt-2"
          type="submit"
        >
          Cari
        </Button>
      </Link>
    </div>
  );
};

export default Search;
