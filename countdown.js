let countdown = 60;


while (countdown >= 0) {
  if (countdown === 50){
    console.log('Orbital transfers from ground to internal power')
  } else if (countdown === 31){
    console.log('Ground launch sequencer is go for auto sequence start');
  } else if (countdown === 16){
    console.log('Activate launch pad suppression system');
  } else if (countdown === 10){
    console.log('Activate main engine hydrogen burnoff system');
  } else if (countdown === 6){
    console.log('Main engine start');
  } else if (countdown === 0){
    console.log('Solid rocket booster ignition and liftoff!');
  } else {
    console.log('T-' + countdown + ' seconds');
  }

  
  countdown--;
}