interface Item {
    title: string;
    img: string;
    desc: string;
    imgs?: string[];
    group: string;
}

export interface Category {
    title: string;
    items: Item[];
}

export const items: Category[] = [
    {
        title: "Robotica",
        items: [
            {
                title: "Proyecto 1.1",
                img: 'https://img.blogs.es/anexom/wp-content/uploads/2019/11/robotica-industrial-que-estudiar-futuro-oportunidades.jpg',
                desc: 'es algo que hace algo',
                group: "group1",
            },
            {
                title: "Proyecto 1.1.1",
                img: 'https://img.blogs.es/anexom/wp-content/uploads/2019/11/robotica-industrial-que-estudiar-futuro-oportunidades.jpg',
                desc: 'es algo que hace algo',
                group: "group1",
            },
            {
                title: "Proyecto 1.1.2",
                img: 'https://img.blogs.es/anexom/wp-content/uploads/2019/11/robotica-industrial-que-estudiar-futuro-oportunidades.jpg',
                desc: 'es algo que hace algo',
                group: "group1",
            },
            {
                title: "Proyecto 1.1.3",
                img: 'https://img.blogs.es/anexom/wp-content/uploads/2019/11/robotica-industrial-que-estudiar-futuro-oportunidades.jpg',
                desc: 'es algo que hace algo',
                group: "group1",
            },
            {
                title: "Proyecto 1.1.4",
                img: 'https://img.blogs.es/anexom/wp-content/uploads/2019/11/robotica-industrial-que-estudiar-futuro-oportunidades.jpg',
                desc: 'es algo que hace algo',
                group: "group1",
            }
        ]
    },
    {
        title: "Automatizacion",
        items: [
            {
                title: "Proyecto 1.1.5",
                img: 'https://th.bing.com/th/id/R.67dc3d91b722dca6fc1a5b021d86a877?rik=Wj0qJetR%2b7s6Mg&riu=http%3a%2f%2fwww.galileo.edu%2ftrends-innovation%2fwp-content%2fuploads%2f2019%2f11%2fAutomatizacion-Importancia-2.jpg&ehk=Z5omeyCDqPmhYPFDBBfhq0Qi0h7oehiWE7j1GYDhsqI%3d&risl=&pid=ImgRaw&r=0',
                desc: 'es algo que hace algo',
                group: "group1",
            }
        ]
    },
    {
        title: "Sistemas",
        items: [
            
        ]
    }
]