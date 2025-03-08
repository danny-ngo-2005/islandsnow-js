import React from 'react';
import { Row, Image } from 'react-bootstrap';

const MainImage = () => (
  <Row className="justify-content-center">
    <Image
      src="https://courses.ics.hawaii.edu/ics314s25/morea/ui-frameworks/experience-islandsnow-bootstrap-main.png"
      className="img-fluid"
      alt="Island Snow Main Banner"
      layout="responsive"
      width={700}
      height={475}
    />
  </Row>
);

export default MainImage;
