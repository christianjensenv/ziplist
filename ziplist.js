const test1 = ['a', 'b', 'c'];
const test2 = [1, 2, 3];
const test3 = [9, 9, 9, 9];

function zipList(list1, list2) {
  const zippedlist = [];
  if (list1.length === list2.length) {
    for (let i = 0; i < list1.length; i++) {
      zippedlist.push(list1[i], list2[i]);
    }
    return zippedlist;
  }
  return zippedlist;
}

console.log(zipList(test1, test2));
console.log(zipList(test1, test3));

function zipListTheSimpleWay(list1, list2) {
  if (list1.length === list2.length) {
    return _.flatten(_.zip(list1, list2));
  }
  return [];
}

console.log(zipListTheSimpleWay(test1, test2));
console.log(zipListTheSimpleWay(test1, test3));