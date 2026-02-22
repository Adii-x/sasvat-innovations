import heroFood from "@/assets/hero-food.jpg";

/** All images in src/assets/, resolved at build time via Vite glob */
const assetImages = import.meta.glob<{ default: string }>(
    "@/assets/*.{jpg,jpeg,png,webp}",
    { eager: true }
);

/** Maps dish display names → their actual asset filename (no extension) */
const nameToSlug: Record<string, string> = {
    "Gajar Halwa": "gajar-halva",
    "Veg Grilled Sandwich": "sandwitch",
    "Sabudana Vada": "shabudana-vada",
    "Shengdana Gul Poli": "shengdana-poli",
    "Mushroom Bhaji": "mashroom-bhaji",
    "Dry Fruit Laddu": "dery-fruit-laddu",
};

function norm(s: string): string {
    return s.toLowerCase().replace(/_/g, "-").replace(/,/g, "");
}

/**
 * Returns the resolved image URL for a given dish name.
 * Falls back to the hero food image if no asset is found.
 */
export function getImageForName(name: string, fallback: string = heroFood): string {
    const slug =
        nameToSlug[name] ??
        name.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and");
    const slugNorm = norm(slug);

    const entry = Object.entries(assetImages).find(([path]) => {
        const base = path
            .replace(/^.*[/\\]/, "")
            .replace(/\.[^.]+$/, "")
            .toLowerCase();
        return norm(base) === slugNorm || norm(base) === norm(`food-${slug}`);
    });

    return entry ? (entry[1] as { default: string }).default : fallback;
}
