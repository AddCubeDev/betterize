interface TraceMousePositionArgs {
    id: string;
    class: string;
}

export function traceMousePosition(args: TraceMousePositionArgs) {
    const element = document.getElementById(args.id);

    if (element) {
        element.onmousemove = (e) => {
            let cards = element.getElementsByClassName(args.class);

            if (cards.length > 0) {
                for (const card of cards) {
                    if (card.matches(":hover")) {
                        const rect = card.getBoundingClientRect(),
                            x = e.clientX - rect.left,
                            y = e.clientY - rect.top;

                        let card_with_style = card as HTMLDivElement;

                        card_with_style.style.setProperty(
                            "--mouse-x",
                            `${x}px`
                        );
                        card_with_style.style.setProperty(
                            "--mouse-y",
                            `${y}px`
                        );
                    }
                }
            } else {
                console.log(
                    `traceMousePosition. No element found with class="${args.class}"!`
                );
            }
        };
    } else {
        console.log(
            `traceMousePosition. Element with id="${args.id}" doesn't exist!`
        );
    }
}
