function declareWinner(fighter1, fighter2, firstAttacker) {
    function Fighter(name, health, damagePerAttack) {
          this.name = name;
          this.health = health;
          this.damagePerAttack = damagePerAttack;
          this.toString = function() { return this.name; }
  }
  }