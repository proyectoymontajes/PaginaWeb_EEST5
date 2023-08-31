import '../styles.css'

interface Props {
    title: string;
    items?: Item[];
    url?: string;
}

interface Item {
    item: string;
    path?: string;
    logo?: any
}

export const Section = ({title, items} : Props) => {
    console.log(items)
    return (
        <>
            <div className='section'>
                {title}
                <div className="items">
                    {
                        items?.map( item => (
                            <div className="item"> 
                                {item.logo && item.logo} {item.item}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
