import { LitElement } from 'lit-element';
import './my-button';
export declare class MyElement extends LitElement {
    static styles: import("lit-element").CSSResult;
    name: string;
    count: number;
    render(): import("lit-element").TemplateResult;
    private onClick;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element': MyElement;
    }
}
//# sourceMappingURL=my-element.d.ts.map