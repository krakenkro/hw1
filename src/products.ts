export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
}

export const products = [
    {
        id: 1,
        name: "Apple iPhone 13 Pro",
        price: 679990,
        description: "string",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mDKYA2pESMnqRRRFwsZR3FGxjb5EyYg1TIdIhwdZiFHriawRy4lfTKzpEvn6rpJveCs&usqp=CAU',
        category: "smartphone"
    },
    {
        id: 2,
        name: "Samsung Galaxy A33",
        price: 169990,
        description: "string",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mDKYA2pESMnqRRRFwsZR3FGxjb5EyYg1TIdIhwdZiFHriawRy4lfTKzpEvn6rpJveCs&usqp=CAU',
        category: "smartphone"
    },
    {
        id: 3,
        name: "Apple MacBook",
        price: 1270990,
        description: "string",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mDKYA2pESMnqRRRFwsZR3FGxjb5EyYg1TIdIhwdZiFHriawRy4lfTKzpEvn6rpJveCs&usqp=CAU',
        category: "notebook"
    },
    {
        id: 4,
        name: "Asus Zenbook OLED",
        price: 599990,
        description: "string",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mDKYA2pESMnqRRRFwsZR3FGxjb5EyYg1TIdIhwdZiFHriawRy4lfTKzpEvn6rpJveCs&usqp=CAU',
        category: "notebook"
    },
    {
        id: 5,
        name: "LG GA-B509MEQM",
        price: 334990,
        description: "string",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mDKYA2pESMnqRRRFwsZR3FGxjb5EyYg1TIdIhwdZiFHriawRy4lfTKzpEvn6rpJveCs&usqp=CAU',
        category: "fridge"
    },
    {
        id: 6,
        name: "Gorenje NRK619FAW4",
        price: 249990,
        description: "string",
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mDKYA2pESMnqRRRFwsZR3FGxjb5EyYg1TIdIhwdZiFHriawRy4lfTKzpEvn6rpJveCs&usqp=CAU',
        category: "fridge"
    },
]