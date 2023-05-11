export function getFullPopulation() {
    const poplualte = "&populate=content";
    return `fields=content
    ${poplualte}.advantage_item.image
    ${poplualte}.testimonial.image
    ${poplualte}.image
    ${poplualte}.faq_element
    ${poplualte}.companies.icon
    ${poplualte}.embed
    ${poplualte}.image.image
    ${poplualte}.step.image
    ${poplualte}.plan.features`;
}
