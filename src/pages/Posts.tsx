import React, { useEffect, useState } from "react";
import { fetchData, postData } from "../functions";
import { createPostUrl, getPostsUrl } from "../urlConstants";
import { Form } from "./Form";
import { Post, PostType } from "./Post";

interface PostsProps {}

export const Posts: React.FC<PostsProps> = ({}) => {
  const [postsArray, setPostsArray] = useState<PostType[]>([]);

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    postData(createPostUrl, { title, body }).then((newPost) => {
      setPostsArray([newPost, ...postsArray]);
    });
  };

  useEffect(() => {
    fetchData(getPostsUrl).then((json) => {
      const dataArray = json.data;
      setPostsArray(dataArray);
    });
  }, []);
  return (
    <div>
      <Form
        title={title}
        body={body}
        setTitle={setTitle}
        setBody={setBody}
        handleSubmit={handleSubmit}
      />
      {postsArray.map((post) => (
        <div key={post.id}>
          <Post post={post as PostType} />
        </div>
      ))}
    </div>
  );
};
