function declareWinner(fighter1, fighter2, firstAttacker) {
  var firstTurn = false;
  if (fighter1.name == firstAttacker)
  {
    firstTurn = true;
  }
  while(fighter1.health > 0 && fighter2.health > 0)
  {
    if (firstTurn)
    {
      fighter2.health -= fighter1.damagePerAttack;
    }
    else
    {
      fighter1.health -= fighter2.damagePerAttack;
    }
    firstTurn = !firstTurn;
  }
  
  return fighter1.health > 0 ? fighter1.name : fighter2.name;
}