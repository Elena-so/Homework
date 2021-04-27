import { Component } from "react";
import { FaTrash } from "react-icons/fa";
import StarRating from "./StarRating";
import { useColors } from "./ColorProvider";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Color = ({ id, title, color, rating }) => {

  const { rateColor, removeColor } = useColors();
  return (
    <section>
      <h1 > {title}</h1>
      <DeleteForeverIcon onClick={() => removeColor(id)}>
        <FaTrash />
        </DeleteForeverIcon>
      <div style={{ height: 50, background: color }}></div>
      <div>
        <StarRating
          starsSelected={rating}
          onRate={(rating) => rateColor(id, rating)}
        />
      </div>
    </section>
  );
};

export default Color;
