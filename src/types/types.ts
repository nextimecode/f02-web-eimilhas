export interface NavLinkProps {
    href: string
    label: string
    items?: Record<string, NavItemsProps>[]
}

export interface NavItemsProps {
    href: string
    label: string
}

export interface DepoimentoProps {
    foto: string
    nome: string
    profissao: string
    texto: string
}

export interface CardProps {
    title: string
    imageIcon: string
    subtitle: string
    promocao?: boolean
}

export interface PromocaoProps {
    foto: string
    bandeira: string
    pais: string
    artigo: string
    preco: number
    trecho: string
}

export interface DescricaoFormaPagamentoProps {
    descricao: string
    enfase: string
}
