import CardProyect from '../../../components/CardProyect/index';

export const Proyectos = () => {
    return (
        <>
            <h1 className="title-proyects">PROYECTOS</h1>
            <div className="contain-proyects">
                <div className='contain-proyects'>
                    <CardProyect alt='smartwa' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVkL6idPJwyGYKGwjN-PsNKXGvc2XgCXcxL7wV6kpdQ73mriIQmm1WRRHqpsF8jvZcbw&usqp=CAU' title='Smartwatch'/>
                    <CardProyect alt='smartwa' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVkL6idPJwyGYKGwjN-PsNKXGvc2XgCXcxL7wV6kpdQ73mriIQmm1WRRHqpsF8jvZcbw&usqp=CAU' title='Smartwatch'/>
                    <CardProyect alt='smartwa' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVkL6idPJwyGYKGwjN-PsNKXGvc2XgCXcxL7wV6kpdQ73mriIQmm1WRRHqpsF8jvZcbw&usqp=CAU' title='Smartwatch'/>
                </div>
            </div>
            <div className='read-more'>
                <p className='text-read-more'>VER MÁS PROYECTOS</p>
                <div className="spacer"></div>
                <p className="arrow-read-more"> → </p>
            </div>
        </>
    )
}
