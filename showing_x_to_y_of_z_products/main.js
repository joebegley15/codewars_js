var paginationText = function(pageNumber, pageSize, totalProducts){
  var firstProduct = (pageNumber - 1) * pageSize + 1, lastProduct, numberOfReqPages = Math.ceil(totalProducts / pageSize);
  if (pageNumber == numberOfReqPages) {
    lastProduct = totalProducts;
  } else {
    lastProduct = pageNumber * pageSize;
  }
  return 'Showing ' + firstProduct + ' to ' + lastProduct + ' of ' + totalProducts + ' Products.';
}