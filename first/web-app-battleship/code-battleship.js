let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;

    },
    displayHit: function (location){
        let cell = document.getElementById(location);
        cell.setAttribute("class", "hit")
        /*
        Элементу назначается класс “hit”.При этом в ячейке таблицы
        немедленно появляется изображение корабля.
         */
    },
    displayMiss: function (location){
        let cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};
//test table
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
//test message
view.displayMessage("welcome user!")