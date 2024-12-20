export interface Lodging {
    id:          number;
    adults:      number;
    children:    number;
    checkin:     Date;
    checkout:    Date;
    client:      Client;
    user:     number;
    habitations: Habitation[];
    price:       number;
    status:      string;
    created_at:  string;
    updated_at:  string;
}

export interface Habitation {
    id:                 number;
    number:             number;
    adults:             number;
    children:           number;
    description:        string;
    lodging?:            LodgingHabitation;
    type_habitation:    TypeHabitation;  
    status?:             string;
}

export interface NewHabitation {    
    id_type_habitation: number;   
    number:             number;
    adults:             number;
    children:           number;
    description:        string;
    status:             string;      
}

export interface TypeHabitation {
    id:          number;
    name:        string;
    description?: string;
    price?:       number;
    images:      string[];
    status?:      string;
}

interface Client{
    id: string,
    name: string,
    lastname: string
}

interface LodgingHabitation{
    id: string;
}