import { Injectable } from '@angular/core';
import { NgbDateStruct, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

const I18N_VALUES = {
  'fr': {
    weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
    months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
    weekLabel: 'sem'
  }
};

@Injectable()
export class I18n {
  language = 'fr';
}

@Injectable({
  providedIn: 'root'
})
export class DateFrService extends NgbDatepickerI18n {

  constructor(private _i18n: I18n) { super(); }

  getWeekdayLabel(weekday: number): string { return I18N_VALUES['fr'].weekdays[weekday - 1]; }
  getWeekLabel(): string { return I18N_VALUES['fr'].weekLabel; }
  getMonthShortName(month: number): string { return I18N_VALUES['fr'].months[month - 1]; }
  getMonthFullName(month: number): string { return this.getMonthShortName(month); }
  getDayAriaLabel(date: NgbDateStruct): string { return `${date.day}-${date.month}-${date.year}`; }
}

