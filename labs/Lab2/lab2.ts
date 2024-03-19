// products
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage?: number;
  discountedPrice: number;
  thumbnail: string;
};

type Cart = {
  id: number;
  products: CartItem[];
};

type hairtype = {
  color: string;
  type: string;
}

type addresstype = {
  address: string
  city: string
  coordinates: coordinatestype;
  postalCode: string
  state: string
}

type coordinatestype = {
  lat: number
  lng: number
}

type banktype = {
  cardExpire: string
  cardNumber: string
  cardType: string
  currency: string
  iban: string
}

type companytype = {
  address: addresstype;
  department: string
  name: string
  title: string
}
type coordinates = {
  lat: number
  lng: number
}

type cryptotype = {
  coin: string
  wallet: string
  network: string
}

type user = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: "male" | "female" | "other";
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image?: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: hairtype;
  domain: string
  ip: string
  address: addresstype;
  macAddress: string
  university: string
  bank: banktype;
  company: companytype;
  ein: string
  ssn: string
  userAgent: string
  crypto: cryptotype;
}

{
  const products: Product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
    ]
  };


  const carts: Cart = {
    id: 1,
    products: [
      {
        id: 59,
        title: "Spring and summershoes",
        price: 20,
        quantity: 3,
        total: 60,
        discountPercentage: 8.71,
        discountedPrice: 55,
        thumbnail: "https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"
      }
    ]
  };

  const users: user = {
    "id": 1,
    "firstName": "Terry",
    "lastName": "Medhurst",
    "maidenName": "Smitham",
    "age": 50,
    "gender": "male",
    "email": "atuny0@sohu.com",
    "phone": "+63 791 675 8914",
    "username": "atuny0",
    "password": "9uQFF1Lh",
    "birthDate": "2000-12-25",
    "image": "https://robohash.org/Terry.png?set=set4",
    "bloodGroup": "A-",
    "height": 189,
    "weight": 75.4,
    "eyeColor": "Green",
    "hair": {
      "color": "Black",
      "type": "Strands"
    },
    "domain": "slashdot.org",
    "ip": "117.29.86.254",
    "address": {
      "address": "1745 T Street Southeast",
      "city": "Washington",
      "coordinates": {
        "lat": 38.867033,
        "lng": -76.979235
      },
      "postalCode": "20020",
      "state": "DC"
    },
    "macAddress": "13:69:BA:56:A3:74",
    "university": "Capitol University",
    "bank": {
      "cardExpire": "06/22",
      "cardNumber": "50380955204220685",
      "cardType": "maestro",
      "currency": "Peso",
      "iban": "NO17 0695 2754 967"
    },
    "company": {
      "address": {
        "address": "629 Debbie Drive",
        "city": "Nashville",
        "coordinates": {
          "lat": 36.208114,
          "lng": -86.58621199999999
        },
        "postalCode": "37076",
        "state": "TN"
      },
      "department": "Marketing",
      "name": "Blanda-O'Keefe",
      "title": "Help Desk Operator"
    },
    "ein": "20-9487066",
    "ssn": "661-64-2976",
    "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
    "crypto": {
      "coin": "Bitcoin",
      "wallet": "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a",
      "network": "Ethereum (ERC20)"
    }
  }

  console.log(products);
  console.log(carts);
  console.log(users);

}