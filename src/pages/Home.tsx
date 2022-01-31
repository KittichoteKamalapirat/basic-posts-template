import React from "react";
import { Form } from "./Form";
import { Posts } from "./Posts";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  //postArray

  return (
    <div style={{ textAlign: "center" }}>
      {/* <Form /> */}
      <Posts />
      <p>Home</p>
    </div>
  );
};
