import Pagination from 'rc-pagination/lib/locale/lv_LV';
import DatePicker from '../../Organisms/DatePicker/locale/lv_LV';
import TimePicker from '../../Organisms/TimePicker/locale/lv_LV';
import Calendar from '../../Organisms/Calendar/locale/lv_LV';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'lv',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Filtrēšanas izvēlne',
    filterConfirm: 'OK',
    filterReset: 'Atiestatīt',
    selectAll: 'Atlasiet pašreizējo lapu',
    selectInvert: 'Pārvērst pašreizējo lapu',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Atcelt',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Atcelt',
  },
  Transfer: {
    searchPlaceholder: 'Meklēt šeit',
    itemUnit: 'vienumu',
    itemsUnit: 'vienumus',
  },
  Upload: {
    uploading: 'Augšupielāde...',
    removeFile: 'Noņemt failu',
    uploadError: 'Augšupielādes kļūda',
    previewFile: 'Priekšskatiet failu',
    downloadFile: 'Lejupielādēt failu',
  },
  Empty: {
    description: 'Nav datu',
  },
};

export default localeValues;
