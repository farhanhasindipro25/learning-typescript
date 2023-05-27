// Intersection: AND (&)
// Union: OR (|)

type LearningDeveloper = {
    name: string;
}

type JuniorDeveloper = LearningDeveloper & {
    expertise:string;
    experience:number;
}

type JuniorPlusDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: string;
}

const newDeveloper1: LearningDeveloper | JuniorDeveloper = {
    name: "Farhan",
    expertise: 'Javascript',
    experience: 0.5
}

const newDeveloper2: LearningDeveloper | JuniorDeveloper = {
    name: "Farhan",
}

const newDeveloper3: JuniorPlusDeveloper = {
    name: "Farhan",
    expertise: 'NextJS',
    experience: 1,
    leadershipExperience: 1,
    level: 'PLUS',
}