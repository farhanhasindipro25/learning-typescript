const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = 'Data is fetched!';
        if(data){
            resolve(data);
        }
        else{
            reject("Failed to fetch data!")
        }
    });
};

const getPromiseData = async(): Promise<void> => {
    const result = await makePromise();
    console.log(result)
};

const makePromise2 = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true;
        if(data){
            resolve(data);
        }
        else{
            reject(false);
        }
    });
};

const getPromiseData2 = async(): Promise<void> => {
    const result = await makePromise2();
    console.log(result)
};

type DataType={
    data:string;
}

const makePromise3 = (): Promise<DataType> => {
    return new Promise<DataType>((resolve, reject) => {
        const data: DataType = {data:"Data is fetched!"};
        if(data){
            resolve(data);
        }
        else{
            reject("Failed to fetch data!");
        }
    });
};

const getPromiseData3 = async(): Promise<void> => {
    const result = await makePromise3();
    console.log(result)
};

interface IToDo{
    userId: number,
    id:number,
    title: string,
    completed: boolean
}

const getToDos = async(): Promise<IToDo> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return await response.json();
}

const getToDoData = async ():Promise<void> => {
    const result = await getToDos();
    console.log(result);
}

getToDoData();