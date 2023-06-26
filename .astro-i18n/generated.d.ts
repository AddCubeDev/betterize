type DefaultLangCode = "pl"
type SupportedLangCode = "en"
type LangCode = DefaultLangCode | SupportedLangCode
type RouteUri = | "/blog/[slug]" | "/projects/[slug]" | "/404" | "/contact" | "/" | "/pagespeedtester" | "/projects" | "/test" | "/thankyou" 
type RouteParams = {"/blog/[slug]": { "slug": string; }; "/projects/[slug]": { "slug": string; }; "/404": undefined; "/contact": undefined; "/": undefined; "/pagespeedtester": undefined; "/projects": undefined; "/test": undefined; "/thankyou": undefined; }
type TranslationPath = "404.title" | "404.subtitle" | "navBar.projects.title" | "navBar.projects.betterize" | "navBar.projects.whatWeDo" | "navBar.projects.photoShootManager" | "navBar.projects.more" | "navBar.pageSpeed" | "navBar.contact" | "section1.title" | "section1.subtitle" | "section1.pageSpeedQuery.url" | "section1.pageSpeedQuery.test" | "section1.pageSpeedQuery.processing" | "section1.pageSpeedQuery.description" | "contactForm.namePlaceholder" | "contactForm.emailPlaceholder" | "contactForm.messagePlaceholder" | "contactForm.nameLabel" | "contactForm.emailLabel" | "contactForm.messageLabel" | "contactForm.send" | "proof.title" | "proof.item1.title" | "proof.item1.paragraph" | "proof.item1.date" | "proof.item2.title" | "proof.item2.paragraph" | "proof.item2.date" | "proof.item3.title" | "proof.item3.paragraph" | "proof.item3.date" | "faq.item1.question" | "faq.item1.answer" | "faq.item2.question" | "faq.item2.answer" | "faq.item3.question" | "faq.item3.answer" | "faq.item4.question" | "faq.item4.answer" | "faq.item5.question" | "faq.item5.answer" | "faq.item6.question" | "faq.item6.answer" | "index.hero.title.text1" | "index.hero.title.highlighted" | "index.hero.title.text2" | "index.hero.subtitle" | "index.hero.mainButton" | "index.hero.secondaryButton" | "index.marketing0.card1.title" | "index.marketing0.card1.text1" | "index.marketing0.card1.text2" | "index.marketing0.card2.title" | "index.marketing0.card2.text1" | "index.marketing0.card2.text2" | "index.marketing0.card3.title" | "index.marketing0.card3.text1" | "index.marketing0.card3.text2" | "index.marketing1.title" | "index.marketing1.subtitle" | "index.marketing1.card1.title" | "index.marketing1.card1.paragraph" | "index.marketing1.card2.title" | "index.marketing1.card2.paragraph" | "index.marketing1.card3.title" | "index.marketing1.card3.paragraph" | "index.marketing1.card4.title" | "index.marketing1.card4.paragraph" | "index.marketing1.card5.title" | "index.marketing1.card5.paragraph" | "index.marketing1.card6.title" | "index.marketing1.card6.paragraph" | "index.marketing2.title" | "index.marketing2.testimonial1.name" | "index.marketing2.testimonial1.company" | "index.marketing2.testimonial1.paragraph" | "index.marketing2.testimonial2.name" | "index.marketing2.testimonial2.company" | "index.marketing2.testimonial2.paragraph" | "index.marketing2.testimonial3.name" | "index.marketing2.testimonial3.company" | "index.marketing2.testimonial3.paragraph" | "index.steps.title" | "index.steps.step1.title" | "index.steps.step1.paragraph" | "index.steps.step2.title" | "index.steps.step2.paragraph" | "index.steps.step3.title" | "index.steps.step3.paragraph" | "index.steps.step4.title" | "index.steps.step4.paragraph" | "index.steps.step5.title" | "index.steps.step5.paragraph" | "index.steps.step6.title" | "index.steps.step6.paragraph" | "index.contact.title" | "index.contact.subtitle" | "index.contact.faqTitle" | "index.proof.title" | "contact.title" | "thankYou.title" | "thankYou.subtitle" | "projects.pageTitle" | "projects.title"
type TranslationOptions = { "404.title": {} | undefined; "404.subtitle": {} | undefined; "navBar.projects.title": {} | undefined; "navBar.projects.betterize": {} | undefined; "navBar.projects.whatWeDo": {} | undefined; "navBar.projects.photoShootManager": {} | undefined; "navBar.projects.more": {} | undefined; "navBar.pageSpeed": {} | undefined; "navBar.contact": {} | undefined; "section1.title": {} | undefined; "section1.subtitle": {} | undefined; "section1.pageSpeedQuery.url": {} | undefined; "section1.pageSpeedQuery.test": {} | undefined; "section1.pageSpeedQuery.processing": {} | undefined; "section1.pageSpeedQuery.description": {} | undefined; "contactForm.namePlaceholder": {} | undefined; "contactForm.emailPlaceholder": {} | undefined; "contactForm.messagePlaceholder": {} | undefined; "contactForm.nameLabel": {} | undefined; "contactForm.emailLabel": {} | undefined; "contactForm.messageLabel": {} | undefined; "contactForm.send": {} | undefined; "proof.title": {} | undefined; "proof.item1.title": {} | undefined; "proof.item1.paragraph": {} | undefined; "proof.item1.date": {} | undefined; "proof.item2.title": {} | undefined; "proof.item2.paragraph": {} | undefined; "proof.item2.date": {} | undefined; "proof.item3.title": {} | undefined; "proof.item3.paragraph": {} | undefined; "proof.item3.date": {} | undefined; "faq.item1.question": {} | undefined; "faq.item1.answer": {} | undefined; "faq.item2.question": {} | undefined; "faq.item2.answer": {} | undefined; "faq.item3.question": {} | undefined; "faq.item3.answer": {} | undefined; "faq.item4.question": {} | undefined; "faq.item4.answer": {} | undefined; "faq.item5.question": {} | undefined; "faq.item5.answer": {} | undefined; "faq.item6.question": {} | undefined; "faq.item6.answer": {} | undefined; "index.hero.title.text1": {} | undefined; "index.hero.title.highlighted": {} | undefined; "index.hero.title.text2": {} | undefined; "index.hero.subtitle": {} | undefined; "index.hero.mainButton": {} | undefined; "index.hero.secondaryButton": {} | undefined; "index.marketing0.card1.title": {} | undefined; "index.marketing0.card1.text1": {} | undefined; "index.marketing0.card1.text2": {} | undefined; "index.marketing0.card2.title": {} | undefined; "index.marketing0.card2.text1": {} | undefined; "index.marketing0.card2.text2": {} | undefined; "index.marketing0.card3.title": {} | undefined; "index.marketing0.card3.text1": {} | undefined; "index.marketing0.card3.text2": {} | undefined; "index.marketing1.title": {} | undefined; "index.marketing1.subtitle": {} | undefined; "index.marketing1.card1.title": {} | undefined; "index.marketing1.card1.paragraph": {} | undefined; "index.marketing1.card2.title": {} | undefined; "index.marketing1.card2.paragraph": {} | undefined; "index.marketing1.card3.title": {} | undefined; "index.marketing1.card3.paragraph": {} | undefined; "index.marketing1.card4.title": {} | undefined; "index.marketing1.card4.paragraph": {} | undefined; "index.marketing1.card5.title": {} | undefined; "index.marketing1.card5.paragraph": {} | undefined; "index.marketing1.card6.title": {} | undefined; "index.marketing1.card6.paragraph": {} | undefined; "index.marketing2.title": {} | undefined; "index.marketing2.testimonial1.name": {} | undefined; "index.marketing2.testimonial1.company": {} | undefined; "index.marketing2.testimonial1.paragraph": {} | undefined; "index.marketing2.testimonial2.name": {} | undefined; "index.marketing2.testimonial2.company": {} | undefined; "index.marketing2.testimonial2.paragraph": {} | undefined; "index.marketing2.testimonial3.name": {} | undefined; "index.marketing2.testimonial3.company": {} | undefined; "index.marketing2.testimonial3.paragraph": {} | undefined; "index.steps.title": {} | undefined; "index.steps.step1.title": {} | undefined; "index.steps.step1.paragraph": {} | undefined; "index.steps.step2.title": {} | undefined; "index.steps.step2.paragraph": {} | undefined; "index.steps.step3.title": {} | undefined; "index.steps.step3.paragraph": {} | undefined; "index.steps.step4.title": {} | undefined; "index.steps.step4.paragraph": {} | undefined; "index.steps.step5.title": {} | undefined; "index.steps.step5.paragraph": {} | undefined; "index.steps.step6.title": {} | undefined; "index.steps.step6.paragraph": {} | undefined; "index.contact.title": {} | undefined; "index.contact.subtitle": {} | undefined; "index.contact.faqTitle": {} | undefined; "index.proof.title": {} | undefined; "contact.title": {} | undefined; "thankYou.title": {} | undefined; "thankYou.subtitle": {} | undefined; "projects.pageTitle": {} | undefined; "projects.title": {} | undefined; }

