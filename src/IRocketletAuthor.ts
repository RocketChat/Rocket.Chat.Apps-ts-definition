export interface IRocketletAuthor {
    /** The name of who is the author/maintainer of this Rocketlet. */
    name: string;
    /** Where can the user get support? Website, email, telephone, etc. */
    support: string;
    /** Website link to the author's page, maybe a GitHub repository? */
    homepage?: string;
}
