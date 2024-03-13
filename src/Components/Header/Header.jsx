import HeaderImage from "../../assets/Images/profile.png";
const Header = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center py-10">
      <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
      <img src={HeaderImage} alt="" />
    </div>
  );
};

export default Header;
