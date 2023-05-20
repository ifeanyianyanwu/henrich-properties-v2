import React from "react";
import classes from "./Card.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

type IProps = {
  id: string;
  imgUrl: string;
  heading: string;
  text: string;
  className?: string;
};

const Card = ({ id, imgUrl, heading, text, className }: IProps) => {
  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/${id}`);
  };
  return (
    <div className={`${classes.card} ${className}`}>
      <img loading="lazy" src={imgUrl} alt={`${heading} Image`} />
      <h4>{heading}</h4>
      <p>{text}</p>
      <Button onClick={() => handleClick(id)} className={classes.button}>
        Learn more
      </Button>
    </div>
  );
};

export default Card;
