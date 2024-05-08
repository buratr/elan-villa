import villa1 from "@lib/slider/All-villas/all-villas-found.jpeg";
import villa2 from "@lib/slider/All-villas/casa-tua.jpeg";
import villa3 from "@lib/slider/All-villas/chanticleer.jpg";
import villa4 from "@lib/slider/All-villas/enigma.jpeg";
import villa5 from "@lib/slider/All-villas/k.jpeg";
interface Season {
    id: number;
    name: string;
    from: string;
    to: string;
}

interface Location {
    description: string;
    loc: [number, number];
}

interface Service {
    name: string;
}

interface Photo {
    url: string;
    description: string;
}

interface Room {
    size: number;
    unit: string;
    name: string;
    photos: Photo[];
}

interface Product {
    name: string;
    pricePerWeek: number;
    currency: string;
    SeasonsId: number;
}

interface Villa {
    name: string;
    code: string;
    slug: string;
    description: string;
    location: Location;
    features: string[];
    services: Service[];
    calendar: { from: string; to: string; open: boolean }[];
    rooms: Room[];
    products: Product[];
    imageSrc: object[];
}

interface VillasData {
    seasons: Season[];
    villas: { [slug: string]: Villa };
}

export const data: VillasData = {
    seasons: [
        { id: 0, name: "Summer Season", from: "15/04/2023", to: "14/12/2023" },
        { id: 1, name: "Winter Season", from: "15/12/2023", to: "14/04/2024" },
        { id: 2, name: "Thanksgiving", from: "20/11/2023", to: "26/11/2024" },
        { id: 3, name: "Festive", from: "20/12/2023", to: "10/01/2024" }
    ],
    villas: {
        "blanc-bleu": {
            name: "Blanc Bleu",
            code: "#blancbleu",
            slug: "blanc-bleu",
            description: "Welcome to Villa Blanc Bleu, a 6 bedroom luxury villa located in the popular Gouverneur area.",
            location: { description: "Gouverneur", loc: [17.88712, -62.837924] },
            features: ["A/C in bedrooms", "Apple TV", "Dishwasher"],
            services: [{ name: "Welcome Gift" }, { name: "Continental Breakfast" }, { name: "Pick up luggages" }],
            calendar: [{ from: "01/01/2023", to: "12/01/2023", open: true }, { from: "12/01/2023", to: "17/01/2023", open: false }, { from: "18/01/2023", to: "23/02/2023", open: true }],
            rooms: [{ size: 40, unit: "m2", name: "Bedroom 1", photos: [{ url: "...", description: "" }] }],
            products: [{ name: "4 bedrooms", pricePerWeek: 5000, currency: "EUR", SeasonsId: 0 }, { name: "4 bedrooms", pricePerWeek: 8000, currency: "EUR", SeasonsId: 1 }, { name: "4 bedrooms", pricePerWeek: 9000, currency: "EUR", SeasonsId: 2 }],
            imageSrc: [
                { id: 1, src: villa1 }, { id: 2, src: villa2 }, { id: 3, src: villa3 }, { id: 4, src: villa4 }, { id: 5, src: villa5 }
            ],
        }
    }
}

export function getVillaFromSlug(slug: string) {
    if (data.villas.hasOwnProperty(slug)) {
        return { villa: data.villas[slug] };
    }
    return null;
}

export function getVillasSlug(): string[] {
    return Object.keys(data.villas);
}
