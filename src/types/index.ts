import { ImageDataLike } from 'gatsby-plugin-image'

export interface QueryData {
    node: {
        id: string
        frontmatter: {
            title: string
            hero_image_alt: string
            hero_image_credit_link: string
            hero_image_credit_text: string
            hero_image: ImageDataLike
            stack_list?: string
            order: number
        }
        body: string
    }
}
