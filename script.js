// The parent Class
class Actor {
  constructor(hull, firepower, accuracy, alive) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }

  attack(target) {
    target.hull = target.hull - this.firepower * this.accuracy;
  }
  isAlive() {
    if (this.hull > 0) {
      return true;
    } else return false;
  }
}

class Uss extends Actor {
  constructor(hull, firepower, accuracy, alive) {
    super(hull, firepower, accuracy, alive);
  }
}

class Aliens extends Actor {
  constructor(hull, firepower, accuracy) {
    super(hull, firepower, accuracy);
  }
}
//array of aliens object
let alien = [];

for (let i = 0; i <= 7; i++) {
  alien[i] = new Aliens(
    getRandomInt(3, 6),
    getRandomInt(2, 4),
    getRandomArbitrary(0.6, 0.8)
  );
}

spaceuss = new Uss(20, 5, 0.7);

function startGame(arr, obj) {
  let i = 0;
  while (i < arr.length) {
    // You attack the first alien ship
    console.log(`YOU'RE ABOUT TO ATTACK THE ${i + 1} ALIEN`);
    obj.attack(arr[i]);
    if (arr[i].isAlive()) {
      console.log(
        `YOU WERE CLOSE!!! UNFORTUNATLY, THE ${
          i + 1
        } ALIEN SURVIVED AND IT'S ABOUT TO ATTACK YOU`
      );
      arr[i].attack(obj);
      if (!obj.isAlive()) {
        return console.log("YOU LOST!");
      }

      console.log(
        `HOPEFULLY!!! YOU SURVUVED BUT YOU LOST SOME HULL, YOUR CURRENT HULL IS ${obj.hull}, GET READY FOR THE NEXT BATTLE`
      );
      //retreat
        if (!retreatORattack(obj.hull)) {
          return console.log("YOU HAVE ENDED THE GAME SUCCESSFULLY");
        }

    } else {
      getKilled(i + 1);
      console.log(`GOOD JOB! THE ${i + 1} ALIEN HAS BEEN EXPLODED`);
     
        if (!retreatORattack(obj.hull)) {
          return console.log("YOU HAVE ENDED THE GAME SUCCESSFULLY");
        }

      i += 1;
    }
  }
  return console.log("CONGRATULATION YOU KILLED ALL THE ALIENS YOU WON!");
}

function getRandomArbitrary(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(1));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function retreatORattack(hull) {
  // confirm("DO YOU WANT TO GET IN ANOTHER BATTLE [YES], OR RETREAT [NO]")

  if (
    confirm(
      `DO YOU WANT TO GET IN ANOTHER BATTLE [YES], OR RETREAT [NO] REMINDER: YOUR CURRENT HULL IS ${hull}`
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function getKilled(counter) {
  const x = `#alien-${counter}`;
  document.querySelector(`#alien-${counter}`).style.backgroundColor = "BLACK";
}
