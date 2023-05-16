export function getDynamicZoneFullPopulation(dynamic_zone_name: string) {
    const poplualte = `&populate=${dynamic_zone_name}`;
    return `fields=${dynamic_zone_name}
    ${poplualte}.advantage_item.image
    ${poplualte}.testimonial.image
    ${poplualte}.image
    ${poplualte}.faq_element
    ${poplualte}.companies.icon
    ${poplualte}.embed
    ${poplualte}.image.image
    ${poplualte}.step.image
    ${poplualte}.plan.features
    ${poplualte}.img`;
}
