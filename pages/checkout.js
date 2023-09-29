import React, { useEffect, useState } from "react";

const checkout = () => {
  const [value, setvalue] = useState("Loading ....");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const a = await fetch("https://dummyjson.com/carts");
  //     const data = await a.json();
  //     setvalue(JSON.stringify(data));
  //   };
  //   fetchData();
  // }, []);

  return <div>{value}</div>;
};

export default checkout;
