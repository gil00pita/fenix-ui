import Pagination from 'rc-pagination/lib/locale/da_DK';
import DatePicker from '../../Organisms/DatePicker/locale/da_DK';
import TimePicker from '../../Organisms/TimePicker/locale/da_DK';
import Calendar from '../../Organisms/Calendar/locale/da_DK';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'da',
  DatePicker,
  TimePicker,
  Calendar,
  Pagination,
  Table: {
    filterTitle: 'Filtermenu',
    filterConfirm: 'OK',
    filterReset: 'Nulstil',
    selectAll: 'Vælg alle',
    selectInvert: 'Inverter valg',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Afbryd',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Afbryd',
  },
  Transfer: {
    searchPlaceholder: 'Søg her',
    itemUnit: 'element',
    itemsUnit: 'elementer',
  },
  Upload: {
    uploading: 'Uploader...',
    removeFile: 'Fjern fil',
    uploadError: 'Fejl ved upload',
    previewFile: 'Forhåndsvisning',
    downloadFile: 'Download fil',
  },
  Empty: {
    description: 'Ingen data',
  },
};

export default localeValues;
