export default interface IPagination {
    pageNumber: number;
    itemsPerPage: number;
    totalItems: number;
    setPageNumber(page: number): void;
}