import React from "react";
import Card from "./Card";
import data from "../components/data";

export default function MainContent() {
  const cardElement = data.map(function (item, index) {
    return (
      <>
        <Card key={item.id} {...item} />
        {index !== data.length - 1 && <hr className="horizontal-line"></hr>}
      </>
    );
  });
  return <main className="main">{cardElement}</main>;
}
