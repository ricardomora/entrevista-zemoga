import React from "react";
import { AGREE_IMAGE, DISAGREE_IMAGE } from "../../Config/Constants/Image";

import "./index.scss";
import { display } from "@material-ui/system";

const Rate = props => {
  const { agreeLabel, disagreeLabel, hideLabel } = props;

  const hide = { display: hideLabel ? "none" : "initial" };

  return (
    <div className="rate-box">
      <span className="agree" style={{ width: agreeLabel }}>
        <img src={AGREE_IMAGE} />
        <div className="ranking" style={hide}>
          {agreeLabel}
        </div>
      </span>
      <span className="disagree" style={{ width: disagreeLabel }}>
        <div className="ranking" style={hide}>
          {disagreeLabel}
        </div>
        <img src={DISAGREE_IMAGE} />
      </span>
    </div>
  );
};

export default Rate;
