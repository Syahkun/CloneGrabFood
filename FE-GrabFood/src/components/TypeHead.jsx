// import React from "react";

// const TypeHead = () => {
//   const onTextChanged = (e) => {
//     const Array = ["david", "damien", "sara", "jane"];
//     const value = e.target.value;
//     let suggestions = [];
//     if (value.length) {
//       const regex = new RegExp(`^${value}`, "i");
//       suggestions = Array.sort().filter((v) => v.test(regex));
//     }
//     this.setState(() => ({ suggestions }));
//   };

//   renderSuggestions () {
//       const { suggestions } = props.state;
//       if (suggestions.length === 0) {
//           return null
//       }
//       return (
//         <ul className="">
//         {suggestions.map((item, key) => (
//           <li>{item}</li>
//         ))}
//       </ul>
//       )
//   }
//   return (
//     <div className="">
//       <input onChange={onTextChanged} type="text" className="" />
//      {props.renderSuggestions()}
//     </div>
//   );
// };

// export default TypeHead;
