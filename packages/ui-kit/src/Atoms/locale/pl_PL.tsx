import Pagination from 'rc-pagination/lib/locale/pl_PL';
import DatePicker from '../../Organisms/DatePicker/locale/pl_PL';
import TimePicker from '../../Organisms/TimePicker/locale/pl_PL';
import Calendar from '../../Organisms/Calendar/locale/pl_PL';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'pl',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Menu filtra',
    filterConfirm: 'OK',
    filterReset: 'Wyczyść',
    selectAll: 'Zaznacz bieżącą stronę',
    selectInvert: 'Odwróć zaznaczenie',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Anuluj',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Anuluj',
  },
  Transfer: {
    searchPlaceholder: 'Szukaj',
    itemUnit: 'obiekt',
    itemsUnit: 'obiekty',
  },
  Upload: {
    uploading: 'Wysyłanie...',
    removeFile: 'Usuń plik',
    uploadError: 'Błąd wysyłania',
    previewFile: 'Podejrzyj plik',
    downloadFile: 'Pobieranie pliku',
  },
  Empty: {
    description: 'Brak danych',
  },
};

export default localeValues;
