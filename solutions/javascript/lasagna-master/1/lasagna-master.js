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
export function cookingStatus(time){
  if (time===0) return "Lasagna is done.";
  if(time) return "Not done, please wait.";
  return "You forgot to set the timer."
}

export function preparationTime(layers=[],time=2){
  return layers.length * time;
}

export function quantities(layers){
  const map ={
    sauce:0,
    noodles:0
  }
  for (let layer  of layers) {
    if(layer === "sauce"){
      const sauce = map["sauce"] + 0.2;
      map["sauce"]= Number(sauce.toFixed(2));
    
    }else if(layer === "noodles"){
      map["noodles"]+= 50;
    }
  }
    return map;
}

export function addSecretIngredient(list=[],listToAdd=[]) {
  listToAdd[listToAdd.length]=list[list.length-1];
}

export function scaleRecipe(recipe,portion) {
 const map ={};
  for (let key in recipe) {
    map[key]=recipe[key] * (portion/2);
  }
  return map;
}
