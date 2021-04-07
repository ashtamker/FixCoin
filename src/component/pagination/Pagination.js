import React from 'react';

const Pagination = ({coinPerPage, totalCoins, makePage}) => {
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalCoins / coinPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => makePage(number)} href="!#" className="page-link">{number}</a>

                    </li>
                ))}

            </ul>

        </nav>
    )
}

export default Pagination;
