export interface Building {
    name: string;
    floors: Floor[];
    link?: string;
}

interface Floor {
    blocks: number[];
    pi_ids: string[];
}
