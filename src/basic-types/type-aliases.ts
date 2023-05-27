type DeveloperType = {
    name: string;
    field: string;
    skills: string [];
    profession: string;
    isEmployed: boolean;
    salary: number;
}

const alkalineFoster: DeveloperType = {
    name: 'Farhan Hasin',
    field: 'Front-end',
    skills: ['Javascript','ReactJS','NextJS','TailwindCSS','Typescript','Material-UI','React-Native','Expo'],
    profession: 'Junior Frontend Web Developer',
    isEmployed: true,
    salary: 25000
}

const hashMoonshield: DeveloperType = {
    name: 'Farhan Hasin',
    field: 'Full Stack',
    skills: ['Javascript','ReactJS','ExpressJS','NodeJS','MongoDB','NextJS','TailwindCSS','Typescript','React-Native','Expo'],
    profession: 'Junior Frontend Web Developer',
    isEmployed: true,
    salary: 25000
}

type Operation = (x:number, y:number) => number;

const calculate = (
        number1:number, //10
        number2:number, //20
        operation: Operation // (x,y) => x-y // (100,20) => 100-20
    ) => {
        return operation(number1, number2);
}

calculate(100,20, (x,y) => x + y);
calculate(100,20, (x,y) => x * y);
calculate(100,20, (x,y) => x - y);