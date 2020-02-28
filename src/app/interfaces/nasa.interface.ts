export interface INasa {
    category: string;
    question: string;
    correct_answer: string;
}

export interface INasaResponse {
    response_code: number ;
    results: INasa[] ;
}
