import { CSSResult, LitElement, css, unsafeCSS } from "lit";

import tailwindBase from "./tailwind-base.scss?inline";

export const TailwindBaseElement = (componentStyle: string) =>
    class extends LitElement {
        public static styles: CSSResult[] = [
            css`
                ${unsafeCSS(tailwindBase)}
            `,
            css`
                ${unsafeCSS(componentStyle)}
            `,
        ];
    };
