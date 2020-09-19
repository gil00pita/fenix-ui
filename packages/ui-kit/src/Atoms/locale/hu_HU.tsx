import Pagination from 'rc-pagination/lib/locale/hu_HU';
import DatePicker from '../../Organisms/DatePicker/locale/hu_HU';
import TimePicker from '../../Organisms/TimePicker/locale/hu_HU';
import Calendar from '../../Organisms/Calendar/locale/hu_HU';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'hu',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Szűrők',
    filterConfirm: 'Alkalmazás',
    filterReset: 'Visszaállítás',
    selectAll: 'Jelenlegi oldal kiválasztása',
    selectInvert: 'Jelenlegi oldal inverze',
    sortTitle: 'Rendezés',
  },
  Modal: {
    okText: 'Alkalmazás',
    cancelText: 'Visszavonás',
    justOkText: 'Alkalmazás',
  },
  Popconfirm: {
    okText: 'Alkalmazás',
    cancelText: 'Visszavonás',
  },
  Transfer: {
    searchPlaceholder: 'Keresés',
    itemUnit: 'elem',
    itemsUnit: 'elemek',
  },
  Upload: {
    uploading: 'Feltöltés...',
    removeFile: 'Fájl eltávolítása',
    uploadError: 'Feltöltési hiba',
    previewFile: 'Fájl előnézet',
    downloadFile: 'Fájl letöltése',
  },
  Empty: {
    description: 'Nincs adat',
  },
};

export default localeValues;
