function basicTeenager(age) {
    if (age >= 13 && age <= 19)
      {return 'You are a teenager!';}
}

function teenager(age) {
  if (age >= 13 && age <= 19)
    {return 'You are a teenager!';}
  return 'You are not a teenager';
}

function ageChecker(age) {
  if (age >= 13 && age <= 19)
    {return 'You are a teenager!';}
  else if (age >= 0 && age <= 12)
        {return 'You are a kid';}
  else if (age >= 20)
      {return'You are a grownup';}
}

function switchAge(age) {
  switch(age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return'You are a teenager';
      break;
    default:
      return 'You have an age';
  }
}

function ternaryTeenager(age) {

return  age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"

}
