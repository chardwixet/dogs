
import { useDogList } from "../../hooks/useDogList";
import { Loader } from "../Loader";
import { DogListView } from "./DogListView";






export function FetchDogList() {
    const dogListQuery = useDogList('http://localhost:3000','dog');

    console.log(dogListQuery.data)

    switch(dogListQuery.status) {
        case 'pending':
            return <Loader/>

        case 'success':
            return <DogListView dogList = {dogListQuery.data}/>

        case 'error':
            return <div>
                <span>Произошла ошибка</span>
                <button>Повторить запрос</button>
            </div>
    }
}