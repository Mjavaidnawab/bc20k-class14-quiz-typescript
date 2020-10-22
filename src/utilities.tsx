//And we will shuffle the questions we will create Another Function in utilities /because date returned will be first answer as correct, so user will select correct answers
export const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)