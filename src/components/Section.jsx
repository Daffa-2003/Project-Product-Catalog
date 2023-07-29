import Typography from "./Typography";
import Character from "../assets/images/character.png";
import PropTypes from "prop-types";

function Section(props) {
  return (
    <div key={props.title} className="rounded-3xl w-[352px] h-[293px] border-[1px]">
      <div className="h-[128px] flex bg-[#152A46] rounded-t-3xl pt-[16px]">
        <img className="ml-[28px]" src={Character} alt="Character" />
        <div className="ml-[17px]">
          <Typography variant="warning">{props.text}</Typography>
          <Typography variant="primary" size="title">
            {props.title}
          </Typography>
          <Typography size="body" variant="primary">
            {props.content}
          </Typography>
        </div>
      </div>
      <div className="h-[164px] px-[24px] py-[16px] bg-[#FFFFFF] rounded-b-3xl shadow-2xl shadow-blue-300">
        <Typography variant="black" size="title">
          {props.title2}
        </Typography>
        <Typography variant="black" size="title">
          {props.title3}
        </Typography>
        <div className="flex">
          <p className="text-[12px]">{props.batch}</p>
          <p className="pl-[45px] text-[12px]">{props.bulan}</p>
        </div>
        <div className="flex">
          <p className="text-[12px]">{props.mentor}</p>
          <p className="pl-[35px] text-[12px]">{props.orang}</p>
        </div>
        <div className="flex">
          <p className="text-[16px] pl-[100px] pt-[5px] line-through">{props.price}</p>
          <p className="text-[18px] font-medium pl-[10px] pt-[10px] text-green-500">{props.price2}</p>
        </div>
        {/* <Typography variant="error" size="subtitle" posision="center">
          {props.price}
        </Typography> */}
      </div>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  price: PropTypes.string,
  mentor: PropTypes.string,
  orang: PropTypes.string,
  batch: PropTypes.string,
  bulan: PropTypes.string,
};

export default Section;
