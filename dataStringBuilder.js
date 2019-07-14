var btn = document.getElementById('btn'),
  container = document.getElementById('results'),
  counter = 0,
  theptags = document.getElementsByTagName('p');

btn.addEventListener('click', function(){
  var myRequest,
  myData;
  counter++;
  myRequest = new XMLHttpRequest();
  myRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+counter +'.json', 'true');
  myRequest.onload = function(){
    myData = JSON.parse(myRequest.responseText);
    formHTML(myData);
  }
  myRequest.send();
  if(counter >= 3){
     btn.className += 'hide';
  }
});

function formHTML(data){
  var stringBuilder = '',
  foodArr = [],
  foodLikes,
  howLong;
  data.forEach(animal => {
    stringBuilder  += '<div>' + animal.name + ' is a ' + animal.species + ' that likes ';
    for(props in animal.foods){
      //using switch in case I get ambitious and add food dislikes
      switch(props){
      case 'likes':
          howLong = animal.foods.likes.length;
            if(howLong === 1){
              stringBuilder += animal.foods.likes;
            }else if(howLong === 2 ){
                animal.foods.likes.forEach((likes, index) => {
                  if(index +1  < howLong ){
                    stringBuilder +=  animal.foods.likes[index] + ' and '
                  }else{
                    stringBuilder += animal.foods.likes[index];
                  }
                });
            }else{
              stringBuilder += animal.foods.likes;
            }
      break;
      } //end switch
    } // end for in loop
    stringBuilder +=  ".</div>";
  });
  container.insertAdjacentHTML('beforeend', stringBuilder);
}
