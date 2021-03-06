export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Adress;
    phone: string;
    website: string;
    company: Company;
}

export class Adress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export class Geo {
    lat: string;
    lng: string;
}

export class Company {
    name: string;
    catchPhrase: string;
    bs: string;
}