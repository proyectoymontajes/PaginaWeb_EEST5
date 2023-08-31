
interface CardProyectDesc {
    title: string;
}

const CardProyectDesc = ({ title }: CardProyectDesc) => {
    return (
        <div className="card-desc">
            <div className="card-title">
                <p className="title">{title}</p>
                <p className="card-span"></p>
            </div>
        </div>
    )
}

export default CardProyectDesc