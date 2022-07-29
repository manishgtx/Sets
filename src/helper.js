export function removeSpace(list) {
    let newList=[];
    let count=0;
    for(let i=0;i<list.length;i++){
        if(list[i] === '' || list[i] === ' '){
            continue;
        }
        else {
            newList[count]=list[i].trim();
            count++;
        }
    }
    return newList;
}
export function removeDuplicate(list1) {
  for (let i = 0; i < list1.length - 1; i++) {
    for (let j = i + 1; j < list1.length; j++) {
      if (list1[i] === list1[j]) {
        delete list1[j];
      }
    }
  }
  let values = [];
  let counter = 0;
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== undefined) {
      values[counter] = list1[i];
      counter++;
    }
  }
  return values;
}
export function checker(list1,list2) {
    let only=[];
    let counter=0
    for(let i=0;i<list1.length;i++){
        let j;
        for(j=0;j<list2.length;j++){
            if(list1[i]=== list2[j]){
                break;
            }
        }
        if(j === list2.length){
            only[counter] = list1[i];
            counter++;
        }
    }
    return only;
}
export function same(list1,list2) {
    let both=[];
    let counter=0;
    for(let i=0;i<list1.length;i++){
        for(let j=0;j<list2.length;j++){
            if(list1[i] === list2[j])
            {
                both[counter] = list1[i];
                counter++;
            }
        }
    }
    return both;
}