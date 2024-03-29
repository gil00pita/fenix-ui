import Pagination from 'rc-pagination/lib/locale/mk_MK';
import DatePicker from '../../Organisms/DatePicker/locale/mk_MK';
import TimePicker from '../../Organisms/TimePicker/locale/mk_MK';
import Calendar from '../../Organisms/Calendar/locale/mk_MK';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'mk',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  global: {
    placeholder: 'Ве молиме означете',
  },
  Table: {
    filterTitle: 'Мени за филтрирање',
    filterConfirm: 'ОК',
    filterReset: 'Избриши',
    selectAll: 'Одбери страница',
    selectInvert: 'Инвертирај страница',
  },
  Modal: {
    okText: 'ОК',
    cancelText: 'Откажи',
    justOkText: 'ОК',
  },
  Popconfirm: {
    okText: 'ОК',
    cancelText: 'Откажи',
  },
  Transfer: {
    searchPlaceholder: 'Пребарај тука',
    itemUnit: 'предмет',
    itemsUnit: 'предмети',
  },
  Upload: {
    uploading: 'Се прикачува...',
    removeFile: 'Избриши фајл',
    uploadError: 'Грешка при прикачување',
    previewFile: 'Прикажи фајл',
    downloadFile: 'Преземи фајл',
  },
  Empty: {
    description: 'Нема податоци',
  },
  Icon: {
    icon: 'Икона',
  },
  Text: {
    edit: 'Уреди',
    copy: 'Копирај',
    copied: 'Копирано',
    expand: 'Зголеми',
  },
  PageHeader: {
    back: 'Назад',
  },
};

export default localeValues;
