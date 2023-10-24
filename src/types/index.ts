interface Icon {
    name: string;
}

interface Favorite {
    name: string;
    url: string;
    image: string;
    description: string;
}

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

interface Work {
    title: string;
    url: string;
    image: string;
    description: string;
    repo: string;
    techs?: Tech[];
}

interface Tech {
    name: string;
    image: string;
}