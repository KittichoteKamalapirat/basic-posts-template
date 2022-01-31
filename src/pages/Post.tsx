import React, { useState } from "react";
import { myPurple } from "../cssConstants";

import { likePostUrl } from "../urlConstants";

interface PostProps {
  post: PostType;
}

export interface PostType {
  body: string;
  createdAt: string;
  createdBy: string;
  id: number;
  isFavorite: boolean;
  title: string;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const initials =
    post.createdBy.split(" ")[0][0] +
    "." +
    post.createdBy.split(" ")[1][0] +
    ".";

  return (
    <div
      style={{
        display: "flex",
        borderStyle: "solid",
        borderColor: "#c1c1c1",
        borderWidth: "1px",
        padding: "20px 40px",
        borderRadius: "5px",
        textAlign: "left",
        marginTop: "20px",
      }}
    >
      {/* left */}
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: myPurple,
          borderRadius: "50%",
          textAlign: "center",
          padding: "7px",
          color: "white",
          fontSize: "12px",
        }}
      >
        {initials}
        {/* {post.createdBy.split[" "][0][0/]} . {post.createdBy[0]}. */}
      </div>

      {/* right */}
      <div style={{ paddingLeft: "10px" }}>
        {/* top */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontSize: "8px", margin: "0", color: "gray" }}>
              {post.createdAt}
            </p>
            <p style={{ fontWeight: "bold", margin: "0" }}>{post.title}</p>
          </div>
          <div>
            <button
              style={{
                backgroundColor: isLiked ? "red" : myPurple,
                color: "white",
                border: "none",
                padding: "5px 20px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => {
                fetch(likePostUrl, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ id: post.id }),
                })
                  .then((response) => {
                    console.log(response);
                    setIsLiked(!isLiked);
                    return response.json();
                  })
                  .then((json) => {
                    console.log({ json });
                    return json;
                  });
              }}
            >
              {isLiked ? "unlike" : "like"}
            </button>
          </div>
        </div>
        {/* bottom */}
        <div>
          {" "}
          <p style={{ textAlign: "justify", fontSize: "12px" }}>{post.body}</p>
        </div>
      </div>
    </div>
  );
};
