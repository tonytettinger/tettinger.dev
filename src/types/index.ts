import { ImageDataLike } from 'gatsby-plugin-image'

export interface Node {
    id: string
    frontmatter: {
        title: string
        hero_image_alt: string
        hero_image_credit_link: string
        hero_image_credit_text: string
        hero_image: ImageDataLike
        stack_list?: string
        order: number
        category: string
    }
    body: string
}

export interface QueryData {
    allMdx: {
        edges: {
            node: Node
        }[]
    }
}
