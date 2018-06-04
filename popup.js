var forage = localforage.createInstance({
    name: "KodiLauncher"
});

var poll = function () {
    $.ajax({
        url: "http://localhost:8080/poll",
        crossDomain: true,
        dataType: "json",
        success: function(data){
            console.log(data);
            poll();
        },
        error: function() {
            //poll();
        },
        timeout: 10000000000
    });
};

forage.config({
    driver: localforage.INDEXEDDB,
    version: 1.0,
    storeName: 'yandexRadio'
});

//forage.setItem("key", "value");

poll();