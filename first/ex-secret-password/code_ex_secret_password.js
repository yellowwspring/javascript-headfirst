let access = document.getElementById("code9");
// getElementById находит элемент с заданым идентификатором, т.е. “code9”
let code = access.innerHTML;
// Свойство innerHTML элемента  может использоваться для изменения содержимого элемента.
//Элемент с идентификатором  “code9” является элементом абзаца, а содержимое элемента
// (его «внутренняя разметка HTML») представляет собой  текст «My watch stopped at».
code = code + "midnight";
//Код присоединяет строку “ midnight” к строке, содержащейся в code (то есть «My watch stopped at»).
// Затем страница отображает окно с паролем, хранящимся в переменной code
alert(code);

