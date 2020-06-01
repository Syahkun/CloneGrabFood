import React from "react";

const InputSearch = (props) => {
  return (
    <div>
      <input
        className="input-search"
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
        <img
          style={{ transform: "rotate(360deg)", width: "15%" }}
          className="logo-search"
          src="https://image.flaticon.com/icons/png/512/2943/2943449.png"
          alt="..."
        />
      ) : (
        <img
          className="logo-search"
          src="https://image.flaticon.com/icons/png/512/2943/2943516.png"
          alt="..."
        />
      )}
    </div>
  );
};

export default InputSearch;
