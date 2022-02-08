import React, { useEffect, useState } from "react";
import { toggleDrawer } from "~/store/app/action";
import { useDispatch, connect } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    caculateArrayQuantity,
    calculateCartQuantity,
} from "~/utilities/ecomerce-helpers";

const ModuleHeaderActions = ({ ecomerce, search = false }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [cartTotal, setCartTotal] = useState(0);
    const [wishlistTotal, setWishlistTotal] = useState(0);
    const [user_id, setUser_id] = useState(0);
    const [username, setUsername] = useState(0);
    const [show, SetShow] = useState(false);
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"));
        if (user != null) {
            setUser_id(user.user_id);
            setUsername(user.first_name + " " + user.last_name);
        }
        window.addEventListener("click", function (event) {
            if (event.target.parentElement.parentElement.id === "account") {
                SetShow(!show);
            } else {
                SetShow(false);
            }
        });
    }, []);
    function handleOpenDrawer(e) {
        e.preventDefault();
        dispatch(toggleDrawer(true));
    }

    function logout() {
        localStorage.removeItem("user");
        router.push({
            pathname: "/",
            // query: { returnUrl: router.asPath },
        });
    }

    useEffect(() => {
        if (ecomerce.cartItems) {
            setCartTotal(calculateCartQuantity(ecomerce.cartItems));
        }
        if (ecomerce.wishlistItems) {
            setWishlistTotal(caculateArrayQuantity(ecomerce.wishlistItems));
        }
    }, [ecomerce]);

    // view
    let searchBtnView;
    if (search) {
        searchBtnView = (
            <li>
                <a className="header__action" href="#">
                    <i className="icon-magnifier"></i>
                </a>
            </li>
        );
    }

    return (
        <ul className="header__actions">
            {searchBtnView}
            <li>
                {user_id == 0 ? (
                    <Link href="/my-account">
                        <a className="header__action">
                            <i className="icon-user"></i>
                        </a>
                    </Link>
                ) : (
                    <div
                        title={username}
                        style={{ position: "relative" }}
                        id="account">
                        <a className="header__action">
                            <i className="icon-user"></i>
                        </a>
                        {show ? (
                            <ul
                                className="ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-light"
                                role="menu"
                                tabindex="0"
                                data-menu-list="true"
                                style={{
                                    position: "absolute",
                                    zIndex: "100",
                                    padding: "10px",
                                }}>
                                <li
                                    className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
                                    role="menuitem"
                                    tabindex="-1"
                                    data-menu-id="rc-menu-uuid-86034-1-tmp_key-0">
                                    <span className="ant-dropdown-menu-title-content d-flex">
                                        <i
                                            className="icon-user"
                                            style={{ marginTop: "2px" }}></i>
                                        <div style={{ marginLeft: "10px" }}>
                                            {username}
                                        </div>
                                    </span>
                                </li>
                                <li
                                    className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child"
                                    role="menuitem"
                                    tabindex="-1"
                                    data-menu-id="rc-menu-uuid-86034-1-tmp_key-1"
                                    onClick={logout}>
                                    <span className="ant-dropdown-menu-title-content d-flex">
                                        <img
                                            src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_exit2-1024.png"
                                            style={{
                                                height: "18px",
                                                width: "18px",
                                                marginLeft: "-2px",
                                            }}></img>
                                        <div style={{ marginLeft: "6px" }}>
                                            Logout
                                        </div>
                                    </span>
                                </li>
                            </ul>
                        ) : (
                            <></>
                        )}
                    </div>
                )}
            </li>
            <li>
                <Link href="/shop/wishlist">
                    <a className="header__action">
                        <i className="fa fa-heart-o"></i>
                        <span className="header__action-badge">
                            {wishlistTotal ? wishlistTotal : 0}
                        </span>
                    </a>
                </Link>
            </li>
            <li>
                <a
                    className="header__action"
                    href="#"
                    id="cart-mini"
                    onClick={(e) => handleOpenDrawer(e)}>
                    <i className="icon-cart-empty"></i>
                    <span className="header__action-badge">
                        {cartTotal ? cartTotal : 0}
                    </span>
                </a>
            </li>
        </ul>
    );
};

export default connect((state) => state)(ModuleHeaderActions);
