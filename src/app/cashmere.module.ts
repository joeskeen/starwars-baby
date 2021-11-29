import { NgModule } from "@angular/core";
import { ButtonModule, IconModule } from "@healthcatalyst/cashmere";

@NgModule({
    exports: [IconModule, ButtonModule]
})
export class CashmereModule {}