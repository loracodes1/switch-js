const order = 'hamburger';

let ingredients;

switch (order) {
    case 'cheeseburger':
        ingredients = 'bun, burger, cheese, lettuce, tomato, onion';
        break;
    case 'hamburger':
        ingredients = 'bun, burger, lettuce, tomato, onion';
        break;
    case 'malted':
        ingredients = 'milk, ice cream, malted milk powder';
        break;
    default:
        console.log("Sorry, that's not on the menu right now.");
        break;
}
console.log(order)
console.log(ingredients)


//ALARM SWITCH
//Monday 7am
//Tuesday-thursday 4am
//friday 10am
//sat 9am
//sunday 9am

let day ='Monday';
switch(day){
    case 'Monday':
    console.log("7am");
    break
    case 'Tuesday':
    console.log("4am");
    break
    case 'Wednesday':
    console.log("4am");
    break
    case 'Thursday':
    console.log("4am");
    break
    case 'Friday':
    console.log("10am");
    break
    case 'Saturday':
    console.log("9am");
    break
    case 'Sunday':
    console.log("9am");
    break
    default:
        console.log("Just sleep")
}


