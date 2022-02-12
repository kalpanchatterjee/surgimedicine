import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const CustomPagination = ({ total_count, index, setIndex }) => {
    const [countofPages, setCountOfPages] = useState([]);
    const [active, setActive] = useState(1);
    let count = [];
    useEffect(() => {
        let pages = 1;
        if (total_count > 10) {
            pages = Math.ceil(total_count / 10);
        }

        for (let i = 1; i <= pages; i++) {
            count.push(i);
        }
        setCountOfPages(count);
    }, [total_count]);

    function changeIndex(countno) {
        if (countno == 1) {
            setIndex(0);
            setActive(1);
        } else {
            let backcount = countno * 10;
            setIndex(backcount - 10);
            setActive(countno);
        }
    }
    return (
        <div className="ps-pagination">
            <ul className="pagination">
                {/* <li>
                    <a href="#">
                        <i className="fa fa-angle-double-left"></i>
                    </a>
                </li>
                <li className="active">
                    <a href="#">1</a>
                </li>
                <li>
                    <a href="#">2</a>
                </li>
                <li>
                    <a href="#">3</a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-angle-double-right"></i>
                    </a>
                </li> */}
                {countofPages.map((eachcount) =>
                    eachcount == active ? (
                        <li
                            className="active"
                            key={eachcount}
                            onClick={() => changeIndex(eachcount)}>
                            <a href="#">{eachcount}</a>
                        </li>
                    ) : (
                        <li
                            onClick={() => changeIndex(eachcount)}
                            key={eachcount}>
                            <a href="#">{eachcount}</a>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default CustomPagination;
