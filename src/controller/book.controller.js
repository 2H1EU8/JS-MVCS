class BookController {
  constructor(bookServices, bookViews) {
    this.bookServices = bookServices;
    this.bookViews = bookViews;

    // Service
    this.bookServices.bindDataChanged(this.onDataChanged);
    this.bookViews.displayPagination(1, 1);

    // View
    this.bookViews.bindAddBook(this.handleAddBook);
    this.bookViews.bindDeleteBook(this.handleDeleteBook);
    this.bookViews.bindUpdateModal();
    this.bookViews.bindCloseToast();
    this.bookViews.handelToggleModal();
    this.bookViews.bindUpdateBook(this.handleUpdateBook);
    this.bookViews.bindToggleStatus(this.handelToggle);
    this.bookViews.bindSearch(this.handelSearch);
    this.bookViews.bindUpdatePage(this.handlePaginate);
  }

  onDataChanged = (books) => {
    this.bookViews.displayData(books);
    console.log(this.bookServices.books.length);
  };

  handlePaginate = (pageIndex) => {
    this.bookServices.getBookBookOnPage(pageIndex);
  };

  handleAddBook = (book) => {
    this.bookServices.add(book);
  };

  handleDeleteBook = (id) => {
    this.bookServices.delete(id);
  };

  handleUpdateBook = (id, book) => {
    this.bookServices.edit(id, book);
  };

  handelToggle = (id) => {
    this.bookServices.switchStatus(id);
  };

  handelSearch = (key) => {
    this.bookServices.search(key);
  };
}

export default BookController;
