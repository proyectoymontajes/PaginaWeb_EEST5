import Robotica from "../../../../assets/carousel/robotica.jpg";
import { CardAboutUs } from './CardAboutUs';
import '../../styles.css'

export const SobreNosotros = () => {
    return (
        <>
            <h1 className="title-about-us-section" id="about-us">SOBRE NOSOTROS</h1>
            <CardAboutUs img={Robotica} position="left" title="CAMPEÓN BONAERENSE 2023" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum itaque, laboriosam provident beatae est vitae accusamus necessitatibus reprehenderit! Tempora, natus rerum quaerat mollitia esse ipsa illo quos quia voluptatum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex earum temporibus debitis consequatur unde, culpa doloribus mollitia, voluptas commodi, fuga qui minima omnis similique? Doloribus iste tenetur incidunt optio." />
            <CardAboutUs img={Robotica} position="right" title="CAMPEÓN BONAERENSE 2022" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum itaque, laboriosam provident beatae est vitae accusamus necessitatibus reprehenderit! Tempora, natus rerum quaerat mollitia esse ipsa illo quos quia voluptatum similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex earum temporibus debitis consequatur unde, culpa doloribus mollitia, voluptas commodi, fuga qui minima omnis similique? Doloribus iste tenetur incidunt optio." />
            <CardAboutUs description="Descripcion del proyecto realizado" img={Robotica} title="CAMPEON BONAERNESE DE ROBOTICA" position="left" />
        </>
    )
}
