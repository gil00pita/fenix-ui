import Pagination from 'rc-pagination/lib/locale/id_ID';
import DatePicker from '../../Organisms/DatePicker/locale/id_ID';
import TimePicker from '../../Organisms/TimePicker/locale/id_ID';
import Calendar from '../../Organisms/Calendar/locale/id_ID';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'id',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Saring',
    filterConfirm: 'OK',
    filterReset: 'Hapus',
    selectAll: 'Pilih semua di halaman ini',
    selectInvert: 'Balikkan pilihan di halaman ini',
    sortTitle: 'Urutkan',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Batal',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Batal',
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Cari',
    itemUnit: 'item',
    itemsUnit: 'item',
  },
  Upload: {
    uploading: 'Mengunggah...',
    removeFile: 'Hapus file',
    uploadError: 'Kesalahan pengunggahan',
    previewFile: 'File pratinjau',
    downloadFile: 'Unduh berkas',
  },
  Empty: {
    description: 'Tidak ada data',
  },
};

export default localeValues;
