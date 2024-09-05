// updatePositions.js
export function updatePositions(robots) {
    return robots.map(robot => ({
        ...robot,
        x: robot.x + Math.random() * 10 - 5, // Randomly move x by -5 to 5
        y: robot.y + Math.random() * 10 - 5  // Randomly move y by -5 to 5
    }));
}
