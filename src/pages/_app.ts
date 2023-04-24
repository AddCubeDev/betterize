import type { App } from "vue";
import { CircleProgress } from "vue3-circle-progress";

export default (app: App) => {
    app.component("circle-progress", CircleProgress);
};
