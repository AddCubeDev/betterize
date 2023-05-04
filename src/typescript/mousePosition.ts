interface TraceMousePositionArgs {
    id: string;
    class: string;
}

export function traceMousePosition(args: TraceMousePositionArgs) {
    const element = document.getElementById(args.id);

    if (element) {
        let cards = element.getElementsByClassName(args.class);

        if (cards.length > 0) {
            for (const card of cards) {
                let card_with_style = card as HTMLDivElement;

                var last_x = 0;
                var last_y = 0;
                const delta = 2;

                card_with_style.onmousemove = (e) => {
                    const rect = card_with_style.getBoundingClientRect();

                    if (last_x == 0 || Math.abs(last_x - e.clientX) >= delta) {
                        const x = e.clientX - rect.left;
                        last_x = e.clientX;

                        card_with_style.style.setProperty(
                            "--mouse-x",
                            `${x}px`
                        );
                    }

                    if (last_y == 0 || Math.abs(last_y - e.clientY) >= delta) {
                        const y = e.clientY - rect.top;
                        last_y = e.clientY;

                        card_with_style.style.setProperty(
                            "--mouse-y",
                            `${y}px`
                        );
                    }
                };
            }
        } else {
            console.log(
                `traceMousePosition. No element found with class="${args.class}"!`
            );
        }
    } else {
        console.log(
            `traceMousePosition. Element with id="${args.id}" doesn't exist!`
        );
    }
}
