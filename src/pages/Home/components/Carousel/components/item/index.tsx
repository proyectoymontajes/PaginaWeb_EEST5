import { ItemImg } from "./components/ItemImg";

interface Props {
    src: string;
    classname?: string;
    imgClassName?: string;
    active?: boolean;
    children?: JSX.Element;
}

const Item = (props: Props) => {
    return (
        <div className={`carousel-item ${props.active ? 'active' : ''}`}>
            <div className={`w-100 ${props.classname}`}>
                <ItemImg
                    src={props.src}
                    imgClassName={props.imgClassName}
                />
                { props.children }
            </div>
        </div>
    )
}

export default Item
