import Pagination from 'rc-pagination/lib/locale/vi_VN';
import DatePicker from '../../Organisms/DatePicker/locale/vi_VN';
import TimePicker from '../../Organisms/TimePicker/locale/vi_VN';
import Calendar from '../../Organisms/Calendar/locale/vi_VN';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'vi',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Bộ ',
    filterConfirm: 'OK',
    filterReset: 'Tạo Lại',
    selectAll: 'Chọn Tất Cả',
    selectInvert: 'Chọn Ngược Lại',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Huỷ',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Huỷ',
  },
  Transfer: {
    searchPlaceholder: 'Tìm ở đây',
    itemUnit: 'mục',
    itemsUnit: 'mục',
  },
  Upload: {
    uploading: 'Đang tải lên...',
    removeFile: 'Gỡ bỏ tập tin',
    uploadError: 'Lỗi tải lên',
    previewFile: 'Xem thử tập tin',
    downloadFile: 'Tải tập tin',
  },
  Empty: {
    description: 'Trống',
  },
};

export default localeValues;
