function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0){
      if (firstAttacker === fighter1.name){
        fighter2.health -= fighter1.damagePerAttack
        if (fighter2.health <= 0){
          return fighter1.name
        }
        fighter1.health -= fighter2.damagePerAttack
        if (fighter1.health <= 0){
          return fighter2.name
        }
      }
      
      if (firstAttacker === fighter2.name){
        fighter1.health -= fighter2.damagePerAttack
        if (fighter1.health <= 0){
          return fighter2.name
        }
        fighter2.health -= fighter1.damagePerAttack
        if (fighter2.health <= 0){
          return fighter1.name
        }
      }
    }