const PRODUCTS = [
    {
        id: 100,
        name: 'Black Headset',
        price: 350,
        image: require('../assets/products/headset-100.jpg'),
        description: 'Dynamic ,Open-back ,Impedance: 300 Ohm,Sound pressure level: 103 dB,Frequency range: 10 - 41,000 Hz,3 m Cable with 6.3 mm stereo jack plug,Weight without cable: 269 g,Weight with cable: 346 g,Includes 20 cm adapter cable from 6.3 mm to 3.5 mm jack plug'
    },
    {
        id: 101,
        name: 'Sennheiser HD 600',
        price: 600,
        image: require('../assets/products/headset-101.jpg'),
        description: 'Sennheiser Audiophile Range, New transducer system developed by Sennheiser, Circumaural, Open, Dynamic, Two-sided cable routing, Maximum sound pressure level: 104 dB SPL @ 1 kHz, 1V RMS, Impedance: 150 Ohm, Frequency range: 10 - 41,000 Hz, Distortion factor at 1 kHz < 0.4, Weight: 260 g.'
    },
    {
        id: 102,
        name: 'AKG K-271 MKII',
        price: 500,
        image: require('../assets/products/headset-102.jpg'),
        description: 'Dynamic ,Open-back ,Impedance: 300 Ohm,Sound pressure level: 103 dB,Frequency range: 10 - 41,000 Hz,3 m Cable with 6.3 mm stereo jack plug,Weight without cable: 269 g,Weight with cable: 346 g,Includes 20 cm adapter cable from 6.3 mm to 3.5 mm jack plug'
    },
    {
        id: 103,
        name: 'the t.bone HD 200',
        price: 400,
        image: require('../assets/products/headset-103.jpg'),
        description: 'Dynamic ,Open-back ,Impedance: 300 Ohm,Sound pressure level: 103 dB,Frequency range: 10 - 41,000 Hz,3 m Cable with 6.3 mm stereo jack plug,Weight without cable: 269 g,Weight with cable: 346 g,Includes 20 cm adapter cable from 6.3 mm to 3.5 mm jack plug'
    },
    {
        id: 104,
        name: 'beyerdynamic MMX-300 2. Generation',
        price: 290,
        image: require('../assets/products/headset-104.jpg'),
        description: 'Dynamic ,Open-back ,Impedance: 300 Ohm,Sound pressure level: 103 dB,Frequency range: 10 - 41,000 Hz,3 m Cable with 6.3 mm stereo jack plug,Weight without cable: 269 g,Weight with cable: 346 g,Includes 20 cm adapter cable from 6.3 mm to 3.5 mm jack plug'
    },
    {
        id: 105,
        name: 'AKG K-240 Studio',
        price: 220,
        image: require('../assets/products/headset-105.jpg'),
        description: 'Dynamic ,Open-back ,Impedance: 300 Ohm,Sound pressure level: 103 dB,Frequency range: 10 - 41,000 Hz,3 m Cable with 6.3 mm stereo jack plug,Weight without cable: 269 g,Weight with cable: 346 g,Includes 20 cm adapter cable from 6.3 mm to 3.5 mm jack plug'
    },
    {
        id: 106,
        name: 'Superlux HD-681',
        price: 240,
        image: require('../assets/products/headset-106.jpg'),
        description: 'Dynamic ,Open-back ,Impedance: 300 Ohm,Sound pressure level: 103 dB,Frequency range: 10 - 41,000 Hz,3 m Cable with 6.3 mm stereo jack plug,Weight without cable: 269 g,Weight with cable: 346 g,Includes 20 cm adapter cable from 6.3 mm to 3.5 mm jack plug'
    },
    {
        id: 107,
        name: 'AKG K-701',
        price: 200,
        image: require('../assets/products/headset-107.jpg'),
        description: 'Dynamic ,Open-back ,Impedance: 300 Ohm,Sound pressure level: 103 dB,Frequency range: 10 - 41,000 Hz,3 m Cable with 6.3 mm stereo jack plug,Weight without cable: 269 g,Weight with cable: 346 g,Includes 20 cm adapter cable from 6.3 mm to 3.5 mm jack plug'
    },
    {
        id: 108,
        name: 'AKG K-361',
        price: 250,
        image: require('../assets/products/headset-108.jpg'),
        description: 'Dynamic ,Open-back ,Impedance: 300 Ohm,Sound pressure level: 103 dB,Frequency range: 10 - 41,000 Hz,3 m Cable with 6.3 mm stereo jack plug,Weight without cable: 269 g,Weight with cable: 346 g,Includes 20 cm adapter cable from 6.3 mm to 3.5 mm jack plug'
    },
    {
        id: 109,
        name: 'Dan Clark Audio EXPANSE',
        price: 200,
        image: require('../assets/products/headset-109.jpg'),
        description: 'Dynamic ,Open-back ,Impedance: 300 Ohm,Sound pressure level: 103 dB,Frequency range: 10 - 41,000 Hz,3 m Cable with 6.3 mm stereo jack plug,Weight without cable: 269 g,Weight with cable: 346 g,Includes 20 cm adapter cable from 6.3 mm to 3.5 mm jack plug'
    }
];
export function getProducts() {
    return PRODUCTS;
}
export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}