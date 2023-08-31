
interface CardProyectImgProps {
    img: string;
    alt: string;
}
const CardProyectImg = ({ img, alt }: CardProyectImgProps) => {
    return (
        <div className="container-img">
            <img src={img} alt={alt} />
        </div>
    )
}

export default CardProyectImg