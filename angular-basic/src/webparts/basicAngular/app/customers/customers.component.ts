import { ConfigurationService } from "../shared/services/configuration.service";
import { Component, OnInit ,  AfterViewInit, OnChanges , OnDestroy} from "@angular/core";
import { CustomerServices  } from "../customers-services/customer.services";
import { Customer } from "../customer-model/customer.model";
@Component({
  selector: "customer",
  template: require("./customers.template.html") as string,
  styleUrls: ['./customers.component.css'],
  providers:[CustomerServices]
})
export class CustomersComponent implements OnInit, AfterViewInit, OnChanges ,OnDestroy {
  private title: string = "";
  public constructor( private configurationService: ConfigurationService , private customerService: CustomerServices) {
    this.title = configurationService.description;
  }
  public customer: Customer[];
  public selectedCustomer: Customer;
  public getAllCustomers(): void {
    this.customerService.getAllCustomers().then(result => {this.customer = result ; console.log( "abc " + result);} );
  }
  public getCustomerById(): void {
    this.customerService.getCustomer(1).then(result => {this.selectedCustomer = result;});
  }
  public ngOnInit(): void {
    console.log("customer work");
    // this.getAllCustomers();
  }
  public ngAfterViewInit():void {
    console.log("after view init");
  }

  public ngOnChanges():void{
    console.log("on change");
  }
  public ngOnDestroy():void{
    console.log("on destroy");
  }
}
