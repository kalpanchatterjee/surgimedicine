import React, { useEffect, useState } from "react";
import useGetProducts from "~/hooks/useGetProducts";
import useProductGroup from "~/hooks/useProductGroup";
import Axios from "axios";
import { useRouter } from "next/router";
const settings = {
    loop: true,
    slidesPerView: 4,
    pagination: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,
        },

        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
        },
    },
};

const ShopBestSellers = ({ collectionSlug }) => {
    const { loading, productItems, getProducts } = useGetProducts();
    const router = useRouter();
    const { withCarousel } = useProductGroup();
    const [fetchedProduct, setFetchedProduct] = useState([]);
    const [productsofitem, setProductsofitem] = useState();
    const [productsofitemforFilter, setProductsofitemforFilter] = useState([]);
    let data = [];
    let courosalData = [];
    let category_id = 1;

    const showMore = (id) => {
        router.push({
            pathname: "/showMoreProduct",
            query: { category_id: id },
        });
    };
    useEffect(() => {
        Axios.get(`http://54.89.60.0:5000/product/getProducts`)
            .then((res) => {
                data = res.data;
            })
            .then(() => {
                // console.log(withCarousel(data, loading, settings));
                // setProductsofitem(withCarousel(data, loading, settings));
                setProductsofitemforFilter(data);
            });
    }, [collectionSlug]);

    // console.log(productItems);
    return (
        <section className="ps-section--shop ps-shop-best-sellers">
            <div className="ps-section__header">
                <h3>Products According to Categories</h3>
            </div>
            {/*  */}
            {productsofitemforFilter.map((eachItem, index) => {
                if (
                    index === productsofitemforFilter.length - 1 &&
                    category_id !== eachItem.category_id
                ) {
                    let b = withCarousel(courosalData, loading, settings);
                    let cate_name = courosalData[0].category_name;
                    let cate_id = courosalData[0].category_id;
                    courosalData = [];
                    courosalData.push(eachItem);
                    let new_cat_name = courosalData[0].category_name;
                    let a = withCarousel(courosalData, loading, settings);
                    return (
                        <div>
                            <div className="ps-section__header mt-3">
                                <div className="d-flex justify-content-between">
                                    <h3>{cate_name}</h3>
                                    <div
                                        className="mr-3"
                                        style={{ cursor: "pointer" }}>
                                        See All
                                    </div>
                                </div>
                                <div className="ps-section__content mt-4">
                                    {b}
                                </div>
                            </div>

                            <div className="ps-section__header mt-3">
                                <div className="d-flex justify-content-between">
                                    <h3>{new_cat_name}</h3>
                                    <div
                                        className="mr-3"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => showMore(cate_id)}>
                                        See All
                                    </div>
                                </div>
                                <div className="ps-section__content mt-4">
                                    {a}
                                </div>
                            </div>
                        </div>
                    );
                } else if (
                    index === productsofitemforFilter.length - 1 &&
                    category_id === eachItem.category_id
                ) {
                    let a = withCarousel(courosalData, loading, settings);
                    let new_cat_name = courosalData[0].category_name;
                    let cate_id = courosalData[0].category_id;
                    return (
                        <div className="ps-section__header mt-3">
                            <div className="d-flex justify-content-between">
                                <h3>{new_cat_name}</h3>
                                <div
                                    className="mr-3"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => showMore(cate_id)}>
                                    See All
                                </div>
                            </div>
                            <div className="ps-section__content mt-4">{a}</div>
                        </div>
                    );
                } else if (category_id !== eachItem.category_id) {
                    let a = withCarousel(courosalData, loading, settings);
                    let new_cat_name = courosalData[0].category_name;
                    let cate_id = courosalData[0].category_id;
                    courosalData = [];
                    courosalData.push(eachItem);
                    category_id = eachItem.category_id;

                    return (
                        <div className="ps-section__header mt-3">
                            <div className="d-flex justify-content-between">
                                <h3>{new_cat_name}</h3>
                                <div
                                    className="mr-3"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => showMore(cate_id)}>
                                    See All
                                </div>
                            </div>
                            <div className="ps-section__content mt-4">{a}</div>
                        </div>
                    );
                } else if (category_id === eachItem.category_id) {
                    category_id = eachItem.category_id;
                    courosalData.push(eachItem);
                }
            })}
        </section>
    );
};

export default ShopBestSellers;
