export interface Building {
    name: string;
    address: string;
    floors?: Floor[];
    link?: string;
    pi_ids?: any[];
}

export interface Floor {
    name: string;
    pi_ids: {};
}
