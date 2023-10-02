

interface Props {
    src: string;
    imgClassName?: string;
}

export const ItemImg = ({ src, imgClassName }: Props) => {
    return (
        <img src={src}
            className={`d-block w-100 ${imgClassName}`}
            alt={src}
        />
    )
}
