import React from 'react';
import IPagination from '../interfaces/pagination';



const Pagination = ({
    totalItems,
    itemsPerPage,
    pageNumber,
    setPageNumber,
}:IPagination) => {
    const lastPage = Math.ceil(totalItems / itemsPerPage);

    return (
        <div>
            <ul className='flex flex-row'>
                {pageNumber > 1 && (
                    <li className='page-item'>
                        <button
                            className='page-link'
                            onClick={() => setPageNumber(pageNumber - 1)}>
                            Previous
                        </button>
                    </li>
                )}

                {pageNumber < 3 ? (
                    <>
                        {[1, 2, 3, 4, 5].map(
                            (page) =>
                                page < lastPage && (
                                    <li key={page} className='page-item'>
                                        <button
                                            className={'page-link' + (pageNumber === page ? ' bg-grey-600' : '')}
                                            onClick={() => setPageNumber(page)}>
                                            {page}
                                        </button>
                                    </li>
                                )
                        )}{' '}
                    </>
                ) : (
                    <>
                        {[
                            pageNumber - 2,
                            pageNumber - 1,
                            pageNumber,
                            pageNumber + 1,
                            pageNumber + 2,
                        ].map(
                            (page) =>
                                page < lastPage && (
                                    <li key={page} className='page-item'>
                                        <button
                                            className={'page-link' + (pageNumber === page ? ' bg-grey-600' : '')}
                                            onClick={() => setPageNumber(page)}>
                                            {page}
                                        </button>
                                    </li>
                                )
                        )}{' '}
                    </>
                )}

                {pageNumber < lastPage && (
                    <li className='page-item'>
                        <button
                            className='page-link'
                            onClick={() => setPageNumber(pageNumber + 1)}>
                            Next
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Pagination;
