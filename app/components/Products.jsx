import { Suspense } from 'react';
import allProducts from '../data/products.json';
import Loading from './Loading';
import Product from './Product';

export default function Products() {
    const products = allProducts;
    // console.log(products);
    return (
        <Suspense fallback={<Loading />}>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 my-4 lg:my-10'>
                {
                    products.map(product => (
                        <Product key={product.id} product={product} />
                    ))
                }
            </div>
        </Suspense>
    );
}