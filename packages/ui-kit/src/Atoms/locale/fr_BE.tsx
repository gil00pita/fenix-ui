import Pagination from 'rc-pagination/lib/locale/fr_BE';
import DatePicker from '../../Organisms/DatePicker/locale/fr_BE';
import TimePicker from '../../Organisms/TimePicker/locale/fr_BE';
import Calendar from '../../Organisms/Calendar/locale/fr_BE';
import { Locale } from '../Providers/LocaleProvider';

const localeValues: Locale = {
  locale: 'fr',
  Pagination,
  DatePicker,
  TimePicker,
  Calendar,
  Table: {
    filterTitle: 'Filtrer',
    filterConfirm: 'OK',
    filterReset: 'Réinitialiser',
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Annuler',
    justOkText: 'OK',
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Annuler',
  },
  Transfer: {
    searchPlaceholder: 'Recherche',
    itemUnit: 'élément',
    itemsUnit: 'éléments',
  },
  Upload: {
    uploading: 'Téléchargement...',
    removeFile: 'Effacer le fichier',
    uploadError: 'Erreur de téléchargement',
    previewFile: 'Fichier de prévisualisation',
    downloadFile: 'Télécharger un fichier',
  },
  Empty: {
    description: 'Aucune donnée',
  },
  Text: {
    edit: 'éditer',
    copy: 'copier',
    copied: 'copie effectuée',
    expand: 'développer',
  },
};

export default localeValues;
