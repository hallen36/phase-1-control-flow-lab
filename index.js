function scuberGreetingForFeet(number){
  if(number <= 400) {
    return 'This one is on me!'
  } else if (number > 2500) {
    return 'No can do.'
  } else if (number > 2000) {
    return 'I will gladly take your thirty bucks.'
  }
}

function ternaryCheckCity(city){
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.' }

function switchOnCharmFromTip(response){
  let greetings;
  switch(response){
  case 'generous':
        greetings = 'Thank you so much.';
        break;
  case 'not as generous':
        greetings = 'Thank you.';
        break;
  default:
        greetings = 'Bye.';
      } 
    return greetings
  }
