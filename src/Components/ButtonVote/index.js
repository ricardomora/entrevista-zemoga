import React from "react";
import "./index.scss";

import { AGREE_IMAGE, DISAGREE_IMAGE } from "../../Config/Constants/Image";

const ButtonVote = props => {
  const { label, type, index, active } = props;

  return (
    <span
      className={`${type} ${active ? "active" : ""} `}
      style={{ width: label }}
      onClick={() => props.onClick(type, index)}
    >
      <img src={type == "agree" ? AGREE_IMAGE : DISAGREE_IMAGE} />
      <div className="ranking">{label}</div>
    </span>
  );
};

export default ButtonVote;