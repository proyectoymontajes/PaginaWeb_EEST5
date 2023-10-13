import CardProyect from "../../../components/CardProyect";
import { Category } from '../../../data/dataProyects';

interface Item {
    title: string;
    img: string;
    desc: string;
    imgs?: string[];
    group: string;
    path: string;
}

interface ListProyectsProps {
    category: string;
    items: Item[];
}

export const ListProyects = ({ category, items }: ListProyectsProps) => {
    return (
        <>
            {
                items.length !== 0
                    ?
                    <>
                        <div className="category">
                            <h2>{category}</h2>
                        </div>
                        <div className="list-proyects">
                            {items.map((item) => (
                                <CardProyect key={item.title} {...item} />
                            ))}
                        </div>
                    </>
                    :
                    <></>

            }
        </>
    )
}
