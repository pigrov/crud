import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Posts(props) {
  const onDelete = (id) => {
    props.onDelete(id);
  };

  return (
    <div>
      {props.posts.map((o) => (
        <Alert key={o.id} id={o.id}>
          <Link to={"/posts/" + o.id}>{o.content}</Link>
          <b onClick={() => onDelete(o.id)}>[X]</b>
        </Alert>
      ))}
    </div>
  );
}
