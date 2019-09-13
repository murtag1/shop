declare interface BookInfoType {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

declare interface StoreType {
  isRequestingBooks: boolean;
  isCartVisible: boolean;
  booksInfoList: BookInfoType[];
  selectedBookInfo: BookInfoType;
  selectedBookId: string;
  isPopupVisible: boolean;
  listBooksInCart: Map<string, number>;
}

declare interface ActionType {
  type: string;
  booksInfoList?: BookInfoType[];
  isbn?: string;
  numBooks?: number;
}

declare type DispatchType = (obj: ActionType) => ActionType;
