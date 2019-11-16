import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import Image from '../../assests/image.png';

const ImageOverLay = (props) => {
  console.log(Image);
  return (
    <div>
      <Card style={{ marginTop: '5rem' }} inverse>
        <CardImg width="100%" src={props.image || Image} />
        <CardImgOverlay></CardImgOverlay>
      </Card>
    </div>
  );
};

export default ImageOverLay;
