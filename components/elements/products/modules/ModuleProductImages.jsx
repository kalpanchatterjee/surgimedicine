import React from "react";
import useProduct from "~/hooks/useProduct";
import Link from "next/link";
import images from "../../../../public/static/img/products/001.jpg";
import Image from "next/image";
const ModuleProductImages = ({ product }) => {
    const { thumbnailImages, price } = useProduct();
    const imagename = `http://54.89.60.0:5000/`;
    return (
        <div className="ps-product__images">
            <Link href="/product/[id]" as={`/product/${product.product_id}`}>
                <a className="ps-product__overlay"></a>
            </Link>
            {/* {thumbnailImages(product)} */}
            <Image
                src={
                    imagename + `product/getProductImages/${product.image_name}`
                }
                alt="Picture of the author"
                width={500}
                height={500}
            />
        </div>
    );
};

export default ModuleProductImages;
