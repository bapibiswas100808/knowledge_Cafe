import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="flex flex-col gap-10 px-4 lg:px-0">
      <div className="w-full lg:w-2/3">
        {blogs.map((blog, idx) => (
          <SingleBlog blog={blog} key={idx}></SingleBlog>
        ))}
      </div>
      <div className="w-full lg:w-1/3">Selected</div>
    </div>
  );
};

export default Main;
