import React from "react";
import "./Blog.css";   
import flowerImage from "../assets/flower.jpg"; 

function Blog() {
  var title = "10 Tips for Effective Time Management";
  var author = "John Doe";
  var description =
    "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";
  var image = flowerImage;

  const containerStyle = {
    border: "1px solid #ccc",
    padding: "20px",
    width: "400px",
    margin: "20px auto",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  };

  const titleStyle = { color: "#333", textAlign: "center" };
  const authorStyle = { color: "#777", fontStyle: "italic", textAlign: "center" };
  const descriptionStyle = { color: "#555", textAlign: "justify" };

  return (
    <div className="blog-container" style={containerStyle}>
      <img src={image} alt="Blog Thumbnail" className="blog-image" />
      <h2 style={titleStyle}>{title}</h2>
      <p style={authorStyle}>By {author}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
}

export default Blog;
