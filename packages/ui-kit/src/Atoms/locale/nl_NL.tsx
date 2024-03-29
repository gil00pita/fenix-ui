import Pagination from 'rc-pagination/lib/locale/nl_NL';
import DatePicker from '../../Organisms/DatePicker/locale/nl_NL';
import TimePicker from '../../Organisms/TimePicker/locale/nl_NL';
import Calendar from '../../Organisms/Calendar/locale/nl_NL';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'nl',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  global: {
    placeholder: 'Maak een selectie',
  },
  Table: {
    filterTitle: 'Filteren',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    selectAll: 'Selecteer huidige pagina',
    selectInvert: 'Deselecteer huidige pagina',
    sortTitle: 'Sorteren',
    expand: 'Rij uitklappen',
    collapse: 'Rij inklappen',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Annuleren',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Annuleren',
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Zoeken',
    itemUnit: 'item',
    itemsUnit: 'items',
  },
  Upload: {
    uploading: 'Uploaden...',
    removeFile: 'Verwijder bestand',
    uploadError: 'Fout tijdens uploaden',
    previewFile: 'Bekijk bestand',
    downloadFile: 'Downloaden bestand',
  },
  Empty: {
    description: 'Geen gegevens',
  },
  Icon: {
    icon: 'icoon',
  },
  Text: {
    edit: 'Bewerken',
    copy: 'Kopieren',
    copied: 'Gekopieerd',
    expand: 'Uitklappen',
  },
  PageHeader: {
    back: 'Terug',
  },
};

export default localeValues;
