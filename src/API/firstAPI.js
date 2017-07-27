var xhr = new XMLHttpRequest();

var onSuccess = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObjsArray = JSON.parse(this.responseText);

        var container = document.getElementById("imagesContainer");
        for (var i = 0; i < 100; ++i) {
          var myObj = myObjsArray[i];
          var elem = document.createElement('img');
          var node = elem.setAttribute("src", myObj.url);

          elem.setAttribute("title", myObj.title);
          elem.append(node);
          container.append(elem);

        }

    }

};


xhr.addEventListener('load', onSuccess)
xhr.open("GET", "https://jsonplaceholder.typicode.com/photos");
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
