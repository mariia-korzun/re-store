export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81D4AHNvMsL.jpg'
        },
        {
            id: 2,
            title: 'Release it!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
        }
    ]

    getBooks = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)

                if (Math.random() > 0.75) {
                    resolve(this.data)
                } else {
                    reject(new Error())
                }
            },700)
        })
    }
}