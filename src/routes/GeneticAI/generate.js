export function generatenew(POPULATION, costFunctionArray,NUM_OF_POPULATION) {
    const PARENTS = 2;

    // Finde die zwei höchsten Werte und ihre Indizes in costFunctionArray
    let maxIndex1 = -1, maxIndex2 = -1;
    let max1 = -Infinity, max2 = -Infinity;

    for (let i = 0; i < costFunctionArray.length; i++) {
        if (costFunctionArray[i] > max1) {
            max2 = max1;
            maxIndex2 = maxIndex1;
            max1 = costFunctionArray[i];
            maxIndex1 = i;
        } else if (costFunctionArray[i] > max2) {
            max2 = costFunctionArray[i];
            maxIndex2 = i;
        }
    }
    console.log(costFunctionArray[maxIndex1])
    

    const parent1 = POPULATION[maxIndex1];
    const parent2 = POPULATION[maxIndex2];
    let muteatechild
    let newPOPULATION = [];
    let child = [];
    console.log(parent1)
    const half = Math.floor(parent1.length / 2);
    console.log("parent1")
    for(let y = 0;y<NUM_OF_POPULATION;y++){
    for (let i = 0; i < parent1.length; i++) {
        if (i < half) {
            child.push(parent1[i]);
        } else {
            child.push(parent2[i]);
        }
    }


    muteatechild = mutate(child);
    child = []
    newPOPULATION.push(muteatechild);
    
    
}
console.log(newPOPULATION[0])
return newPOPULATION;
}

function mutate(individual) {

    console.log("mutate")

    let mutationRate = 0.05;

    for (let i = 0; i < individual.length; i++) {
        if (Math.random() < mutationRate) {
            // Generiere einen neuen RGB-Wert
            const newGene = [
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256),
                Math.floor(Math.random() * 256)
            ];
            individual[i] = newGene;
        }
    }

    return individual;
}