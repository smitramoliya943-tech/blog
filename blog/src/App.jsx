import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const API_URL = "http://localhost:3000/blogs";

  const [blogs, setBlogs] = useState([]);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const [editId, setEditId] = useState(null);

  // Get Blogs
  const fetchBlogs = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Add / Update Blog
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !image || !category || !date) {
      alert("Please fill all fields");
      return;
    }

    const blogData = {
      title,
      image,
      category,
      date,
    };

    try {
      if (editId !== null) {
        // Update
        await fetch(`${API_URL}/${editId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        });

        setEditId(null);
      } else {
        // Add
        await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        });
      }

      setTitle("");
      setImage("");
      setCategory("");
      setDate("");

      fetchBlogs();
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Edit Blog
  const handleEdit = (blog) => {
    setTitle(blog.title);
    setImage(blog.image);
    setCategory(blog.category);
    setDate(blog.date);

    setEditId(blog.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Delete Blog
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await fetch(`${API_URL}/${id}`, {
          method: "DELETE",
        });

        fetchBlogs();
      } catch (error) {
        console.log("Error:", error);
      }
    }
  };

  // Cancel Edit
  const handleCancel = () => {
    setTitle("");
    setImage("");
    setCategory("");
    setDate("");
    setEditId(null);
  };

  return (
    <div className="bg-light min-vh-100 py-4">
      <div className="container-fluid px-4">

        {/* Heading */}
        <h1 className="text-center fw-bold mb-4">
          My Blog
        </h1>

        <div className="row g-4">

          {/* LEFT SIDE */}
          <div className="col-lg-4">

            <div className="card shadow-sm add-blog-box">

              <div className="card-body p-4">

                <h3 className="mb-4">
                  {editId !== null
                    ? "Edit Blog"
                    : "Add New Blog"}
                </h3>

                <form onSubmit={handleSubmit}>

                  {/* Title */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Blog Title"
                      value={title}
                      onChange={(e) =>
                        setTitle(e.target.value)
                      }
                    />
                  </div>

                  {/* Image */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Blog Image URL"
                      value={image}
                      onChange={(e) =>
                        setImage(e.target.value)
                      }
                    />
                  </div>

                  {/* Category */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Blog Category"
                      value={category}
                      onChange={(e) =>
                        setCategory(e.target.value)
                      }
                    />
                  </div>

                  {/* Date */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Blog Date"
                      value={date}
                      onChange={(e) =>
                        setDate(e.target.value)
                      }
                    />
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    className="btn btn-success w-100"
                  >
                    {editId !== null
                      ? "Update Blog"
                      : "Add Blog"}
                  </button>

                  {/* Cancel */}
                  {editId !== null && (
                    <button
                      type="button"
                      className="btn btn-secondary w-100 mt-2"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  )}

                </form>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-8">

            <h3 className="fw-bold mb-4">
              Latest Blogs
            </h3>

            <div className="row g-4">

              {blogs.map((blog, index) => (

                <div
                  className="col-xl-4 col-lg-6 col-md-6"
                  key={blog.id}
                >

                  <div className="card h-100 shadow-sm blog-card">

                    {/* Header */}
                    <div className="card-header bg-dark text-white">
                      Blog No. {index + 1}
                    </div>

                    {/* Image */}
                    <img
                      src={blog.image}
                      className="card-img-top blog-image"
                      alt={blog.title}
                    />

                    {/* Content */}
                    <div className="card-body">

                      <h4 className="card-title">
                        {blog.title}
                      </h4>

                      <p className="mb-2">
                        <strong>Category:</strong>{" "}
                        {blog.category}
                      </p>

                      <p className="text-secondary">
                        <strong>Date:</strong>{" "}
                        {blog.date}
                      </p>

                    </div>

                    {/* Buttons */}
                    <div className="card-footer bg-white d-flex gap-2">

                      <button
                        className="btn btn-primary w-50"
                        onClick={() => handleEdit(blog)}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger w-50"
                        onClick={() =>
                          handleDelete(blog.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;  