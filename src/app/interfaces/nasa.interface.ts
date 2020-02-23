export interface INasa {
    id: number;
    name: string;
    image: string;
}

export interface INasaResponse {
    info: object ;
    results: INasa[] ;
}
