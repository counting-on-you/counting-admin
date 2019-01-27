export interface Building {
    name: string;
    address: string;
    floors?: Floor[];
    link?: string;
    pi_ids?: any[];
}

interface Floor {
    name: string;
    pi_ids: string[];
}
