import Pagination from 'rc-pagination/lib/locale/pt_PT';
import DatePicker from '../../Organisms/DatePicker/locale/pt_PT';
import TimePicker from '../../Organisms/TimePicker/locale/pt_PT';
import Calendar from '../../Organisms/Calendar/locale/pt_PT';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'pt',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Filtro',
    filterConfirm: 'Aplicar',
    filterReset: 'Reiniciar',
    selectAll: 'Selecionar página atual',
    selectInvert: 'Inverter seleção',
    sortTitle: 'Ordenação',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancelar',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancelar',
  },
  Transfer: {
    searchPlaceholder: 'Procurar...',
    itemUnit: 'item',
    itemsUnit: 'itens',
  },
  Upload: {
    uploading: 'A carregar...',
    removeFile: 'Remover',
    uploadError: 'Erro ao carregar',
    previewFile: 'Pré-visualizar',
    downloadFile: 'Baixar',
  },
  Empty: {
    description: 'Sem resultados',
  },
};

export default localeValues;
