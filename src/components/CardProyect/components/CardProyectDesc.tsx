
interface CardProyectDesc {
    title: string;
}

const CardProyectDesc = ({ title }: CardProyectDesc) => {
    return (
        <div className="card-desc">
            <div className="contain-card-title">
                <p className="card-title">{title}</p>
                <p className="card-span"></p>
            </div>
        </div>
    )
}

export default CardProyectDesc