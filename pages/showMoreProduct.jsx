import React, { useEffect, useState } from "react";
import Shop from "~/components/partials/shop/Shop";
import { useRouter } from "next/router";
import Axios from "axios";
import useProductGroup from "~/hooks/useProductGroup";
const ShowMoreProduct = () => {
    const router = useRouter();
    const { withGrid } = useProductGroup();
    const [product, setProduct] = useState([]);
    const [category_name, setCategoryName] = useState("");
    const [total_count, setTotalCount] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const { category_id } = router.query;
        let fetchCount = {
            index: index,
            limit: 10,
        };
        Axios.post(
            `http://localhost:5000/product/getProductsByCategory/${category_id}`,
            fetchCount
        ).then((res) => {
            //products = withGrid(res.data, false, 4);
            if (res.data.length > 0) {
                setTotalCount(res.data[0].total_product);
                setCategoryName(res.data[0].category_name);
                setProduct(withGrid(res.data, false, 4));
            }
        });
    }, [index]);
    return (
        <div>
            <div className="d-flex justify-content-between pt-4 pl-4">
                <h2>{category_name}</h2>
            </div>
            <Shop
                classes="ps-shop--grid p-4"
                total_count={total_count}
                index={index}
                setIndex={setIndex}>
                {product}
            </Shop>
        </div>
    );
};

export default ShowMoreProduct;
