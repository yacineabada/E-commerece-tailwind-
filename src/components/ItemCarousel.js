import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const products = [
  {
    id: 1,
    name: "Basic Tee 8-Pack",
    href: "#",
    price: "$256",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    options: "8 colors",
    imageSrc: [
      {
        id: 1,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg",
      },
      {
        id: 2,
        photoURL:
          "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
      },
    ],
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  // {
  //   id: 2,
  //   name: "Basic Tee",
  //   href: "#",
  //   price: "$32",
  //   description:
  //     "Look like a visionary CEO and wear the same black t-shirt every day.",
  //   options: "Black",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
  //   imageAlt: "Front of plain black t-shirt.",
  // },
  // {
  //   id: 3,
  //   name: "Basic Tee",
  //   href: "#",
  //   price: "$32",
  //   description:
  //     "Look like a visionary CEO and wear the same black t-shirt every day.",
  //   options: "Black",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
  //   imageAlt: "Front of plain black t-shirt.",
  // },
  // {
  //   id: 4,
  //   name: "Basic Tee",
  //   href: "#",
  //   price: "$32",
  //   description:
  //     "Look like a visionary CEO and wear the same black t-shirt every day.",
  //   options: "Black",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
  //   imageAlt: "Front of plain black t-shirt.",
  // },
  // {
  //   id: 5,
  //   name: "Basic Tee",
  //   href: "#",
  //   price: "$32",
  //   description:
  //     "Look like a visionary CEO and wear the same black t-shirt every day.",
  //   options: "Black",
  //   imageSrc:
  //     "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
  //   imageAlt: "Front of plain black t-shirt.",
  // },
];

export default function ItemCarousel() {
  return (
    <>
      {products.map((product) => (
        <div
          style={{
            height: 100,
            width: 300,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            transitionTime={300}
            ariaLabel={undefined}
          >
            {product.imageSrc.map((image) => (
              <div key={image.id}>
                <img src={image.photoURL} alt="pic" />
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </>
  );
}
