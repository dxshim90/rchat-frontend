import React from "react";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from "reactstrap";
import Image from "../../assests/image.png";

const ImageOverLay = props => {
  return (
    <div>
      <Card inverse>
        <CardImg width="100%" src={Image} />
        <CardImgOverlay></CardImgOverlay>
      </Card>
    </div>
  );
};

export default ImageOverLay;
