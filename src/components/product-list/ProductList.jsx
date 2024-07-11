import './ProductList.css';
import Product from '../product/Product.jsx';
import Pagination from '../../components/pagination/Pagination.jsx';

const ProductList = ({ productsData, page, limit }) => {
  const { count, products } = productsData;

  return (
    <>
      <h1 className="list-title">Product List</h1>
      <div className="product-list-container">
        <div className="list">
          {products?.length &&
            products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
        </div>
        <div className="list-paginator">
          {products?.length && <Pagination data={{ page, limit, count }} />}
        </div>
      </div>
    </>
  );
};

export default ProductList;
