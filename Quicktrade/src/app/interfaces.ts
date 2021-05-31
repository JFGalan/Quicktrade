export interface IProduct {
    'id': number;
    'name': string;
    'description': string;
    'price': number;
    'key': string;
}


export interface IMotor extends IProduct {
    'km': number;
    'year': number;
    'type': string;
    'userKey': string;
}

export interface IRealState extends IProduct{
    'location': string;
    'sqareMeters': number;
    'bathAndRooms': string;
    'userKey': string;
}

export interface ITech extends IProduct{
    'state': string;
    'userKey': string;
}


export interface IUser {
    'id': number,
    'name': string,
    'email': string
}

