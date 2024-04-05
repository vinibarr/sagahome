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
        '(99) 99999-9999',
        '(99) 99999-9999'
    ],
    emails: [
        'contato@teste.com.br',
        'suporte@teste.com.br'
    ],
    address: {
        street: 'Rua XXXX',
        city: 'YYYYY/ZZ',
        zipCode: '99999-999'
    },
    wallpaper: {
        url: 'https://www.youtube.com/embed/_2xTVWauCeU?rel=0&autoplay=1&controls=0&loop=1&playlist=_2xTVWauCeU&mute=1&vq=hd1080',
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
                        name: 'electronicLocks1',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'electronicLocks2',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'electronicLocks3',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'electronicLocks4',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'electronicLocks5',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'electronicLocks6',
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
                        name: 'electronicSafes1',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'electronicSafes2',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'electronicSafes3',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'electronicSafes4',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'electronicSafes5',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'electronicSafes6',
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
                        name: 'energySaving1',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }, {
                        name: 'energySaving2',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }, {
                        name: 'energySaving3',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }, {
                        name: 'energySaving4',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }, {
                        name: 'energySaving5',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'energySavingDescription',
                    }, {
                        name: 'energySaving6',
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
                        name: 'accessories1',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'accessories2',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'accessories3',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'accessories4',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'accessories5',
                        images: [
                            'assets/images/default.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'accessories6',
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
        googleMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.504716991768!2d-46.63677582484273!3d-23.550309878807468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59abaaae4233%3A0xd9186faf714bc5b1!2zUHJhw6dhIGRhIFPDqSAtIFPDqSwgU8OjbyBQYXVsbyAtIFNQLCAwMTAwMS0wMDA!5e0!3m2!1spt-BR!2sbr!4v1712330137748!5m2!1spt-BR!2sbr"
    },
    socialMedias: [
        {
            url: 'undefined',
            Icon: WhatsApp
        }, {
            url: 'undefined',
            Icon: Facebook
        }, {
            url: 'undefined',
            Icon: YouTube
        }, {
            url: 'undefined',
            Icon: Instagram
        }, {
            url: 'undefined',
            Icon: LinkedIn
        }, {
            url: 'undefined',
            Icon: Pinterest
        }, {
            url: 'undefined',
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

