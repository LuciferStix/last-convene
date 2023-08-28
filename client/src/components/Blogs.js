import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

function Blogs() {
  const [blogs, setBlogs] = useState();

  const host= process.env.REACT_APP_LOCAL_HOST || process.env.REACT_APP_HOST

  const sendRequest = async () => {
    const res = await axios
      .get(`${host}/api/blog/`)
      .catch((err) => console.log(err));
    console.log(res)
    const data = await res.data;
    return data;
  };




  useEffect(() => {
    sendRequest().then((data) => {
      setBlogs(data.events)
      console.log(data)
    });
  }, []);




  return (
      <>
       <div className="row row-cols-1 row-cols-md-3 g-4 ">

        {blogs &&
          blogs.map((blog, index) => (
            <Blog
              id={blog._id}
              isUser={localStorage.getItem("userId") === blog.user._id}
              title={blog.title}
              content={blog.content}
              image={blog.image}
              userName={blog.user.name}
              key={blog.id}
            />
          ))}
       </div>
      </>
  );
}

export default Blogs;
