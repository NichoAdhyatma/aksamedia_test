import {useSearchParams} from 'react-router-dom';

interface PaginationOptions {
    totalItems: number;
    itemsPerPage?: number;
}

export const usePagination = ({totalItems, itemsPerPage = 5}: PaginationOptions) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const paginate = <T, >(items: T[]): T[] => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return items.slice(startIndex, endIndex);
    };

    const setPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setSearchParams(prevParams => {
            const newParams = new URLSearchParams(prevParams);
            newParams.set('page', page.toString());
            return newParams;
        });
    };

    return {
        currentPage,
        totalPages,
        paginate,
        setPage,
    };
};
