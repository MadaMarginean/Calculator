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
      miliseconds += 2000;
    }
    //setInterval(function(){ alert("Hello"); }, 3000);
    //displayImages(myImgArray, begin, end);
  }
}

var displayImages = function(images, begin, end)
{
  var container = document.getElementById("photosContainer");

  //for(var i=0; i< images.length; i++)
  for(var i=begin; i< end; i++)
  {
    var elem = document.createElement('img');

    var node = elem.setAttribute("src", images[i].url);
    elem.classList = 'images';
    //elem.setAttribute("title", myObj.title);
    elem.append(node);
    container.append(elem);
  }
}

var newsFunction = function()
{
  if(this.readyState == 4 && this.status == 200)
  {
    myArray = JSON.parse(this.responseText);

    var container = document.getElementById("albumsContainer");

    for(var i=0; i< myArray.length; i++)
    {
      var myObj = myArray[i];
      var elem = document.createElement('button');
      elem.classList = 'button';
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
  //containerImages.textContent = "";
  while (containerImages.firstChild) {
    containerImages.removeChild(containerImages.firstChild);
  }
}

xhr.addEventListener("load", newsFunction);
xhr.open("GET", "https://jsonplaceholder.typicode.com/albums");
xhr.send();
