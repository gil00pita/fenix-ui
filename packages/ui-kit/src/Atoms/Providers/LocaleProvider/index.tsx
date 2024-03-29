import * as React from 'react';
import { ValidateMessages } from 'rc-field-form/lib/interface';
import devWarning from '@fenix-ui/utils/lib/devWarning';

import { ModalLocale, changeConfirmLocale } from '../../../Organisms/Modal/locale';
import { TransferLocale as TransferLocaleForEmpty } from '../../../Molecules/EmptySpaces';
import { PaginationLocale } from '../../../Molecules/Pagination/Pagination';
import { TableLocale } from '../../../Organisms/Table/interface';
import { PopconfirmLocale } from '../../../Organisms/Popconfirm';
import { UploadLocale } from '../../../Organisms/Upload/interface';
import { TransferLocale } from '../../../Organisms/Transfer';
import { PickerLocale as DatePickerLocale } from '../../../Organisms/DatePicker/generatePicker';
import LocaleContext from './context';

export const ANT_MARK = 'internalMark';

export interface Locale {
  locale: string;
  Pagination?: PaginationLocale;
  DatePicker?: DatePickerLocale;
  TimePicker?: Object;
  Calendar?: Object;
  Table?: TableLocale;
  Modal?: ModalLocale;
  Popconfirm?: PopconfirmLocale;
  Transfer?: Partial<TransferLocale>;
  Select?: Object;
  Upload?: UploadLocale;
  Empty?: TransferLocaleForEmpty;
  global?: Object;
  PageHeader?: Object;
  Icon?: Object;
  Text?: Object;
  Form?: {
    defaultValidateMessages: ValidateMessages;
  };
}

export interface LocaleProviderProps {
  locale: Locale;
  children?: React.ReactNode;
  _ANT_MARK__?: string;
}

export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
  static defaultProps = {
    locale: {},
  };

  constructor(props: LocaleProviderProps) {
    super(props);
    changeConfirmLocale(props.locale && props.locale.Modal);

    devWarning(
      props._ANT_MARK__ === ANT_MARK,
      'LocaleProvider',
      '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale',
    );
  }

  componentDidUpdate(prevProps: LocaleProviderProps) {
    const { locale } = this.props;
    if (prevProps.locale !== locale) {
      changeConfirmLocale(locale && locale.Modal);
    }
  }

  componentWillUnmount() {
    changeConfirmLocale();
  }

  render() {
    const { locale, children } = this.props;

    return (
      <LocaleContext.Provider value={{ ...locale, exist: true }}>{children}</LocaleContext.Provider>
    );
  }
}
