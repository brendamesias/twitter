var characters = document.getElementById('insert');
var btn = document.getElementById('save');
var tweetsPublicados = document.getElementById('container-tweets');
//  creando función que cuenta n° de caracteres ingresados
characters.addEventListener('keyup', function(event) {
  var numberCharacters = document.getElementById('number_characters');
  var size = characters.value.length;
  var max = 140;
  var finalSize = numberCharacters.textContent = (max - size);
  // si los caracteres pasan los 140, desabilitar el btn
  if (finalSize <= 0) {
    btn.disabled = true;
    numberCharacters.style.color = 'red';

    // cambiar contador a color morado si hay más de 120 caracteres
  } else if (finalSize <= 20 && finalSize > 10) {
    btn.disabled = false;
    numberCharacters.style.color = 'purple';
    // cambiar contador a color fucsia si hay más de 130 caracteres
  } else if (finalSize < 10 && finalSize >= 0) {
    btn.disabled = false;
    numberCharacters.style.color = '#FF1493';
  } else if (finalSize < 0) {
    btn.disabled = false;
    numberCharacters.style.color = 'red';
  } else {
    btn.disabled = false;
    numberCharacters.style.color = '#7788' ;
  }
});
// creando función que allacene lo que es cribe en el textArea para que lo muestre como tweets en un parrafo
btn.addEventListener('click', function(event) {
  if (characters.value) {
    var tweet = document.createElement('p');
    var textTweet = document.createTextNode('');
    textTweet.textContent = characters.value;
    tweet.appendChild(textTweet);
    tweetsPublicados.appendChild(tweet);
    tweetsPublicados.insertBefore(tweet, tweetsPublicados.firstElementChild);
    characters.value = '';
  };
});
