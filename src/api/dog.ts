import { dataTagSymbol } from "@tanstack/react-query";
import { z } from "zod";


export const DogSchema = z.object({
    id: z.string(),
    url: z.string(),
})

export const DogList = z.array(DogSchema);

export type Dog = z.infer<typeof DogSchema>;
export type DogList = z.infer<typeof DogList>;

export function fetchDogList(url: string): Promise<DogList> {
    return fetch(url)
    .then(response => response.json())
    // .then((data) => JSON.parse(data));
}

export function GetDate(): Promise<DogList> {
    return fetch('https://random.dog/doggos')
    .then(response => response.json())
    .then(data => data);
}







function fetchDogDB(data) {

    let max;
    if(data.length > 100){
        max = 100;
    } else {
        max = data.length
    }
    for(let i = 1; i <= max; i++){

        return fetch('http://localhost:3000/dogs',{
            method: 'POST',
            body: JSON.stringify({
                id: i,
                url: data[i]
            }), // данные могут быть 'строкой' или {объектом}!
            headers: {
            'Content-Type': 'application/json'
            }
        }
    )
    }
    
}

function checkData(){
    // const data = fetchDogList('http://localhost:3000/dogs');
    // console.log(data)
    const date = GetDate()
    console.log(date)
    fetchDogDB(date)
    // if() {
    //     const date = GetDate()
    //     fetchDogDB(date)
    // } else {
    //     console.log('массив пустой')
    // }
}

checkData();