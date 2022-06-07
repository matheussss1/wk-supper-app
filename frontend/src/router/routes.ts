export const authenticatedRoutes = [
    {
        url: "/",
        description: "Inicio",
    },
    {
        url: "/usuarios",
        description: "Listagem de usuarios",
    },
    {
        url: "/usuarios/:id",
        description: "Editar e/ou visualizar usuario",
    },
    {
        url: '*',
        description: 'Redirecionar usuario a tela inicial'
    }
];

export const unauthenticadedRoutes = [
    {
        url: '/cadastrar',
        description: 'Se cadastrar no sistema'
    },
    {
        url: '*',
        description: 'Redirecionar usuario a tela de cadastro'
    }
]