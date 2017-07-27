var xhr = new XMLHttpRequest;
var ixhr = new XMLHttpRequest;

var onAlbumImagesGet = function()
{
  if(this.readyState == 4 && this.status == 200){
    var myImgArray = JSON.parse(this.responseText);

    clearImages();
    var size = myImgArray.length;
    var i=0, miliseconds=0;

    while(i+3 < size)
    {
      setTimeout(function(i) {
        displayImages(myImgArray, i, i+4);
      }, miliseconds, i);

      i=i+3;
      miliseconds += 200;
    }
  }
}

var displayImages = function(images, begin, end)
{
  var container = document.getElementById("photosContainer");

  var rowElem = document.createElement("div");
  rowElem.classList = 'row';

  for(var i=begin; i< end; i++)
  {
    var colElem = document.createElement("div");

    colElem.classList = "col-xs-6 col-md-3";

    var aHrefElem = document.createElement("a");

    aHrefElem.setAttribute("href","#");
    aHrefElem.classList = "thumbnail";

    rowElem.appendChild(colElem);
    colElem.appendChild(aHrefElem);

    var elem = document.createElement('img');

    var node = elem.setAttribute("src", images[i].url);

    elem.append(node);

    aHrefElem.appendChild(elem);
  }

  container.append(rowElem);
}

var newsFunction = function()
{
  if(this.readyState == 4 && this.status == 200)
  {
    myArray = JSON.parse(this.responseText);

    var container = document.getElementById("albumsContainer");
    var btnColor = ["btn btn-default", "btn btn-primary", "btn btn-success", "btn btn-info", "btn btn-warning", "btn btn-danger"];
    for(var i=0; i< myArray.length; i++)
    {
      var myObj = myArray[i];
      var elem = document.createElement('button');
      elem.classList = 'button text-left ' + btnColor[i%6];
      var elemText = document.createTextNode(myObj.id + ". " + myObj.title);
      elem.append(elemText);
      container.append(elem);

      (function() {
        var id = myObj.id;

        elem.addEventListener("click", function() {
          requestAlbumImages(id);
        });
      })();
    }
  }
}

var requestAlbumImages = function(id)
{
  ixhr.addEventListener("load", onAlbumImagesGet);
  ixhr.open("GET", "https://jsonplaceholder.typicode.com/photos"+"?albumId="+id);
  ixhr.send();
}

var clearImages = function()
{
  var containerImages = document.getElementById("photosContainer");
  console.log(containerImages);

  while (containerImages.firstChild) {
    containerImages.removeChild(containerImages.firstChild);
  }
}

xhr.addEventListener("load", newsFunction);
xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
xhr.send();
