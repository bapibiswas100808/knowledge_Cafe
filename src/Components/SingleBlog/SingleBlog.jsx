import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const SingleBlog = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <div className="border-b-2 rounded-3xl mb-5">
        <img
          className="w-full max-h-[450px] rounded-tl-3xl rounded-tr-3xl"
          src={blog.blog_img}
          alt=""
        />

        <div className="p-5">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-3">
            <div className="flex gap-5">
              <img
                className="h-14 w-16 rounded-full"
                src={blog.author_img}
                alt=""
              />
              <div>
                <p className="text-lg font-bold">{blog.author}</p>
                <p>{blog.profession}</p>
              </div>
            </div>
            <p className="flex items-center gap-2 mt-5 lg:mt-0">
              <span> 0 Min Read</span>
              <FaBookmark className="text-3xl" />
            </p>
          </div>
          <h2 className="text-3xl font-bold mb-4">{blog.blog_title}</h2>
          <div className="flex gap-5 mb-5">
            {blog.hashtags.map((hashtag, idx) => (
              <p key={idx}>#{hashtag}</p>
            ))}
          </div>
          <span className="text-purple-600 underline">Mark As Read</span>
        </div>
      </div>
    </div>
  );
};
SingleBlog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default SingleBlog;
