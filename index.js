/// Iteration 2: getMaxNum
function getMaxNum(numArray) {
   
    let max = 0;

    for (let i = 0; i < numArray.length; i++) {
      const num = numArray[i];
  
      if (num > max) {
        max = num;
      }
    }
    
    return max;
  }
// Iteration 2 tests:
//console.log(getMaxNum([45, 67, 12, 34])) // Should return 67
// console.log(getMaxNum(['hello', [0, 1, 2], 34, 45, 12, 0])) // Should return 45

/// Iteration 3: changeItem

function changeItem(newArray, num1, num2) {

  for ( let i = 0; i < newArray.length; i = i+1){
    if(newArray[i] === num1) {
      newArray[i] = num2;
    }
  }
  return newArray;
}
//console.log(changeItem([17, 18, 6, 18, 3], 18, 2));
// Iteration 3 tests:
// console.log(changeItem([3, 5, 7], 3, 4)) // Should return [4,5,7]
// console.log(changeItem([17, 18, 6, 18, 3], 18, 2)) // Should return [17, 2, 6, 2, 3];
// console.log(changeItem([1, 1, 3, 2, 4, 1, 1], 1, 8)) // Should return [8, 8, 3, 2, 4, 8, 8] 



/// Iteration 4: orderByDate

function orderByDate(birthdayArray) {
  const orderBirthdayArray = [...birthdayArray];
  const orderingDate = orderBirthdayArray.sort((a, b) => {
    return a.year < b.year ? -1 : 1;
  });

  return orderingDate;
}


// Iteration 4 tests:
const birthdays = [
  {
    name: 'Bob',
    year: 1989,
  },
  {
    name: 'Rosita',
    year: 1990,
  },
  {
    name: 'Stevie',
    year: 1988,
  },
  {
    name: 'Marlon',
    year: 1979,
  },
]
const importantDates = [
  {
    title: 'Wedding aniversary',
    year: 2014,
  },
  {
    name: "Daddy's birthday",
    year: 2013,
  },
  {
    name: 'Graduation party',
    year: 2019,
  }
]
//console.log(orderByDate(birthdays)); // Should return them ordered 1979, 1988, 1989, 1990
//console.log(orderByDate(importantDates)) // Should return them ordered 2013, 2014, 2019




/// Iteration 5: new machine gun


class Weapon {
  constructor(type, power, ammo) {
    this.type = type;
    this.power = power;
    this.shootingInterval = undefined;
    
    if(ammo === undefined) {
      this.ammo = 10;
    } else {
      this.ammo = ammo;
    }
    console.log(this.type, this.power, this.ammo); 
  }
  shoot() {
    this.shootingInterval = setInterval(() => {
      if (this.ammo > 0) {
        this.ammo--;
        console.log(this.ammo);
      } else{
        this.stopShooting();
      }
    }, 30);
  }

  stopShooting() {
    clearInterval(this.shootingInterval);

  }

  reload(number) {
    this.ammo = this.ammo + number;
    console.log(this.ammo);
}
}

// reload()

// Iteration 5 tests
const machineGun = new Weapon('Machine gun', 90, 50);
//machineGun.reload(5000);
console.log('Begin:')
machineGun.shoot();
setTimeout(() => machineGun.stopShooting(), 1000);
setTimeout(() => machineGun.reload(35), 1500);


