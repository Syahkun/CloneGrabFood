// import React from "react";

// const distance = (lat1, lon1, lat2, lon2, unit) => {
//     if (lat1 === lat2 && lon1 === lon2) {
//       return 0;
//     } else {
//       var radlat1 = (3.14 * lat1) / 180;
//       var radlat2 = (3.14 * lat2) / 180;
//       var theta = lon1 - lon2;
//       var radtheta = (3.14 * theta) / 180;
//       var dist =
//         Math.sin(radlat1) * Math.sin(radlat2) +
//         Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//       if (dist > 1) {
//         dist = 1;
//       }
//       dist = Math.acos(dist);
//       dist = (dist * 180) / Math.PI;
//       dist = dist * 60 * 1.1515;
//       if (unit === "K") {
//         dist = dist * 1.609344;
//       }
//       if (unit === "N") {
//         dist = dist * 0.8684;
//       }
//       return dist;
//     }
//   };
