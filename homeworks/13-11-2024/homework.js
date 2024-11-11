function trafficLights(road, n) {
  let results = [road];
  let timeTicked = 0;
  setInterval(() => {
    timeTicked++;
    const originLastResult = results[results.length - 1];
    let lastResult = results[results.length - 1];
    if(timeTicked % 5 === 0 && originLastResult.includes('R')) {
      lastResult = lastResult.replaceAll("R", "G");
    }
    if(timeTicked % 5 === 0 && originLastResult.includes('G')) {
      lastResult = lastResult.replaceAll("G", "O");
    }
    if(timeTicked % 1 === 0 && originLastResult.includes('O')) {
      lastResult = lastResult.replaceAll("O", "R");
      
    }
    console.log(lastResult);
  }, 1000);

}

trafficLights("C...R............G......", 10);

module.exports = trafficLights;
