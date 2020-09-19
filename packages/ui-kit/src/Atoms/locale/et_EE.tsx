import Pagination from 'rc-pagination/lib/locale/et_EE';
import DatePicker from '../../Organisms/DatePicker/locale/et_EE';
import TimePicker from '../../Organisms/TimePicker/locale/et_EE';
import Calendar from '../../Organisms/Calendar/locale/et_EE';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'et',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Filtri menüü',
    filterConfirm: 'OK',
    filterReset: 'Nulli',
    selectAll: 'Vali kõik',
    selectInvert: 'Inverteeri valik',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Tühista',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Tühista',
  },
  Transfer: {
    searchPlaceholder: 'Otsi siit',
    itemUnit: 'kogus',
    itemsUnit: 'kogus',
  },
  Upload: {
    uploading: 'Üleslaadimine...',
    removeFile: 'Eemalda fail',
    uploadError: 'Üleslaadimise tõrge',
    previewFile: 'Faili eelvaade',
    downloadFile: 'Laadige fail alla',
  },
  Empty: {
    description: 'Andmed puuduvad',
  },
};

export default localeValues;
