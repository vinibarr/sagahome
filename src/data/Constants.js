import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, WhatsApp, YouTube } from "@mui/icons-material";

const DefaultConstants = {
    baseURL: process.env.REACT_APP_BASE_URL,
    filesURL: process.env.REACT_APP_FILES_URL,
    publicURL: process.env.PUBLIC_URL,
    systemName: 'Saga Home',
    developer: {
        name: 'Vinibarr Sistemas Online',
        url: 'https://vinibarr.com.br/'
    },
    phones: [
        '(11) 3225-0908'
    ],
    emails: [
        'saga@sagasystems.com.br'
    ],
    address: {
        street: 'Praça da República, 386 - 5º Cj 53',
        city: 'São Paulo/SP',
        zipCode: '01045-000',
        googleMaps: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1026.4110798530396!2d-46.64206941261307!3d-23.542812493149224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDMyJzMzLjYiUyA0NsKwMzgnMjkuMiJX!5e0!3m2!1spt-BR!2sbr!4v1712603726185!5m2!1spt-BR!2sbr"
    },
    wallpaper: {
        url: 'https://www.youtube.com/embed/NRLG92vPDJE?rel=0&autoplay=1&controls=0&loop=1&playlist=NRLG92vPDJE&mute=1&vq=hd1080',
        title: 'Wallpaper'
    },
    catalog: {
        url: 'https://online.fliphtml5.com/rsatm/kybb/',
        title: 'Catalog'
    },
    products: {
        title: 'products',
        subtitle: 'productsDescription',
        wallpaper: 'assets/images/default.png',
        items: [
            {
                name: 'electronicLocks',
                image: 'assets/images/default.png',
                description: 'electronicLocksDescription',
                products: [
                    {
                        name: 'Fechadura eletrônica 1',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'Fechadura eletrônica 2',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'Fechadura eletrônica 3',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'Fechadura eletrônica 4',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'Fechadura eletrônica 5',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'Fechadura eletrônica 6',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }
                ]
            }, {
                name: 'electronicSafes',
                image: 'assets/images/default.png',
                description: 'electronicSafesDescription',
                products: [
                    {
                        name: 'Cofre eletrônico 1',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'Cofre eletrônico 2',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'Cofre eletrônico 3',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'Cofre eletrônico 4',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'Cofre eletrônico 5',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'Cofre eletrônico 6',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }
                ]
            }, {
                name: 'energySaving',
                image: 'assets/images/default.png',
                description: 'energySavingDescription',
                products: [
                    {
                        name: 'Economizador de energia 1',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }, {
                        name: 'Economizador de energia 2',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }, {
                        name: 'Economizador de energia 3',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }, {
                        name: 'Economizador de energia 4',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }, {
                        name: 'Economizador de energia 5',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }, {
                        name: 'Economizador de energia 6',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }
                ]
            }, {
                name: 'accessories',
                image: 'assets/images/default.png',
                description: 'accessoriesDescription',
                products: [
                    {
                        name: 'Acessório 1',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'Acessório 2',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'Acessório 3',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'Acessório 4',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'Acessório 5',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'Acessório 6',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }
                ]
            }
        ]
    },
    about: {
        title: 'aboutUs',
        subtitle: 'aboutUsDescription',
        wallpaper: 'assets/images/default.png',
        description: 'aboutDescription',
        shortDescription: 'aboutShortDescription'
    },
    contact: {
        title: 'contact',
        subtitle: 'contactDescription',
        wallpaper: 'assets/images/default.png',
    },
    socialMedias: [
        {
            url: undefined,
            Icon: WhatsApp
        }, {
            url: 'https://www.facebook.com/sagasystems/?locale=pt_BR',
            Icon: Facebook
        }, {
            url: 'https://www.youtube.com/@SagaSystemsOficial',
            Icon: YouTube
        }, {
            url: 'https://www.instagram.com/sagasystems/',
            Icon: Instagram
        }, {
            url: 'https://www.linkedin.com/company/saga-systems-brasil/?originalSubdomain=br',
            Icon: LinkedIn
        }, {
            url: undefined,
            Icon: Pinterest
        }, {
            url: undefined,
            Icon: Twitter
        }
    ],
};

const systemNameFormatted = DefaultConstants.systemName.toLowerCase().replace(/ /g, '');


const StorageConstants = {
    languageStorageName: `${systemNameFormatted}_currentlanguage`,
}

const KeyConstants = {
    privateKey: process.env.REACT_APP_PRIVATE_KEY || `${systemNameFormatted}_privatekey`
}


export {
    StorageConstants,
    KeyConstants
}

export default DefaultConstants;

