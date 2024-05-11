// Code your solution in this file!


function distanceFromHqInBlocks(location) {
    const mainLocation = 42;
    return Math.abs(location - mainLocation); 
}

function distanceFromHqInFeet(location) {
    const mainLocation = 42;

    return Math.abs(location - mainLocation)*264 ;

}


function distanceTravelledInFeet(a,b){

    return Math.abs(b-a)*264

}


function calculatesFarePrice(a,b) {
    const distanceTravelled = Math.abs(b-a)*264
    if(distanceTravelled<=400){
        return 0
    } else if(distanceTravelled >400 && distanceTravelled <2000){
        return (distanceTravelled - 400)*0.02
    } else if(distanceTravelled >2000 && distanceTravelled < 2500){
        return 25
    } else if (distanceTravelled >2500){
        return 'cannot travel that far'
    }
  }