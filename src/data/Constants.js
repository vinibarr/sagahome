import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, WhatsApp, YouTube } from "@mui/icons-material";

const DefaultConstants = {
    baseUrl: process.env.REACT_APP_BASE_URL || '',
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
        wallpaper: 'assets/images/products/wallpaper.png',
        items: [
            {
                name: 'electronicLocks',
                image: 'assets/images/products/electronicLocks/wallpaper.png',
                description: 'electronicLocksDescription',
                aboutDescription: 'electronicLocksAboutDescription',
                products: [
                    {
                        name: 'electronicLock1',
                        wallpaper: 'assets/images/products/electronicLocks/1.png',
                        images: [
                            'assets/images/products/electronicLocks/1_1.png',
                            'assets/images/products/electronicLocks/1_2.png',
                            'assets/images/products/electronicLocks/1_3.png',
                            'assets/images/products/electronicLocks/1_4.png',
                            'assets/images/products/electronicLocks/1_5.png',
                            'assets/images/products/electronicLocks/1_6.png',
                            'assets/images/products/electronicLocks/1_7.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'electronicLock2',
                        wallpaper: 'assets/images/products/electronicLocks/2.png',
                        images: [
                            'assets/images/products/electronicLocks/2_1.png',
                            'assets/images/products/electronicLocks/2_2.png',
                            'assets/images/products/electronicLocks/2_3.png',
                            'assets/images/products/electronicLocks/2_4.png',
                            'assets/images/products/electronicLocks/2_5.png',
                            'assets/images/products/electronicLocks/2_6.png',
                            'assets/images/products/electronicLocks/2_7.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'electronicLock3',
                        wallpaper: 'assets/images/products/electronicLocks/3.png',
                        images: [
                            'assets/images/products/electronicLocks/3_1.png',
                            'assets/images/products/electronicLocks/3_2.png',
                            'assets/images/products/electronicLocks/3_3.png',
                            'assets/images/products/electronicLocks/3_4.png',
                            'assets/images/products/electronicLocks/3_5.png',
                            'assets/images/products/electronicLocks/3_6.png',
                            'assets/images/products/electronicLocks/3_7.png'
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'electronicLock4',
                        wallpaper: 'assets/images/products/electronicLocks/4.png',
                        images: [
                            'assets/images/products/electronicLocks/4_1.png',
                            'assets/images/products/electronicLocks/4_2.png',
                            'assets/images/products/electronicLocks/4_3.png',
                            'assets/images/products/electronicLocks/4_4.png',
                        ],
                        description: 'electronicLocksDescription',
                    }, {
                        name: 'electronicLock5',
                        wallpaper: 'assets/images/products/electronicLocks/5.png',
                        images: [
                            'assets/images/products/electronicLocks/5_1.png',
                            'assets/images/products/electronicLocks/5_2.png',
                            'assets/images/products/electronicLocks/5_3.png',
                            'assets/images/products/electronicLocks/5_4.png',
                        ],
                        description: 'electronicLocksDescription',
                    }
                ]
            }, {
                name: 'electronicSafes',
                image: 'assets/images/products/electronicSafes/wallpaper.png',
                description: 'electronicSafesDescription',
                aboutDescription: 'electronicSafesAboutDescription',
                products: [
                    {
                        name: 'electronicSafe1',
                        wallpaper: 'assets/images/products/electronicSafes/1.png',
                        images: [
                            'assets/images/products/electronicSafes/1_1.png',
                            'assets/images/products/electronicSafes/1_2.png',
                            'assets/images/products/electronicSafes/1_3.png',
                            'assets/images/products/electronicSafes/1_4.png',
                        ],
                        description: 'electronicSafesDescription',
                    }, {
                        name: 'electronicSafe2',
                        wallpaper: 'assets/images/products/electronicSafes/2.png',
                        images: [
                            'assets/images/products/electronicSafes/2_1.png',
                            'assets/images/products/electronicSafes/2_2.png',
                            'assets/images/products/electronicSafes/2_3.png',
                        ],
                        description: 'electronicSafesDescription',
                    }
                ]
            }, {
                name: 'accessories',
                image: 'assets/images/products/accessories/wallpaper.png',
                description: 'accessoriesDescription',
                aboutDescription: 'accessoriesAboutDescription',
                products: [
                    {
                        name: 'accessory1',
                        wallpaper: 'assets/images/products/accessories/1.png',
                        images: [
                            'assets/images/products/accessories/1_1.png'
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'accessory2',
                        wallpaper: 'assets/images/products/accessories/2.png',
                        images: [
                            'assets/images/products/accessories/2_1.png',
                        ],
                        description: 'accessoriesDescription',
                    }, {
                        name: 'accessory3',
                        wallpaper: 'assets/images/products/accessories/3.png',
                        images: [
                            'assets/images/products/accessories/3_1.png',
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
        wallpaper: 'assets/images/about/wallpaper.png',
        homeWallpaper: 'assets/images/about/homeWallpaper.png',
        shortDescription: 'aboutShortDescription'
    },
    contact: {
        title: 'contact',
        subtitle: 'contactDescription',
        wallpaper: 'assets/images/contact/wallpaper.png',
        subjects: [
            'Informações',
            'Vendas',
            'Assistência técnica'
        ]
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

