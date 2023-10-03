const removeFromArray = function (array, ...toRemove) {
  for (item of toRemove) {
    let removeIndex = array.indexOf(item);
    if (removeIndex >= 0) {
      array.splice(removeIndex, 1);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
