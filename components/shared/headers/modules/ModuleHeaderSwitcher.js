import React, { useEffect, useState } from "react";

import { Select, Menu, Dropdown, Button } from "antd";

const { Option } = Select;

const ModuleHeaderSwichers = () => {
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("user") != null) {
            if (JSON.parse(localStorage.getItem("user")).role_id == 1) {
                setAdmin(true);
            }
            // console.log(JSON.parse(localStorage.getItem("user")).role_id);
        }
    });
    const languageItems = (
        <Menu>
            <Menu.Item>
                <a href="#">English</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">French</a>
            </Menu.Item>
        </Menu>
    );

    const currencyItems = (
        <Menu>
            <Menu.Item>
                <a href="#">USD</a>
            </Menu.Item>
            <Menu.Item>
                <a href="#">EURO</a>
            </Menu.Item>
        </Menu>
    );
    const adminMenu = (
        <Menu>
            <Menu.Item>
                <a href="/productaction/addProduct">Add Product</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/productaction/addCategory">Add Category</a>
            </Menu.Item>
            <Menu.Item>
                <a href="/productaction/addUser">Add User</a>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="header__switchers">
            {admin ? (
                <div className="header__switcher">
                    <Dropdown
                        overlay={adminMenu}
                        placement="bottomLeft"
                        className="ps-dropdown-toggle">
                        <Button>
                            Admin Panel <i className="icon-chevron-down"></i>
                        </Button>
                    </Dropdown>
                </div>
            ) : (
                <></>
            )}
            <div className="header__switcher">
                <Dropdown
                    overlay={languageItems}
                    placement="bottomLeft"
                    className="ps-dropdown-toggle">
                    <Button>
                        English <i className="icon-chevron-down"></i>
                    </Button>
                </Dropdown>
            </div>
            <div className="header__switcher">
                <Dropdown overlay={currencyItems} placement="bottomLeft">
                    <Button>
                        USD <i className="icon-chevron-down"></i>
                    </Button>
                </Dropdown>
            </div>
        </div>
    );
};

export default ModuleHeaderSwichers;
