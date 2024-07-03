import { FC } from "react"
import { Dog } from "../../api/dog"
import './DogCard.css'

interface DogViewProps {
    dog: Dog
}

export const DogCardView: FC<DogViewProps> = ({ dog }) => {
    return (
        <div className="dog-card-view">
            <div className="dog-card-view__content">
                <img className="dog-card-view__img" src={dog.url} alt={`image собакена`} />
            </div>
            <button>Лайк</button>
        </div>
    )
}