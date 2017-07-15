var productList = [
  {
    name: 'LOreal Roman',
    price: '$23',
    rating: 10
  },
  {
    name: 'Shiels',
    price: '$50',
    rating: 17
  },
  {
    name: 'Bonnel',
    price: '$12',
    rating: 6
  },
  {
    name: 'Gao Zen',
    price: '$122',
    rating: 9
  }
];

module.exports = {
  addProduct: function(name, price, rating){

    if (name === '' || price === '' || rating === '') {
      throw new Error('Please fill in all the Info!');
    }

    if (isNaN(Number(price)) || isNaN(Number(rating))) {
      throw new Error('Number only!');
    }

    productList.push({name: name, price: '$' + price, rating: rating});
  },
  getAllProducts: function() {
    return productList;
  },
  getOneProduct: function(name) {
    return productList.filter(function(product){
      if (product.name === name) {
        return true;
      }
    })[0];
  },
  removeProduct: function(name) {
    productList = productList.filter(function(product){
      if (product.name !== name) {
        return true;
      }
    });
  },
  getRankOneProduct: function() {
    var topRating = 0;
    var result;
    productList.forEach(function(product){
      if (product.rating > topRating) {
        result = product.name;
        topRating = product.rating;
      }
    });
    return result;

  }
}

