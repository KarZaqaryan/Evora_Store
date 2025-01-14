import React from "react";
import { Link } from "react-router-dom";

function Pagination({ totalPages, currentPage, basePath }) {
    const MAX_VISIBLE_PAGES = 10;
    const paginationLinks = [];

    // Calculate the range of pages to show
    const startPage = Math.floor((currentPage - 1) / MAX_VISIBLE_PAGES) * MAX_VISIBLE_PAGES + 1;
    const endPage = Math.min(startPage + MAX_VISIBLE_PAGES - 1, totalPages);

    // Previous page group navigation
    if (startPage > 1) {
        paginationLinks.push(
            <li key="prev-group">
                <Link
                    to={`${basePath}/${startPage - 1}`}
                    className="pagination__link"
                >
                    &laquo;
                </Link>
            </li>
        );
    }

    // Generate visible pagination links
    for (let i = startPage; i <= endPage; i++) {
        paginationLinks.push(
            <li key={i}>
                <Link
                    to={`${basePath}/${i}`}
                    className={`pagination__link ${currentPage === i ? "active" : ""}`}
                >
                    {i}
                </Link>
            </li>
        );
    }

    // Next page group navigation
    if (endPage < totalPages) {
        paginationLinks.push(
            <li key="next-group">
                <Link
                    to={`${basePath}/${endPage + 1}`}
                    className="pagination__link"
                >
                    &raquo;
                </Link>
            </li>
        );
    }

    return <ul className="pagination">{paginationLinks}</ul>;
}

export default Pagination;
