import PropTypes from "prop-types";
const SingleSelected = ({ selectBlog }) => {
  return (
    <div>
      <h2 className="p-3 text-xl font-bold bg-white rounded-xl my-4 mx-2 ">
        {selectBlog.blog_title}
      </h2>
    </div>
  );
};
SingleSelected.propTypes = {
  selectBlog: PropTypes.object.isRequired,
};
export default SingleSelected;
