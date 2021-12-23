"use strict";

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

let Pagination = {
  init: (array, pageSize) => {
    let finalArr = [];
    for (let i = 0; i < array.length; ) {
      let arr = [];
      for (; arr.length < pageSize && array[i] !== undefined; i++) {
        arr.push(array[i]);
      }
      finalArr.push(arr);
    }
    Pagination.book = finalArr;
    return finalArr;
  },
  currentPage: 1,
  prevPage: () => {
    if (Pagination.currentPage === 1) {
    } else {
      Pagination.currentPage--;
    }
  },
  nextPage: () => {
    if (Pagination.currentPage === Pagination.book.length + 1) {
    } else {
      Pagination.currentPage++;
    }
  },
  firstPage: () => {
    Pagination.currentPage = 1;
  },
  lastPage: () => {
    Pagination.currentPage = Pagination.book.length + 1;
  },
  goToPage: (num) => {
    if (Pagination.book[num] === undefined) {
      return "There is no such page";
    } else {
      Pagination.currentPage = num;
      return Pagination.book[Pagination.currentPage - 1];
    }
  },
  getPageItems: () => {
    return Pagination.book[Pagination.currentPage - 1];
  },
};

Pagination.init(alphabetArray, 4);
console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]
Pagination.nextPage().nextPage(); // add the current page by one
console.log(Pagination.getPageItems()); // ["e", "f", "g", "h"]
console.log(Pagination.goToPage(3)); // current page must be set to 3
