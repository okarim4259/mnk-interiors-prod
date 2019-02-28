import { Component, OnInit, Renderer2, HostListener } from "@angular/core";

@Component({
  selector: "app-best-sellers",
  templateUrl: "./best-sellers.component.html",
  styleUrls: ["./best-sellers.component.scss"]
})
export class BestSellersComponent implements OnInit {
  show: Boolean = false;

  constructor(private renderer: Renderer2) {}

  @HostListener("window:scroll", ["$event"])
  public displaySection() {
    setTimeout(() => {
      this.show = true;
    }, 40);
  }

  displayBestSellerFirst(event: any) {
    if (event) {
      this.show = true;
    }
  }

  ngOnInit() {}
}
