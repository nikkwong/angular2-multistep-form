import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs/Rx';

export interface IState {

  dirty: boolean,
  isValid: boolean

}

export type IStepDirection = 'backward' | 'forward';

@Injectable()
export class MultistepService { 

  public model = {};
  public baseRoute = '/multistep';
  public hasInitted: boolean;
  public state: Observable<IState>;
  public stateUpdateStream: Subject<any> = new Subject();
  public stateUpdates: Subject<any> = new Subject();
  private requestOutstanding: boolean = false;
  public steps = [

    'step1', 
    'step2'

  ];

  constructor (
    @Inject(Router) public router: Router) { 

    this.state = this.stateUpdates.scan((state: IState, update: any) => Object.assign({}, state, update), {}).cache();
    this.stateUpdateStream.subscribe(this.stateUpdates);

  };

  public getInitialStep() {

    this.router.navigate([this.baseRoute + '/' + this.steps[0]]);

  };

  public isStepFirstOrLast (direction: IStepDirection) {

     if (direction === 'backward' && 
        this.router.url.split('/')[2] === this.steps[0] ||
        direction === 'forward' &&
        this.router.url.split('/')[2] === this.steps[this.steps.length - 1])

      return true;

    return false;

  };

  public setState (state: any) {

    this.stateUpdateStream.next(state);

  }

  public goToNextStep (direction: IStepDirection): any {

    let stepIndex = this.steps.indexOf(this.router.url.split('/')[2]);

    if (stepIndex === -1 || stepIndex === this.steps.length) return;

    this.router.navigate([this.baseRoute + '/' + this.steps[stepIndex + (direction === 'forward' ? 1 : -1)]]);

  };

};                      