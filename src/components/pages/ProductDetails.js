import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque vestibulum semper. Suspendisse at nibh massa. Nullam tincidunt magna eu tellus tempor dapibus. Mauris sed purus id dui venenatis hendrerit eget sit amet lectus. Nulla tincidunt nunc sit amet justo eleifend fermentum. Cras id erat ut elit dapibus scelerisque nec et diam. Praesent viverra, ex nec consectetur vehicula, arcu augue tempor lorem, in commodo leo mauris et mauris.";
  const ProductArray = [
    {
      id: "1",
      title: "Album 1",
      price: "12.99",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 1,
    },
    {
      id: "2",
      title: "Album 2",
      price: "14.99",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 1,
    },
    {
      id: "3",
      title: "Album 3",
      price: "16.99",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
    {
      id: "4",
      title: "Album 4",
      price: "9.99",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      quantity: 1,
    },
    {
      id: "5",
      title: "T-shirt",
      price: "49",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
      quantity: 1,
    },
    {
      id: "6",
      title: "Coffe Cup",
      price: "14.99",
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
      quantity: 1,
    },
  ];
  const params = useParams();

  const productDetail = ProductArray.find(
    (product) => product.id === params.productId
  );
  return (
    <section>
      <h1>ProductDetails Page</h1>
      <h2>{productDetail.title}</h2>
      <img src={productDetail.imageUrl} alt={productDetail.title} />
      <p>{productDetail.price}</p>
      <p>{description}</p>
      <p>{description}</p>
      <p>{description}</p>
    </section>
  );
};

export default ProductDetails;
