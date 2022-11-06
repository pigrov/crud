import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import createRequest from "../api/createRequest";

const Post = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await createRequest({ method: "get" });
      const post = data.find((o) => o.id === +id);

      setPost(post);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await createRequest({ method: "get" });
      const post = data.find((o) => o.id === +id);

      setPost(post);
    };
    fetchData();
  }, [id]);

  !post && (
    <div>
      404 <Link to="/">все посты</Link>
    </div>
  );

  console.log(post);

  return (
    <div>
      <Alert>{post.content}</Alert>
    </div>
  );
};

export default Post;
