import {
    EntityDtoIconAdd
  } from './entityIconAdd.dto';
import {
    EntityDtoIconRemove
  } from './entityIconRemove.dto';

export class changeIconLib {
    constructor() {
    }

    addIcon(array, id) {
        var count;
        var arr = array.forEach(function(item, i) {
          if (item.id === id) {
            count = i;
          }
        });
        var newArr = array.filter(function(item) {
          return item.id === id;
        });
        var newArr2 = newArr.map(function(item) {
          return new EntityDtoIconAdd(item);
        });
        array.splice(count, 1, newArr2[0]);
        return array;
    }

    removeIcon(array, id) {
        var count;
        var arr = array.forEach(function(item, i) {
          if (item.id === id) {
            count = i;
          }
        });
        var newArr = array.filter(function(item) {
          return item.id === id;
        });
        var newArr2 = newArr.map(function(item) {
          return new EntityDtoIconRemove(item);
        });
        array.splice(count, 1, newArr2[0]);
        return array;
    }
}