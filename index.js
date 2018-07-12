//Code your solution here
function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.querySelector('#nested .target');
}
function increaseRankBy(n){
const rankedLists = document.querySelectorAll('.ranked-list');

for (let i = 0, l = children.length; i < l; i++) {
  expect(parseInt(children[i].innerHTML)).toEqual(start + i + 3);
}
for (let i = 0, l = children.length; i < l; i++) {
  expect(parseInt(children[i].innerHTML)).toEqual(start - i + 3);
}

}
function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}