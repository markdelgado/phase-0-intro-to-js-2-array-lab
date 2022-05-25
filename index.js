
const cats = ["Milo", "Otis", "Garfield"];
 
function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats; }
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name){
    var name_1= [...cats,name];
    return name_1;}
function prependCat(name){
    var name_2 = [name, ...cats]
    return name_2
}
function removeLastCat() {
    var newcats= cats.slice(0, cats.length-1);
    return newcats
}
function removeFirstCat() {
    var newCats= cats.slice(1)
    return newCats
}
