'use strict';
let myObj = {
  id: 123,
  name: 'cxy'
};

modifyId(myObj);

console.log(myObj.id);

function modifyId(obj) {
  obj.id = 111;
}