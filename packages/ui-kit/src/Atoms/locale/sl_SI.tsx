import Pagination from 'rc-pagination/lib/locale/sl_SI';
import DatePicker from '../../Organisms/DatePicker/locale/sl_SI';
import TimePicker from '../../Organisms/TimePicker/locale/sl_SI';
import Calendar from '../../Organisms/Calendar/locale/sl_SI';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'sl',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Filter',
    filterConfirm: 'Filtriraj',
    filterReset: 'Pobriši filter',
    selectAll: 'Izberi vse na trenutni strani',
    selectInvert: 'Obrni izbor na trenutni strani',
  },
  Modal: {
    okText: 'V redu',
    cancelText: 'Prekliči',
    justOkText: 'V redu',
  },
  Popconfirm: {
    okText: 'v redu',
    cancelText: 'Prekliči',
  },
  Transfer: {
    searchPlaceholder: 'Išči tukaj',
    itemUnit: 'Objekt',
    itemsUnit: 'Objektov',
  },
  Upload: {
    uploading: 'Nalaganje...',
    removeFile: 'Odstrani datoteko',
    uploadError: 'Napaka pri nalaganju',
    previewFile: 'Predogled datoteke',
    downloadFile: 'Prenos datoteke',
  },
  Empty: {
    description: 'Ni podatkov',
  },
};

export default localeValues;
