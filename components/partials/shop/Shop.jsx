import React from "react";
import ModuleShopActions from "~/components/partials/shop/modules/ModuleShopActions";
import CustomPagination from "~/components/elements/basic/CustomPagination";

const Shop = ({
    children,
    classes,
    fullwidth = false,
    actions = true,
    total_count,
    index,
    setIndex,
}) => {
    let actionsView;
    if (actions) {
        actionsView = (
            <div className="ps-shop__header">
                <div className="container">{/* <ModuleShopActions /> */}</div>
            </div>
        );
    }
    if (!fullwidth) {
        return (
            <div className={`ps-shop ${classes}`}>
                {actionsView}

                <div className="ps-shop__content">{children}</div>
                <div className="ps-shop__footer">
                    <CustomPagination
                        total_count={total_count}
                        index={index}
                        setIndex={setIndex}
                    />
                </div>
            </div>
        );
    } else {
        return (
            <div className={`ps-shop ${classes !== undefined ? classes : ""}`}>
                {actionsView}
                <div className="ps-shop__content">
                    <div className="container">{children}</div>
                    <div className="ps-shop__footer">
                        <CustomPagination
                            total_count={total_count}
                            index={index}
                            setIndex={setIndex}
                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default Shop;
