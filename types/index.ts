


export interface Profile {
    id: string;
    user_id: string;
    name: string;
    phone: string;
    email: string;
}



export interface ICatalogCard {
    title: string;
    name1: string;
    name2: string;
    name3: string;
    name4: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
}



export interface IUsers {
    user_id: string;
    name: string;
    email: string;
    phone: string;
    $createdAt: string; 
}


export interface ICategories {
    name: string,
    $id: string
}

export interface IProducts {
    name: string,
    brand: string,
    $id: string,
    description: string,
    country: string,
    image: string,
    code: string,
    sold: string,
    category: string,
    price: string
}

