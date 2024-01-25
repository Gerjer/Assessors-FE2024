import { Component } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
  template: ''
})
export abstract class EntryComponent {

  private entrySuccess: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public entrySuccess$ = this.entrySuccess.asObservable();

  protected set entryAction(state: boolean) {
    this.entrySuccess.next(state);
  }

}
