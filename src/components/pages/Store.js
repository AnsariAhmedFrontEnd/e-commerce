import { Fragment } from "react";
import MerchProdcuts from "../MerchProducts";
import Products from "../Products";
import { Button } from "react-bootstrap";
const Store = (props) => {
  return (
    <Fragment>
      <section id="album">
        <Products />
      </section>
      <section id="merch">
        <MerchProdcuts />
      </section>
      <div className="text-center mb-4">
        <Button>See the Cart</Button>
      </div>
    </Fragment>
  );
};

export default Store;
