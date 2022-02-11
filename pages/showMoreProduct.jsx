import React, { useEffect } from "react";
import Shop from "~/components/partials/shop/Shop";
import { useRouter } from "next/router";
import Axios from "axios";
import useProductGroup from "~/hooks/useProductGroup";
const ShowMoreProduct = () => {
    const router = useRouter();
    let products = "";
    useEffect(() => {
        const { category_id } = router.query;
        Axios.get(
            `http://localhost:5000/product/getProductsByCategory/${category_id}`
        ).then((res) => {
            products = withGrid(res.data, false, 4);
        });
    }, []);
    return (
        <div>
            <Shop classes="ps-shop--grid">{products}</Shop>
        </div>
    );
};

export default ShowMoreProduct;
