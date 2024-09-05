export function costFunction(individual, PIXEL_Array) {

    console.log("costFunction")

    console.log(individual)
    console.log(PIXEL_Array)
    let totalSimilarity = 0;
    const maxDifference = Math.sqrt(3 * Math.pow(255, 2)); // Maximal mögliche Differenz

    for (let i = 0; i < individual.length; i++) {
        const [r1, g1, b1] = individual[i];
        const [r2, g2, b2] = PIXEL_Array[i];

        
        const difference = Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2);
        const normalizedDifference = Math.sqrt(difference) / maxDifference;

        // Ähnlichkeit auf einer Skala von 0 bis 100
        const similarity = 100 * (1 - normalizedDifference);

        totalSimilarity += similarity;
    }
    console.log(totalSimilarity / individual.length)
    return totalSimilarity / individual.length;
}


export function evaluatePopulation(population,PIXEL_Array){

    console.log("evaluatePopulation")
    let populationFitness = [];
    console.log(population)
    console.log(PIXEL_Array)
    for (let i = 0; i < population.length; i++) {
        populationFitness.push(costFunction(population[i],PIXEL_Array));}
    console.log("populationFitness")
    return populationFitness
}
