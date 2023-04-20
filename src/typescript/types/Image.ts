export type Image = {
    id: number;
    attributes: {
        name: string;
        alternativeText?: string;
        caption?: string;
        width: number;
        height: number;
        formats: [Object];
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl?: string;
        provider: string;
        provider_metadata: null;
        createdAt: string;
        updatedAt: string;
    };
};
