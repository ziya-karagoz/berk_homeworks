function trafficLights(road, n) {
    const roadArray = road.split(""); // Split the road into an array for easier manipulation
    let carPosition = roadArray.indexOf("C"); // Find the position of the car
    const trafficLights = {}; // Object to store positions and timer for each traffic light

    // Initialize the traffic lights
    for (let i = 0; i < roadArray.length; i++) {
        if (roadArray[i] === "G" || roadArray[i] === "R") {
            trafficLights[i] = {
                position: i,
                color: roadArray[i],
                timer: roadArray[i] === "G" ? 5 : 5,
            };
        }
    }

    const result = [road]; // Array to store the road at each second

    // Run the simulation for n iterations
    for (let t = 1; t <= n; t++) {
        // Step 1: Update traffic Lights
        for (const key in trafficLights) {
            const light = trafficLights[key];
            light.timer--;

            // Change the light color based on the timer reachin zero
            if (light.timer === 0) {
                if (light.color === "G") {
                    light.color = "O";
                    light.timer = 1;
                } else if (light.color === "O") {
                    light.color = "R";
                    light.timer = 5;
                } else if (light.color === "R") {
                    light.color = "G";
                    light.timer = 1;
                }
            }
        }

        // Step 2: Move the car
        if (carPosition < roadArray.length) {
            const nextPosition = carPosition + 1;
            let canMove = true;

            if (trafficLights[nextPosition]) {
                const nextLight = trafficLights[nextPosition];
                if (
                    nextLight.color === "R" ||
                    (nextLight.color === "O" && nextPosition === carPosition + 1)
                ) {
                    canMove = false;
                }
            }
            if (canMove) carPosition++;
        }

        // Step 3: Build the new state of the road
        const newRoad = roadArray
            .map((char, idx) => {
                if (idx === carPosition) return "C";
                if (trafficLights[idx]) return trafficLights[idx].color;
                return ".";
            })
            .join("");

        result.push(newRoad);
    }
    return result;
}

console.log(trafficLights("C...R............G.....", 10));
