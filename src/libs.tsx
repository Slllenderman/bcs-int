import { WidgetsFactory } from "./widgets_factory";

export class Libs {
    private libs: Map<String, WidgetsFactory> = new Map();
    private style: String = "";

    add_lib(name: String, factory: WidgetsFactory): void
    {
        this.libs.set(name, factory);
    }

    set_style(name: String): void
    {
        this.style = name; 
    }

    get_lib(): WidgetsFactory
    {
        return this.libs.get(this.style) as WidgetsFactory;
    }
}