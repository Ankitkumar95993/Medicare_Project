import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServicesCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-10 px-3 lg:px-5 border-2 border-blue-200 rounded-md text-center gap-4 flex flex-col">
      <h2 className="text-2xl text-richblack-800 font-bold">{name}</h2>
      <p className="text-s font-semibold text-richblack-600 mt-4">{desc}</p>
      <div className="flex items-center justify-between mt-[30px] ">
        <Link
          to="/doctor"
          className="w-[44px] h-[44px] rounded-full border border-solid
                     border-black  flex justify-center items-center group hover:bg-blue-200"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] 
      font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServicesCard;
