import { useEffect } from "react";
import { useState } from "react";
import SingleBlog from "../SingleBlog/SingleBlog";
import SingleSelected from "../SingleSelected/SingleSelected";
import {
  getDataFromLS,
  removeDataFromLS,
  setDataToLS,
} from "../LocalStorage/LocalStorage";

const Main = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlogs, setSelectedBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleSelectBlog = (blog) => {
    const totalSelected = [...selectedBlogs, blog];
    setSelectedBlogs(totalSelected);
    setDataToLS(blog.profession);
  };

  const HandleReadTime = (time, profession) => {
    const totalTime = readTime + parseInt(time);
    setReadTime(totalTime);
    const selectedItems = selectedBlogs.filter(
      (items) => items.profession !== profession
    );
    setSelectedBlogs(selectedItems);
    removeDataFromLS(profession);
  };

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  useEffect(() => {
    const savedData = [];
    if (blogs.length) {
      const dataFromLS = getDataFromLS();
      for (const prof of dataFromLS) {
        const getBlog = blogs.find((blog) => blog.profession === prof);
        if (getBlog) {
          savedData.push(getBlog);
        }
      }
      setSelectedBlogs(savedData);
    }
  }, [blogs]);

  return (
    <div className="flex flex-col lg:flex-row gap-10 px-4 lg:px-0">
      <div className="w-full lg:w-2/3">
        {blogs.map((blog, idx) => (
          <SingleBlog
            blog={blog}
            handleSelectBlog={handleSelectBlog}
            handleReadTime={HandleReadTime}
            key={idx}
          ></SingleBlog>
        ))}
      </div>
      <div className="w-full lg:w-1/3 bg-gray-300 rounded-xl">
        <div className="bg-blue-400 p-5 rounded-xl m-3">
          <h2 className="text-xl text-white">Total Time Read : {readTime} </h2>
        </div>
        <div>
          <h2 className="px-3 text-xl font-bold ">
            Bookmarks Added: {selectedBlogs?.length}
          </h2>
          <div>
            {selectedBlogs?.map((selectBlog, idx) => (
              <SingleSelected
                key={idx}
                selectBlog={selectBlog}
              ></SingleSelected>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
