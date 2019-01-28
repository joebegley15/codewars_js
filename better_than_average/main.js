const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((sum, item) => sum + item) / classPoints.length < yourPoints;
