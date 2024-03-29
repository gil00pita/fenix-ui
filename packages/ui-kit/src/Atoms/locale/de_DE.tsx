import Pagination from 'rc-pagination/lib/locale/de_DE';
import DatePicker from '../../Organisms/DatePicker/locale/de_DE';
import TimePicker from '../../Organisms/TimePicker/locale/de_DE';
import Calendar from '../../Organisms/Calendar/locale/de_DE';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'de',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  global: {
    placeholder: 'Bitte auswählen',
  },
  Table: {
    filterTitle: 'Filter-Menü',
    filterConfirm: 'OK',
    filterReset: 'Zurücksetzen',
    selectAll: 'Selektiere Alle',
    selectInvert: 'Selektion Invertieren',
    selectionAll: 'Wählen Sie alle Daten aus',
    sortTitle: 'Sortieren',
    expand: 'Zeile erweitern',
    collapse: 'Zeile reduzieren',
    triggerDesc: '﻿Klicken zur absteigenden  Sortierung',
    triggerAsc: '﻿Klicken zur aufsteigenden Sortierung',
    cancelSort: '﻿Klicken zum Abbrechen der Sortierung',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Abbrechen',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Abbrechen',
  },
  Transfer: {
    searchPlaceholder: 'Suchen',
    itemUnit: 'Eintrag',
    itemsUnit: 'Einträge',
  },
  Upload: {
    uploading: 'Hochladen...',
    removeFile: 'Datei entfernen',
    uploadError: 'Fehler beim Hochladen',
    previewFile: 'Dateivorschau',
    downloadFile: 'Download-Datei',
  },
  Empty: {
    description: 'Keine Daten',
  },
  Text: {
    edit: 'Bearbeiten',
    copy: 'Kopieren',
    copied: 'Kopiert',
    expand: 'Erweitern',
  },
  PageHeader: {
    back: 'Zurück',
  },
};

export default localeValues;
