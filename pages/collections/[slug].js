import React from "react";
import { useRouter } from "next/router";

const slug = () => {
  const route = useRouter();
  const { slug } = route.query;
  return <div>Slug is :{slug}</div>;
};

export default slug;
