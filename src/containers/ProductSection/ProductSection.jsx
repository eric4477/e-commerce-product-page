import "./ProductSection.css";
import ProductImages from "../../containers/ProductImages/ProductImages";
import ProductInfo from "../../containers/ProductInfo/ProductInfo";

function ProductSection() {
  return (
    <section className="product-section">
      <ProductImages />
      <ProductInfo />
    </section>
  );
}

export default ProductSection;
