import { Component, Inject } from '@angular/core';
import { ConfigurationService } from "../shared/services/configuration.service";

@Component({
  selector: "customer",
  template: require("./customers.template.html") as string
})
export class CustomersComponent {
  private title: string = "";
  constructor(private configurationService: ConfigurationService) {
    this.title = configurationService.description;
  }
}
