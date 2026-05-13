export type Slide = {
    id: number;
    caption: string;
    image: string;
};

export type Service = {
    id: number;
    name: string;
    description: string;
    image: string;
};

export type Project = {
    id: number;
    name: string;
    description: string;
    image: string;
    images?: ProjectImage[];
};

export type ProjectImage = {
    id: number;
    image: string;
};

export type TeamMember = {
    id: number;
    name: string;
    position: string;
    qualification: string;
    description: string;
    image: string;
};

export type PartnerLogo = {
    id: number;
    name: string;
    url: string;
    image: string;
};

export type BlogPost = {
    id: number;
    title: string;
    description: string;
    image: string;
    publishedAt: string | null;
};

export type Statement = {
    id: number;
    description: string;
    image: string;
};

export type GalleryImage = {
    id: number;
    caption: string;
    image: string;
};

export type CompanyInfo = {
    email: string;
    phone: string[];
    address: string[];
    social: {
        facebook?: string;
        twitter?: string;
        linkedin?: string;
        instagram?: string;
    };
};
