import CardProyect from "../../../components/CardProyect";

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
        <div className="container-proyects">
            <div className="category">
                <h2>{category}</h2>
            </div>
            <div className="list-proyects">
                {items.map((item) => (
                    <CardProyect key={item.title} {...item} />
                ))}
            </div>
        </div>
    )
}
