import React, { useState } from "react";
import { myPurple } from "../cssConstants";

interface FormProps {
  title: string;
  body: string;
  setTitle: any;
  setBody: any;
  handleSubmit: any;
}

export const Form: React.FC<FormProps> = ({
  title,
  body,
  setTitle,
  setBody,
  handleSubmit,
}) => {
  return (
    <div style={{ textAlign: "left" }}>
      <form
        onClick={() => {
          console.log("hi");
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <div>
            <label>Title</label>
          </div>

          <input
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div>
          <div>
            <label>Body</label>
          </div>

          <input
            name="body"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={{ width: "100%", height: "150px" }}
          />
        </div>

        {/* <div>{title}</div>
      <div>{body}</div> */}

        <div style={{ display: "flex", justifyContent: "end" }}>
          {" "}
          <button
            type="submit"
            onClick={handleSubmit}
            style={{
              backgroundColor: myPurple,
              color: "white",
              padding: "10px 20px",
              border: "none",
              marginTop: "20px",

              borderRadius: "5px",
            }}
          >
            Submit
          </button>{" "}
        </div>
      </form>
    </div>
  );
};
