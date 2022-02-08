import React from "react";
import MegaMenu from "~/components/elements/menu/MegaMenu";
import menu from "~/public/static/data/menu.json";
import ModuleHeaderPartners from "~/components/shared/headers/modules/ModuleHeaderPartners";
import { useRouter } from "next/router";
const ModuleHeaderCategories = () => {
    const router = useRouter();
    const redirectToshop = () => {
        router.push({
            pathname: "/shop",
            // query: { returnUrl: router.asPath },
        });
    };
    return (
        <div className="header__categories ps-dropdown--fullscreen">
            <button
                className="header__categories-toggle"
                onClick={redirectToshop}>
                <i className="fa fa-bars"></i>
                <span>Products</span>
            </button>
            <div className="ps-dropdown__content">
                <div className="container">
                    <MegaMenu
                        source={menu.header_categories_menu}
                        onlyItems={true}
                        classes="menu--mega with-6-columns"
                    />
                    <ModuleHeaderPartners />
                </div>
            </div>
        </div>
    );
};

export default ModuleHeaderCategories;
