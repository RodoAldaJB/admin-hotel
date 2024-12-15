export interface Lodging {
    id:          number;
    id_client:   number;
    id_user:     number;
    habitations: Habitation[];
    checkin:     Date;
    checkout:    Date;
    adults:      number;
    children:    number;
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
    status:             string;
    type_habitation:    TypeHabitation;
    lodging:            null;    
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
    description: string;
    price:       number;
    images:      string;
    status:      number;
}
