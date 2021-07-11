                                             "# Site"
    "# História de usuário"
    Sendo dono de um site de aluguel de residências quero poder manter uma lista de cidades e
    bairros, para poder cadastrar casas e apartamentos.

    Sendo dono de um site de aluguel de residências quero poder manter uma lista de residências
    que tenho a disponíveis para que possam ser visualizados.

    "#Critérios"
    Utilização de boas práticas de programação (Ex. Organização do código, nomenclatura,
    separação do código, identação, etc).

    "# Mapeamento das rotas de navegação REST da API."

    Cadastro, exclusão, alteração, visualização (através do campo modelo) e
    listagem dos carros.
    A cidade deverá possuir as seguintes características:
    Nome: Caractere

    "# O bairro deverá possuir as seguintes características:"

    Nome: Caractere
    Cidade: Cidade

    "# A residência deverá possuir as seguintes características:"

    Tipo (casa / apartamento): Caractere
    Endereço (logradouro, complemento, bairro, cidade, estado, país);
    Valor do aluguel: Numérico
    Cômodos: Caractere
    Bairro: Bairro

    "#Todos os campos serão obrigatórios."

    A conclusão total do projeto não é obrigatória, pois cada etapa possui uma pontuação separada.

    Obs: Utilizar relação One To Many de Cidade para Bairro, Bairro para Residências.
