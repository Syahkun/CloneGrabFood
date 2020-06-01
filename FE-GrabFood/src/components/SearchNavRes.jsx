import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import InputSearch from "../components/InputSearch";

const Search = (props) => {
  console.warn("cek searchres props", props);
  return (
    <div>
      <div>
        <input
          className="input-search-res"
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
        </datalist>
        {props.lokasi.length > 0 ? (
          <>
            <img
              style={{ transform: "rotate(360deg)", width: "5%" }}
              className="logo-search-res"
              src="https://image.flaticon.com/icons/png/512/2943/2943449.png"
              alt="..."
            />
            <p className="text-antarke" style={{ display: "inline" }}>
              Antar ke
            </p>
          </>
        ) : (
          <>
            <img
              className="logo-search-res"
              src="https://image.flaticon.com/icons/png/512/2943/2943516.png"
              alt="..."
            />
            <p className="text-antarke" style={{ display: "inline" }}>
              Antar ke
            </p>
          </>
        )}
        {/* <Button
          onClick={() => props.getListCategory("", props.lokasi)}
          className="button-search-res mt-2"
          type="submit"
        >
          cari
        </Button> */}
      </div>
    </div>
  );
};

export default Search;
