import Pagination from 'rc-pagination/lib/locale/sr_RS';
import DatePicker from '../../Organisms/DatePicker/locale/sr_RS';
import TimePicker from '../../Organisms/TimePicker/locale/sr_RS';
import Calendar from '../../Organisms/Calendar/locale/sr_RS';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'sr',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Filter',
    filterConfirm: 'Primeni filter',
    filterReset: 'Resetuj filter',
    selectAll: 'Obeleži sve na trenutnoj strani',
    selectInvert: 'Obrni selekciju na trenutnoj stranici',
  },
  Modal: {
    okText: 'U redu',
    cancelText: 'Otkaži',
    justOkText: 'U redu',
  },
  Popconfirm: {
    okText: 'U redu',
    cancelText: 'Otkaži',
  },
  Transfer: {
    searchPlaceholder: 'Pretražite ovde',
    itemUnit: 'stavka',
    itemsUnit: 'stavki',
  },
  Upload: {
    uploading: 'Slanje...',
    removeFile: 'Ukloni fajl',
    uploadError: 'Greška prilikom slanja',
    previewFile: 'Pogledaj fajl',
    downloadFile: 'Preuzmi datoteku',
  },
  Empty: {
    description: 'Nema podataka',
  },
};

export default localeValues;
