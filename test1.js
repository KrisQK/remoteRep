// 全局变量
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// 修改这行下面的代码
function add(bookName) {

  
  return bookList.slice().concat(bookName);

  // 修改这行上面的代码
}

// 修改这行下面的代码
function remove(bookName) {
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    
    return bookList.slice(book_index).concat(bookList.slice(-book_index+1));

    // 修改这行上面的代码
    }
}