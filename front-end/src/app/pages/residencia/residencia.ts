export interface Residencia {
  id: number;
  tipo: CharacterData;

  valor: number;
  comodos: CharacterData;

  logradouro: string;
  complemento: string;
  estado: string;
  pais: string;

  cidade: CharacterData;

  bairro: string;
}
