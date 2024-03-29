import Pagination from 'rc-pagination/lib/locale/ro_RO';
import DatePicker from '../../Organisms/DatePicker/locale/ro_RO';
import TimePicker from '../../Organisms/TimePicker/locale/ro_RO';
import Calendar from '../../Organisms/Calendar/locale/ro_RO';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'ro',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  global: {
    placeholder: 'Selectează',
  },
  Table: {
    filterTitle: 'Filtrează',
    filterConfirm: 'OK',
    filterReset: 'Resetează',
    selectAll: 'Selectează pagina curentă',
    selectInvert: 'Inversează pagina curentă',
    sortTitle: 'Ordonează',
    expand: 'Extinde rândul',
    collapse: 'Micșorează rândul',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Anulare',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Anulare',
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Căutare',
    itemUnit: 'element',
    itemsUnit: 'elemente',
  },
  Upload: {
    uploading: 'Se transferă...',
    removeFile: 'Înlătură fișierul',
    uploadError: 'Eroare la upload',
    previewFile: 'Previzualizare fișier',
    downloadFile: 'Descărcare fișier',
  },
  Empty: {
    description: 'Fără date',
  },
  Icon: {
    icon: 'icon',
  },
  Text: {
    edit: 'editează',
    copy: 'copiază',
    copied: 'copiat',
    expand: 'extinde',
  },
  PageHeader: {
    back: 'înapoi',
  },
};

export default localeValues;
