export function getFullPopulation() {
    return `fields=content
    &populate=content.advantage_item.image
    &populate=content.testimonial.image
    &populate=content.image`;
}
