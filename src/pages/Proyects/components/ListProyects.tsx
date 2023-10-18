import CardProyect from "../../../components/CardProyect";
import { Item } from '../../../data/dataProyects';

interface ListProyectsProps {
    title: string;
    items: Item[];
}

export const ListProyects = ({ title, items }: ListProyectsProps) => {
    return (
        <>
            {
                items.length !== 0
                    ?
                    <>
                        <div className="category">
                            <h2>{title}</h2>
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
