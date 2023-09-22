import CardProyect from '../../../components/CardProyect/index';

export const Proyectos = () => {
    return (
        <>
            <h1 className="title-proyects" id='proyects'>PROYECTOS</h1>
            <div className="contain-proyects">
                <div className='contain-proyects'>
                    <CardProyect img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdVkL6idPJwyGYKGwjN-PsNKXGvc2XgCXcxL7wV6kpdQ73mriIQmm1WRRHqpsF8jvZcbw&usqp=CAU' title='Smartwatch'/>
                    <CardProyect img='https://ingenieria.uncuyo.edu.ar/cache/2017-001-dscn3377_800_900.jpg' title='Brazo robotico'/>
                    <CardProyect img='https://matias-rolon.github.io/pagina_IoT.github.io/WhatsApp%20Image%202022-11-24%20at%2014.13.13.jpeg' title='Internet de las cosas'/>
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
