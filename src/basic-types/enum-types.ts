// Intersection: AND (&)
// Union: OR (|)

// Enums are discouraged - Not Best Practice.

type LearningDeveloperType = {
    name: string;
}

type JuniorDeveloperType = LearningDeveloperType & {
    expertise:string;
    experience:number;
}
enum Level{
    junior = 'JUNIOR', // default 0
    mid = 'MID', // default 1
    senior = 'SENIOR' // default 2
}
type JuniorPlusDeveloperType = JuniorDeveloperType & {
    leadershipExperience: number;
    level: Level;
}

const newDeveloper4: JuniorPlusDeveloperType = {
    name: "Farhan",
    expertise: 'Javascript',
    experience: 2,
    leadershipExperience: 1,
    level: Level.junior,
}

