import Pagination from 'rc-pagination/lib/locale/sv_SE';
import DatePicker from '../../Organisms/DatePicker/locale/sv_SE';
import TimePicker from '../../Organisms/TimePicker/locale/sv_SE';
import Calendar from '../../Organisms/Calendar/locale/sv_SE';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'sv',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Filtermeny',
    filterConfirm: 'OK',
    filterReset: 'Rensa',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Avbryt',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Avbryt',
  },
  Transfer: {
    searchPlaceholder: 'Sök',
    itemUnit: 'element',
    itemsUnit: 'element',
  },
  Empty: {
    description: 'Ingen information',
  },
  Text: {
    edit: 'editera',
    copy: 'kopiera',
    copied: 'kopierad',
    expand: 'expandera',
  },
  Upload: {
    uploading: 'Uppladdning...',
    removeFile: 'Ta bort fil',
    uploadError: 'Uppladdningsfel',
    previewFile: 'Förhandsgranska filen',
    downloadFile: 'Nedladdning fil',
  },
};

export default localeValues;
