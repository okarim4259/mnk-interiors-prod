import { Component, OnInit, Renderer2, HostListener } from "@angular/core";

@Component({
  selector: "app-best-sellers",
  templateUrl: "./best-sellers.component.html",
  styleUrls: ["./best-sellers.component.scss"]
})
export class BestSellersComponent implements OnInit {
  show: Boolean = false;

  constructor(private renderer: Renderer2) {}

  public onIntersection({
    target,
    visible
  }: {
    target: Element;
    visible: boolean;
  }): void {
    this.renderer.addClass(target, visible ? "wow" : "");
    this.renderer.addClass(target, visible ? "animated" : "animated");
    this.renderer.addClass(target, visible ? "zoomIn" : "");
  }

  ngOnInit() {}
}
