import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class ComponentEventDispatcherService {

  /**
   * emit event from parent to child to fetch data
   */
  emitGetData: EventEmitter<any> = new EventEmitter<any>();

  /**
   * emit event from parent to child to add data
   */
  emitAdd: EventEmitter<string> = new EventEmitter<string>();

  /**
   * emit event from parent to child to edit a data
   */
  emitEdit: EventEmitter<string> = new EventEmitter<string>();

  /**
   * emit event from parent to child to delete a data
   */
  emitDelete: EventEmitter<string> = new EventEmitter<string>();

  /**
   * emit event from parent to child to filter data
   */
  emitFilter: EventEmitter<any> = new EventEmitter<any>();

}
