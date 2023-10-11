
type ButtonTypes = 'prev' | 'next'

interface Props {
    type: ButtonTypes
}

export const Button = ({ type }: Props) => {
    return (
        <button
            className={`carousel-control-${type}`}
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide={type}
        >
            <div className="contain-button-carousel">
                <span
                    className={`carousel-control-${type}-icon`}
                    aria-hidden="true"
                ></span>
            </div>
        </button>
    )
}
