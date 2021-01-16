import { Injectable, Type } from "@angular/core";

@Injectable()
export class DynamicComponentService {
    private dynamicComponentTypes: { [type: string]: Type<any> } = {};

    constructor() {
    }
    
    registerDynamicComponentTypes(...dynamicComponentTypesToRegister: { component: Type<any>, name: string }[]) {
        dynamicComponentTypesToRegister.forEach(dynamicComponentType => {
            this.dynamicComponentTypes[dynamicComponentType.name] = dynamicComponentType.component;
        });
    }

    getDynamicComponentType(name: string): Type<any> {
        return this.dynamicComponentTypes[name];
    }
}