/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(number=-1){
  if (number==0){
    return 'Lasagna is done.'
  }
  else if(number>0){
    return 'Not done, please wait.'
  }
  else 
    return 'You forgot to set the timer.'
  
}
export function preparationTime(layers,no=2){
  return (layers.length)*no
}
export function quantities(content){
  let noodles=0;
  let sauce=0
  for (let q in content){ 
    if(content[q]=='noodles'){
      noodles+=50;
    }
    else if(content[q]=="sauce"){
      sauce+=0.2;
    }
  }
  return {"noodles":noodles,"sauce":sauce}
}
export function addSecretIngredient(friendsList,myList){
      myList.push(friendsList[friendsList.length-1])
      
}
export function scaleRecipe(recipe,amount){
  const newrecipe=Object.assign({},recipe)
  for (let i in newrecipe){
    newrecipe[i]*=amount/2
  }
  return newrecipe
}
