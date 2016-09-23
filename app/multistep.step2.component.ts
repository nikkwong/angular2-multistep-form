import { Component, OnInit, Inject, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MultistepService } from './multistep.service';
import { MultistepFormClass } from './multistep.form-class';

@Component({ 
  templateUrl: '/app/templates/multistep.step2.html',
    })

export class MultistepStep2Component extends MultistepFormClass implements OnInit, AfterViewChecked {
  
  @ViewChild('form') public latestForm: NgForm;

  constructor (
    @Inject(MultistepService) public multistepService: MultistepService
  ) { super(multistepService) }

  ngOnInit () {

    this.model = this.multistepService.model;

  }

}