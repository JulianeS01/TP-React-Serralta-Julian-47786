import { Carousel } from "react-bootstrap";

const CarouselHome = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="https://ep01.epimg.net/verne/imagenes/2020/05/29/articulo/1590766528_962500_1590770757_noticia_normal.jpg"
          alt="perritos1"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="https://www.diaridetarragona.com/binrepository/900x896/0c195/900d506/none/15017645/YYAY/meme_crop1584356858942_DT202003160025_MG249282811.jpg"
          alt="perritos2"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: "cover" }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCv3ycp4AqAuTPzAAHIP--Q-JhC9Gy1a2xoQ&usqp=CAU"
          alt="perritos3"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
