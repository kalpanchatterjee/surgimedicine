import React, { useState, useEffect } from "react";
import ProductRepository from "~/repositories/ProductRepository";
import Link from "next/link";
import { useRouter } from "next/router";
import Axios from "axios";
const WidgetShopCategories = () => {
    const router = useRouter();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const { slug } = router.query;

    // async function getCatgories() {
    //     const SPCategories = await ProductRepository.getProductCategories();
    //     if (SPCategories) {
    //         setCategories(SPCategories);
    //         setTimeout(function () {
    //             setLoading(false);
    //         }, 200);
    //     } else {
    //         return null;
    //     }
    // }

    useEffect(() => {
        // getCatgories();
        Axios.get("http://localhost:1400/category/getCategory").then((res) => {
            setCategories(res.data);
        });
    }, []);

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            categoriesView = categories.map((item) => (
                <li key={item.category_id}>
                    <Link href={`/category/${item.category_id}`}>
                        <a
                            // className={`ps-link--line ${
                            //     slug && slug === item.slug ? "active" : ""
                            // }`}
                            className="active">
                            {item.category_name}
                        </a>
                    </Link>
                </li>
            ));
        } else {
            categoriesView = <p>No category found.</p>;
        }
    } else {
        categoriesView = <span>Loading...</span>;
    }

    return (
        <aside className="widget widget_shop widget_categories">
            <h1 className="widget-title" style={{ fontSize: "24px" }}>
                Categories
            </h1>
            <ul className="ps-list--under">{categoriesView}</ul>
        </aside>
    );
};

export default WidgetShopCategories;
