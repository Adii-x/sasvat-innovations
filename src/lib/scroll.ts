/** Smoothly scrolls to a page section by CSS selector (e.g. "#menu") */
export function scrollToSection(id: string): void {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}
