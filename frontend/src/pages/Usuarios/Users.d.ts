export interface User {
    id: number;
    nome: string;
    cpf: string | null;
    data_nascimento: string | null;
    telefone: string | null;
    username: string;
}