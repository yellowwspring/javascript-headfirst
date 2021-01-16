
document.getElementById("greenplanet");
//getElementById(“greenplanet”) возвращает элемент абзаца,  соответствующий идентификатору “greenplanet”...
let planet = document.getElementById("greenplanet");
planet.innerHTML = "Red Alert: hit by phaser fire!";
// Свойство innerHTML элемента planet может использоваться для изменения содержимого элемента.


//Как задать атрибут методом setAttribute
planet.setAttribute("class", "redtext");
/*Метод получает два аргумента: имя атрибута,который нужно задать или изменить...
 было ---> <p id =”greenplanet”> [text] </p>
 стало ---> <p id =”greenplanet” class="redtext"> [text] </p>
 */

// Как читать атрибут методом getAttribute