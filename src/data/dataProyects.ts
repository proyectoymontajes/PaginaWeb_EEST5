
interface Item {
    title: string;
    img: string;
    desc: string;
    imgs?: string[];
    group: string;
    path: string;
}

interface category {
    title: string;
    items: Item[];
}

export const items: category[] = [
    {
        title: "Categoria 1",
        items: [
            {
                title: "Proyecto 1.1",
                img: 'https://img.blogs.es/anexom/wp-content/uploads/2019/11/robotica-industrial-que-estudiar-futuro-oportunidades.jpg',
                desc: 'es algo que hace algo',
                group: "group1",
                path: "/"
            }
        ]
    }
]