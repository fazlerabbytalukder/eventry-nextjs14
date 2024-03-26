import CustomLink from '@/app/components/CustomLink';
import Loading from '@/app/components/Loading';
import Product from '@/app/components/Product';
import { Suspense } from 'react';
import allProducts from '../../data/products.json';

export default function CategoryName({ params: { categoryName } }) {
    const products = allProducts;
    let matchProducts;

    // Check if the "All" category link is clicked
    if (categoryName === 'all') {
        matchProducts = products;
    } else {
        matchProducts = products.filter(product => product.category === categoryName);
    }
    const categories = [...new Set(allProducts.map(product => product.category))];
    // console.log(categoryName);
    return (
        <>
            <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
                <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4 mr-10">
                    <CustomLink path="/category/all">
                        All
                    </CustomLink>
                    {categories.map((category, index) => (
                        <CustomLink key={index} path={`/category/${category}`}>
                            {category}
                        </CustomLink>
                    ))}
                </div>
                <Suspense fallback={<Loading />}>
                    <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
                        {matchProducts.map(product => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </Suspense>
            </section>
        </>
    );
}