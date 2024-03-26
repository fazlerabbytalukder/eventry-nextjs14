
import Image from 'next/image';
import Link from 'next/link';
import allProducts from '../../data/products.json';

export function generateStaticParams(id) {
    const productId = parseInt(id);
    return allProducts.map((product) => ({
        id: String(product.id),
    }));
}

export default function SingleProductPage({ params }) {
    const { id } = params;
    const productId = parseInt(id);
    const product = allProducts.find((product) => product.id === productId);
    if (!product) {
        return <p>Product not found</p>;
    }
    const { title, description, images, thumbnail, discountPercentage, price, category, rating } = product;

    const discountedPrice = (product.price - (product.price * (product.discountPercentage / 100))).toFixed(2);
    const roundedRating = Math.ceil(rating);

    return (
        <>
            <div>
                <section className="bg-[#fafaf2] h-full py-20">
                    <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
                        <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
                            <Image
                                src={thumbnail}
                                width={400}
                                height={500}
                                className="w-[400px] h-[500px] mx-auto object-cover"
                                alt=""
                            />

                            <div className="grid grid-cols-4 gap-4 mt-4">
                                {images.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        width={100}
                                        height={100}
                                        className="w-[100px] h-[100px] mx-auto border object-cover"
                                        alt=''
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-full lg:w-5/12">
                            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">{title}</h1>
                            <span className="text-[#919090] my-3">
                                <Link href={`/category/${category}`}>({category})</Link>
                            </span>
                            <div className="mt-3 flex items-center justify-start gap-1">
                                {[...Array(roundedRating)].map((_, index) => (
                                    <Image
                                        key={index}
                                        src="/star.svg"
                                        width={20}
                                        height={20}
                                        className="w-[20px] h-[20px] object-cover"
                                        alt=""
                                    />
                                ))}
                            </div>
                            <hr className="my-5 bg-black" />

                            <div>
                                <p className="my-3">
                                    <span className="text-rose-600 opacity-60 line-through">${price}</span>
                                    <span className="font-bold text-2xl">${discountedPrice}</span>
                                </p>
                            </div>
                            <div>
                                <p className="leading-7">
                                    {description}
                                </p>

                                <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                                    Add To Cart - ${discountedPrice}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}