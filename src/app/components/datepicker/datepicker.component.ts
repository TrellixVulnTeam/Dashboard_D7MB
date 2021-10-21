import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';
import { I18n, DateFrService } from '../../services/Date/date-fr/date-fr.service';
import { DateAdapterService } from '../../services/Date/date-adapter/date-adapter.service';
import { DateParserformatterService } from '../../services/Date/date-parserformatter/date-parserformatter.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers:
  [I18n, {provide: NgbDatepickerI18n, useClass: DateFrService},{provide: NgbDateAdapter, useClass: DateAdapterService},{provide: NgbDateParserFormatter, useClass: DateParserformatterService}]
})
export class DatepickerComponent implements OnInit {

  model: string | null;

  constructor(private calendar: NgbCalendar,private dateAdapter: NgbDateAdapter<string>) {

  }

  ngOnInit(): void {
    this.model = this.dateAdapter.toModel(this.calendar.getToday())!;
  }

  get today() {
    return this.dateAdapter.toModel(this.calendar.getToday())!;
  }

}
