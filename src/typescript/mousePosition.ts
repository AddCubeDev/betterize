import { isMobileDevice } from "@typescript/isMobile.ts";

interface TraceMousePositionArgs {
    id: string;
    class: string;
}

export function createObserversForChildrenOfElementWithId(
    args: TraceMousePositionArgs
): IntersectionObserver[] {
    if (isMobileDevice()) {
        return [];
    }

    const element = document.getElementById(args.id);

    var observers: IntersectionObserver[] = [];

    if (element) {
        let cards = element.getElementsByClassName(args.class);

        if (cards.length > 0) {
            for (const card of cards) {
                const observer = createObserverForMouseMove(
                    card as HTMLDivElement
                );
                observers.push(observer);
            }
        } else {
            console.error(
                `traceMousePosition. No element found with class="${args.class}"!`
            );
        }
    } else {
        console.error(
            `traceMousePosition. Element with id="${args.id}" doesn't exist!`
        );
    }

    return observers;
}

function createObserverForMouseMove(
    card: HTMLDivElement
): IntersectionObserver {
    const observer = new IntersectionObserver(
        (entries, _observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    card.addEventListener("mousemove", handleMouseMove);
                } else {
                    card.removeEventListener("mousemove", handleMouseMove);
                }
            });
        },
        { threshold: 0 }
    );

    observer.observe(card);

    return observer;
}

function handleMouseMove(event: MouseEvent) {
    event.stopPropagation();

    const card_with_style = event.target as HTMLDivElement;
    const rect = card_with_style.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card_with_style.style.setProperty("--mouse-x", `${x}px`);
    card_with_style.style.setProperty("--mouse-y", `${y}px`);
}