declare module "astro-i18n" {
	export * from "astro-i18n/"
	
	export function l<Uri extends RouteUri>(
		route: Uri | string & {},
		...args: Uri extends keyof RouteParams
			? undefined extends RouteParams[Uri]
				? [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
				: [params: RouteParams[Uri], targetLangCode?: LangCode, routeLangCode?: LangCode]
			: [params?: Record<string, string>, targetLangCode?: LangCode, routeLangCode?: LangCode]
	): string
	
	export function t<Path extends TranslationPath>(
		path: Path | string & {},
		...args: undefined extends TranslationOptions[Path]
			? [options?: keyof TranslationOptions extends Path ? Record<string, unknown> : TranslationOptions[Path], langCode?: LangCode]
			: [options: TranslationOptions[Path], langCode?: LangCode]
	): string
	
	export function extractRouteLangCode(route: string): LangCode | undefined
	
	type Translation = string | { [translationKey: string]: string | Translation }
	type Translations = { [langCode: string]: Record<string, Translation> }
	type RouteTranslations = { [langCode: string]: Record<string, string> }
	type InterpolationFormatter = (value: unknown, ...args: unknown[]) => string
	class AstroI18n {
		defaultLangCode: DefaultLangCode
		supportedLangCodes: SupportedLangCode[]
		showDefaultLangCode: boolean
		translations: Translations
		routeTranslations: RouteTranslations
		get langCodes(): LangCode[]
		get langCode(): LangCode
		set langCode(langCode: LangCode)
		get formatters(): Record<string, InterpolationFormatter>
		init(Astro: { url: URL }, formatters?: Record<string, InterpolationFormatter>): void
		addTranslations(translations: Translations): void
		addRouteTranslations(routeTranslations: RouteTranslations): void
		getFormatter(name: string): InterpolationFormatter | undefined
		setFormatter(name: string, formatter: InterpolationFormatter): void
		deleteFormatter(name: string): void
	}
	export const astroI18n: AstroI18n
}
