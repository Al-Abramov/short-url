export interface PaginationProps {
  previousPage: () => void;
  nextPage: () => void;
  gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageIndex: number;
  pageOptions: number[];
  limit: number;
}
