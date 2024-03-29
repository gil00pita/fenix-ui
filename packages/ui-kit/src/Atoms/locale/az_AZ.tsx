import Pagination from 'rc-pagination/lib/locale/az_AZ';
import DatePicker from '../../Organisms/DatePicker/locale/az_AZ';
import TimePicker from '../../Organisms/TimePicker/locale/az_AZ';
import Calendar from '../../Organisms/Calendar/locale/az_AZ';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'az',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Filter menyu',
    filterConfirm: 'Axtar',
    filterReset: 'Sıfırla',
    emptyText: 'Məlumat yoxdur',
    selectAll: 'Cari səhifəni seç',
    selectInvert: 'Invert current page',
  },
  Modal: {
    okText: 'Bəli',
    cancelText: 'Ləğv et',
    justOkText: 'Bəli',
  },
  Popconfirm: {
    okText: 'Bəli',
    cancelText: 'Ləğv et',
  },
  Transfer: {
    titles: ['', ''],
    notFoundContent: 'Tapılmadı',
    searchPlaceholder: 'Burada axtar',
    itemUnit: 'item',
    itemsUnit: 'items',
  },
  Select: {
    notFoundContent: 'Tapılmadı',
  },
  Upload: {
    uploading: 'Yüklənir...',
    removeFile: 'Faylı sil',
    uploadError: 'Yükləmə xətası',
    previewFile: 'Fayla önbaxış',
  },
};

export default localeValues;
