import '../../styles.css'

interface Props {
    title: string;
    description: string;
    img: string;
    position: 'left' | 'right';
}

export const CardAboutUs = ({ description, img, title, position }: Props) => {
    const isImageRight = position === 'right';

    return (
        <div className="contain-about-us">
            <div
                className={`contain-info-about-us ${isImageRight ? 'img-right' : 'img-left'}`}
            >
                <div className="contain-text">
                    <div className="contain-title-about-us">
                        <h3 className="title-about-us">{title}</h3>
                        <p className="description-about-us">{description}</p>
                    </div>
                </div>
                <div className="contain-img-about-us">
                    <img
                        className="img-about-us"
                        src={img}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
