export class Pagination {
  constructor(data, pageSize) {
    this.data = data;
    this.pageSize = pageSize;
  }

  getPage(n) {
    const offset = n * this.pageSize;

    return this.data.slice(offset, offset + this.pageSize);
  }

  getTotalPages() {
    return Math.ceil(this.data.length / this.pageSize);
  }
}

export const PageNavigation = ({
  nextPageHandler,
  previousPageHandler,
  currentPage,
  totalPages,
}) => {
  
}
