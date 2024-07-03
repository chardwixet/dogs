import { FC } from "react"
import { DogList } from "../../api/dog"
import { DogCardView } from "../DogCardView/DogCardView"
import './DogListView.css'


export interface DogListViewProps {
    dogList: DogList,
}

export const DogListView: FC<DogListViewProps> = ({ dogList }) => {
    return (
        <>
            <ul className="dog-list-view">
                {dogList.map((dog) => (
                    <li key={dog.id} className="dog-list-view__item">
                        <DogCardView dog={dog} />
                    </li>
                ))}
            </ul>
        </>
    )
}