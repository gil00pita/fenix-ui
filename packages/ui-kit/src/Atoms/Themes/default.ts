import { getColor } from '../Color';
import { fade, darken, lighten, hslToHex } from '@fenix-ui/utils/lib/colorManipulator';

const fontSizeBase = 14;

const colors = {
  primary: getColor('blue', 6),
  info: getColor('brand', 'primary'),
  success: getColor('green', 6),
  processing: getColor('blue', 6),
  error: getColor('red', 6),
  highlight: getColor('red', 6),
  warning: getColor('gold', 6),
  normal: '#d9d9d9',
  white: getColor('common', 'white'),
  black: getColor('common', 'black'),
  disabled: fade(getColor('common', 'black'), 0.25),
  disabledDark: fade(getColor('common', 'black'), 0.35),
  primaryStates: {
    // Color used by default to control hover and active backgrounds and for
    // alert info backgrounds.
    primary1: getColor('blue', 1),
    primary2: getColor('blue', 2),
    primary3: getColor('blue', 3), // unused
    primary4: getColor('blue', 4), // unused
    primary5: getColor('blue', 5), // color used to control the text color in many active and hover states, replace lighten(primary-color, 20%)
    primary6: getColor('blue', 6), // color used to control the text color of active buttons, don't use, use primary-color
    primary7: getColor('blue', 7),
    primary8: getColor('blue', 8), // unused
    primary9: getColor('blue', 9), // unused
    primary10: getColor('blue', 10), // unused
  },
};

const background = {
  // Base Scaffolding Variables
  // Background color for `<body>`
  bodyBackground: colors.white,
  // Base background color for most components
  componentBackground: colors.white,
  // Popover background color
  popoverBackground: colors.white, // same as componentBackground,
  // The background colors for active and hover states for things like
  // list items or table cells.
  itemActiveBg: colors.primaryStates.primary1,
  itemHoverBg: '#f5f5f5',
  backgroundColorLight: hslToHex('hsl(0, 0%, 98%)'), // background of header and selected item
  backgroundColorBase: hslToHex('hsl(0, 0%, 96%)'), // Default grey background color
  // Disabled states
  disabledBg: hslToHex('hsl(0, 0%, 96%)'), // same as backgroundColorBase
};

// Border color
const border = {
  borderColorBase: hslToHex('hsl(0, 0%, 85%)'), // base border outline a component
  borderColorSplit: hslToHex('hsl(0, 0%, 94%)'), // split border inside a component
  borderColorInverse: colors.white,
  borderWidthBase: 1, // width of the border for a component
  borderStyleBase: 'solid', // style of a components border
  popoverCustomizeBorderColor: hslToHex('hsl(0, 0%, 94%)'),
  borderRadiusBase: 2,
  borderRadiusSm: 2,
  borderRadiusLg: 3,
};

// Outline
const outline = {
  outlineBlurSize: 0,
  outlineWidth: 2,
  outlineColor: colors.primary,
  outlineFade: '20%',
};

// Fonts
const font = {
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji'`,
  codeFamily: `'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace`,
  textColor: fade(colors.black, 0.65),
  textColorDisabled: fade(colors.black, 0.3),
  textColorSecondary: fade(colors.black, 0.45),
  textColorInverse: colors.white,
  iconColor: 'inherit',
  iconColorHover: fade(colors.black, 0.75),
  headingColor: fade(colors.black, 0.85),
  headingColorDark: fade(colors.white, 1),
  textColorDark: fade(colors.white, 0.85),
  textColorSecondaryDark: fade(colors.white, 0.65),
  textSelectionBg: colors.primary,
  textDecorationBase: 'none',
  fontVariantBase: 'tabular-nums',
  fontFeatureSettingsBase: 'tnum',
  fontWeightBase: 400,
  fontStyleBase: 'normal',
  fontSizeBase: fontSizeBase,
  fontSizeLg: fontSizeBase + 2,
  fontSizeSm: fontSizeBase - 2,
  heading1Size: Math.ceil(fontSizeBase * 2.71),
  heading2Size: Math.ceil(fontSizeBase * 2.14),
  heading3Size: Math.ceil(fontSizeBase * 1.71),
  heading4Size: Math.ceil(fontSizeBase * 1.42),
  heading5Size: Math.ceil(fontSizeBase * 1.13),
  heading6Size: Math.ceil(fontSizeBase * 0.84),
  // https://github.com/ant-design/ant-design/issues/20210
  lineHeightBase: 1.5715,
  body1Size: 14,
  body1LineHeight: 1.5,
  body1LetterSpacing: '0.00938em',
  body2Size: 12,
  body2LineHeight: 1.43,
  body2LetterSpacing: '0.01071em',
  buttonSize: 14,
  buttonLineHeight: 1.75,
  buttonLetterSpacing: '0.02857em',
  captionSize: 10,
  captionLineHeight: 1.33,
  captionLetterSpacing: '0.03333em',
  overlineSize: 12,
  overlineLineHeight: 1.86,
  overlineLetterSpacing: '0.08333em',
  subtitle1Size: 14,
  subtitle1LineHeight: 1.75,
  subtitle1LetterSpacing: '0.00938em',
  subtitle2Size: 12,
  subtitle2LineHeight: 1.57,
  subtitle2LetterSpacing: '0.00714em',
};

// Typography
const typography = {
  typographyTitleFontWeight: 600,
  typographyTitleMarginTop: '1.2em',
  typographyTitleMarginBottom: '0.5em',
};

// vertical paddings
const padding = {
  paddingLg: 24, // containers
  paddingMd: 16, // small containers and buttons
  paddingSm: 12, // Form controls and items
  paddingXs: 8, // small items
  paddingXss: 4, // more small
  // vertical padding for all form controls
  controlPaddingHorizontal: 12, // same as paddingSm
  controlPaddingHorizontalSm: 8, // same as padding-xs
};

// height rules
const height = {
  heightBase: 32,
  heightLg: 40,
  heightSm: 24,
};

// vertical margins
const margin = {
  marginLg: 24, // containers
  marginMd: 16, // small containers and buttons
  marginSm: 12, // Form controls and items
  marginXs: 8, // small items
  marginXss: 4, // more small
};

// LINK
const link = {
  linkColor: colors.primary,
  linkHoverColor: colors.primaryStates.primary5,
  linkActiveColor: colors.primaryStates.primary7,
  linkDecoration: 'none',
  linkHoverDecoration: 'none',
  linkFocusDecoration: 'none',
  linkFocusOutline: 0,
};

// Animation
const animation = {
  animationDurationSlow: '0.3s', // Modal
  animationDurationBase: '0.2s',
  animationDurationFast: '0.1s', // Tooltip
  easeBaseOut: 'cubic-bezier(0.7, 0.3, 0.1, 1)',
  easeBaseIn: 'cubic-bezier(0.9, 0, 0.3, 0.7)',
  easeOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  easeIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
  easeInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  easeOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
  easeInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
  easeInOutBack: 'cubic-bezier(0.71, -0.46, 0.29, 1.46)',
  easeOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
  easeInCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.34)',
  easeInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
  easeOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
  easeInOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
};

// Shadow
const shadow = {
  shadowColor: 'rgba(0, 0, 0, 0.15)',
  shadowColorInverse: background.componentBackground,
  boxShadowBase: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08)`, //Same as shadow2
  shadow1Up: `0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05),
    0 -12px 48px 16px rgba(0, 0, 0, 0.03)`,
  shadow1Down: `0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05),
    0 12px 48px 16px rgba(0, 0, 0, 0.03)`,
  shadow1Left: `-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05),
    -12px 0 48px 16px rgba(0, 0, 0, 0.03)`,
  shadow1Right: `6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05),
    12px 0 48px 16px rgba(0, 0, 0, 0.03)`,
  shadow2: `0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 9px 28px 8px rgba(0, 0, 0, 0.05)`,
};

// Buttons
const button = {
  btnFontWeight: '400',
  btnBorderRadiusBase: border.borderRadiusBase,
  btnBorderRadiusSm: border.borderRadiusSm,
  btnBorderRadiusLg: border.borderRadiusLg,
  btnBorderWidth: border.borderWidthBase,
  btnBorderStyle: border.borderStyleBase,
  btnShadow: '0 2px 0 rgba(0, 0, 0, 0.015)',
  btnPrimaryShadow: '0 2px 0 rgba(0, 0, 0, 0.045)',
  btnTextShadow: '0 1px 0 rgba(0, 0, 0, 0.08)',
  // raised
  btnRaisedColor: colors.white,
  btnRaisedBg: colors.primary,
  btnRaisedBgDisabled: colors.disabled,
  btnRaisedBgHover: darken(colors.primary, 0.14),
  btnRaisedBgActive: lighten(colors.primary, 0.14),
  // dashed
  btnDashedBgBorderStyle: 'dashed',
  // default
  btnDefaultColor: font.textColor,
  btnDefaultHover: colors.primary,
  btnDefaultActive: lighten(colors.primary, 0.14),
  btnDefaultBg: background.componentBackground,
  btnDefaultBorder: border.borderColorBase,
  // disabled
  btnDisableColor: colors.disabled,
  btnDisableBg: background.disabledBg,
  btnDisableBorder: border.borderColorBase,
  // ghost
  btnDefaultGhostColor: font.textColor,
  btnDefaultGhostBg: 'transparent',
  btnDefaultGhostBgHover: fade(font.textColor, 0.2),
  btnDefaultGhostBgActive: fade(font.textColor, 0.16),
  btnDefaultGhostBorder: 'transparent',
  // sizes
  btnFontSizeBase: fontSizeBase,
  btnFontSizeLg: font.fontSizeLg,
  btnFontSizeSm: fontSizeBase,
  // padding
  btnPaddingHorizontalBase: padding.paddingMd - 1,
  btnPaddingHorizontalLg: padding.paddingMd - 1,
  btnPaddingHorizontalSm: padding.paddingXs - 1,
  btnPaddingVerticalSm: 0,
  btnPaddingVerticalMd: padding.paddingXss,
  btnPaddingVerticalLg: padding.paddingXss + 2,
  // height
  btnHeightBase: height.heightBase,
  btnHeightLg: height.heightLg,
  btnHeightSm: height.heightSm,
  // circle margin
  btnCircleSize: margin.heightBase,
  btnCircleSizeLg: margin.heightLg,
  btnCircleSizeSm: margin.heightSm,
  // square margin
  btnSquareSize: margin.heightBase,
  btnSquareSizeLg: margin.heightLg,
  btnSquareSizeSm: margin.heightSm,
  btnSquareOnlyIconSize: font.fontSizeBase + 2,
  btnSquareOnlyIconSizeSm: font.fontSizeBase,
  btnSquareOnlyIconSizeLg: font.fontSizeLg + 2,
  // group margin
  btnGroupBorder: colors.primaryStates.primary5,
  // hover state
  btnLinkHoverBg: 'transparent',
  btnTextHoverBg: 'rgba(0, 0, 0, 0.018)',
};

// Checkbox
const checkbox = {
  checkboxSize: 16,
  checkboxColor: colors.primary,
  checkboxCheckColor: colors.white,
  checkboxCheckBg: colors.white,
  checkboxBorderWidth: border.borderWidthBase,
  checkboxGroupItemMarginRight: 8,
};

// Descriptions
const descriptions = {
  descriptionsBg: '#fafafa',
  descriptionsTitleMarginBottom: 20,
  descriptionsDefaultPadding: `${padding.paddingMd}px ${padding.paddingLg}px`,
  descriptionsMiddlePadding: `${padding.paddingMd}px ${padding.paddingLg}px`,
  descriptionsSmallPadding: `${padding.paddingXs}px ${padding.paddingMd}px`,
  descriptionsItemPaddingBottom: padding.paddingMd,
  descriptionsItemTrailingColon: true,
  descriptionsItemLabelColonMarginRight: 8,
  descriptionsItemLabelColonMarginLeft: 2,
  descriptionsExtraColor: font.textColor,
};

// Divider
const divider = {
  dividerTextPadding: '1em',
  dividerOrientationMargin: '5%',
};

// Empty
const empty = {
  emptyFontSize: font.fontSizeBase,
};

// Radio
const radio = {
  radioSize: 16,
  radioTop: 0,
  radioDotColor: colors.primary,
  radioDotDisabledColor: fade(colors.black, 0.20),
  radioSolidCheckedColor: background.componentBackground,
};

// Radio buttons
const radioButton = {
  radioButtonBg: button.btnDefaultBg,
  radioButtonCheckedBg: button.btnDefaultBg,
  radioButtonColor: button.btnDefaultColor,
  radioButtonHoverColor: colors.primaryStates.primary5,
  radioButtonActiveColor: colors.primaryStates.primary7,
  radioDisabledButtonCheckedBg: lighten(colors.black, 0.90),
  radioDisabledButtonCheckedColor: font.textColorInverse,
  radioWrapperMarginRight: 8,
};

// Media queries breakpoints
const mediaQueries = {
  // Extra small screen / phone
  screenXs: 480,
  screenXsMin: 480,
  // Small screen / tablet
  screenSm: 576,
  screenSmMin: 576,
  // Medium screen / desktop
  screenMd: 768,
  screenMdMin: 768,
  // Large screen / wide desktop
  screenLg: 992,
  screenLgMin: 992,
  // Extra large screen / full hd
  screenXl: 1200,
  screenXlMin: 1200,
  // Extra extra large screen / large desktop
  screenXxl: 1600,
  screenXxlMin: 1600,
  // provide a maximum
  screenXsMax: (576 - 1),
  screenSmMax: (768 - 1),
  screenMdMax: (992 - 1),
  screenLgMax: (1200 - 1),
  screenXlMax: (1600 - 1),
};

// Grid system
const grid = {
  gridColumns: 24,
};

// Layout
const layout = {
  layoutBodyBackground: '#f0f2f5',
  layoutHeaderBackground: '#001529',
  layoutHeaderHeight: 64,
  layoutHeaderPadding: '0 50px',
  layoutHeaderColor: font.textColor,
  layoutFooterPadding: '24px 50px',
  layoutFooterBackground: '#f0f2f5', // same as layoutBodyBackground
  layoutSiderBackground: '#001529', // same as layoutHeaderBackground
  layoutTriggerHeight: 48,
  layoutTriggerBackground: '#002140',
  layoutTriggerColor: colors.white,
  layoutZeroTriggerWidth: 36,
  layoutZeroTriggerheight: 42,
  // Layout light theme
  layoutSiderBackgroundLight: colors.white,
  layoutTriggerBackgroundLight: colors.white,
  layoutTriggerColorLight: font.textColor,
};

// z-index list, order by `z-index`
const zIndex = {
  zIndexBadge: 'auto',
  zIndexTableFixed: 'auto',
  zIndexAffix: 10,
  zIndexBackTop: 10,
  zIndexPickerPanel: 10,
  zIndexPopupClose: 10,
  zIndexModal: 1000,
  zIndexModalMask: 1000,
  zIndexMessage: 1010,
  zIndexNotification: 1010,
  zIndexPopover: 1030,
  zIndexDropdown: 1050,
  zIndexPicker: 1050,
  zIndexPopConfirm: 1060,
  zIndexTooltip: 1070,
};

// CollapsePanel
const collapsePanel = {
  psePanelBorderRadius: border.borderRadiusBase,
};

// Dropdown
const dropdown = {
  dropdownSelectedColor: colors.primary,
  dropdownMenuSubmenuDisabledBg: background.componentBackground,
  dropdownMenuBg: background.componentBackground,
  dropdownVerticalPadding: 5,
  dropdownEdgeChildVerticalPadding: 4,
  dropdownFontSize: font.fontSizeBase,
  dropdownLineHeight: 22,
};

// Input
const input = {
  inputHeightBase: margin.heightBase,
  inputHeightLg: margin.heightLg,
  inputHeightSm: margin.heightSm,
  inputPaddingHorizontal: padding.controlPaddingHorizontal - 1,
  inputPaddingHorizontalBase: padding.controlPaddingHorizontal,
  inputPaddingHorizontalSm: padding.controlPaddingHorizontalSm - 1,
  inputPaddingHorizontalLg: padding.controlPaddingHorizontal,
  inputPaddingVerticalBase: Math.max(
    Math.round((margin.heightBase - font.fontSizeBase * font.lineHeightBase) / 2 * 10) / 10 -
      border.borderWidthBase,
    3
  ),
  inputPaddingVerticalSm: Math.max(
    Math.round((margin.heightSm - font.fontSizeBase * font.lineHeightBase) / 2 * 10) / 10 - border.borderWidthBase,
    0
  ),
  inputPaddingVerticalLg: Math.ceil((margin.heightLg - font.fontSizeLg * font.lineHeightBase) / 2 * 10) /
    10 - border.borderWidthBase,
  inputPlaceholderColor: hslToHex('hsl(0, 0%, 0.75)'),
  inputColor: font.textColor,
  inputIconColor: font.textColor, // same as inputColor
  inputBorderColor: border.borderColorBase,
  inputBg: background.componentBackground,
  inputNumberHoverBorderColor: colors.primaryStates.primary5,
  inputNumberHandlerActiveBg: '#f4f4f4',
  inputNumberHandlerHoverBg: colors.primaryStates.primary5,
  inputNumberHandlerBg: background.componentBackground,
  inputNumberHandlerBorderColor: border.borderColorBase,
  inputAddonBg: background.backgroundColorLight,
  inputHoverBorderColor: colors.primaryStates.primary5,
  inputDisabledBg: background.disabledBg,
  inputOutlineOffset: '0 0',
  inputIconHoverColor: fade(colors.black, 0.85),
  inputDisabledColor: colors.disabled,
};

// Form
const form = {
  labelRequiredColor: colors.highlight,
  labelColor: font.headingColor,
  formWarningInputBg: input.inputBg,
  formItemMarginBottom: 24,
  formItemTrailingColon: true,
  formVerticalLabelPadding: '0 0 8px',
  formVerticalLabelMargin: 0,
  formItemLabelFontSize: font.fontSizeBase,
  formItemLabelHeight: input.inputHeightBase,
  formItemLabelColonMarginRight: 8,
  formItemLabelColonMarginLeft: 2,
  formErrorInputBg: input.inputBg,
};

// Mentions
const mentions = {
  mentionsDropdownBg: background.componentBackground,
  mentionsDropdownMenuItemHoverBg: background.componentBackground,
};

// Select
const select = {
  selectBorderColor: border.borderColorBase,
  selectItemSelectedColor: font.textColor,
  selectItemSelectedFontWeight: '600',
  selectDropdownBg: background.componentBackground,
  selectItemSelectedBg: colors.primaryStates.primary1,
  selectItemActiveBg: background.itemHoverBg,
  selectDropdownVerticalPadding: dropdown.dropdownVerticalPadding,
  selectDropdownFontSize: dropdown.dropdownFontSize,
  selectDropdownLineHeight: dropdown.dropdownLineHeight,
  selectDropdownHeight: 32,
  selectBackground: background.componentBackground,
  selectClearBackground: background.componentBackground, // Same as selectBackground
  selectSelectionItemBg: background.backgroundColorBase,
  selectSelectionItemBorderColor: border.borderColorSplit,
  selectSingleItemHeightLg: 40,
  selectMultipleItemHeight: input.inputHeightBase - input.inputPaddingVerticalBase * 2, // Normal 24px
  selectMultipleItemHeightLg: 32,
  selectMultipleItemSpacingHalf: Math.ceil(input.inputPaddingVerticalBase / 2),
};

// Cascader
const cascader = {
  cascaderBg: background.componentBackground,
  cascaderItemSelectedBg: colors.primaryStates.primary1,
  cascaderMenuBg: background.componentBackground,
  cascaderMenuBorderColorSplit: border.borderColorSplit,
  cascaderDropdownVerticalPadding: dropdown.dropdownVerticalPadding,
  cascaderDropdownEdgeChildVerticalPadding: dropdown.dropdownEdgeChildVerticalPadding,
  cascaderDropdownFontSize: dropdown.dropdownFontSize,
  cascaderDropdownLineHeight: dropdown.dropdownLineHeight,
};

// Anchor
const anchor = {
  anchorBg: background.componentBackground,
  anchorBorderColor: border.borderColorSplit,
  anchorLinkTop: 7,
  anchorLinkLeft: 16,
  anchorLinkPadding: '7 0 7 16',
};

// Tooltip
const tooltip = {
  // Tooltip max width
  tooltipMaxWidth: 250,
  // Tooltip text color
  tooltipColor: colors.white,
  // Tooltip background color
  tooltipBg: 'rgba(0, 0, 0, 0.75)',
  // Tooltip arrow width
  tooltipArrowWidth: 5,
  // Tooltip distance with trigger
  tooltipDistance: 8,
  // Tooltip arrow color
  tooltipArrowColor: 'rgba(0, 0, 0, 0.75)', // same as tooltipBg
};

// Popover
const popover = {
  // Popover body background color
  popoverBg: background.componentBackground,
  // Popover text color
  popoverColor: font.textColor,
  // Popover maximum width
  popoverMinWidth: 177,
  popoverMinHeight: 32,
  // Popover arrow width
  popoverArrowWidth: 6,
  // Popover arrow color
  popoverArrowColor: background.componentBackground, // same as popoverBg
  // Popover outer arrow width
  // Popover outer arrow color
  popoverArrowOuterColor: background.componentBackground, // same as popoverBg
  // Popover distance with trigger
  popoverDistance: 6 + 4,
  popoverPaddingHorizontal: padding.paddingMd,
};

// Modal
const modal = {
  modalHeaderPaddingVertical: padding.paddingMd,
  modalHeaderPaddingHorizontal: padding.paddingLg,
  modalBodyPadding: padding.paddingLg,
  modalHeaderBg: background.componentBackground,
  modalHeaderPadding: `${padding.paddingMd}px ${padding.paddingLg}px`,
  modalHeaderBorderWidth: border.borderWidthBase,
  modalHeaderBorderStyle: border.borderStyleBase,
  modalHeaderTitleLineHeight: 22,
  modalHeaderTitleFontSize: font.fontSizeLg,
  modalHeaderBorderColorSplit: border.borderColorSplit,
  modalHeaderCloseSize: 56,
  modalContentBg: background.componentBackground,
  modalHeadingColor: font.headingColor,
  modalCloseColor: font.textColorSecondary,
  modalFooterBg: 'transparent',
  modalFooterBorderColorSplit: border.borderColorSplit,
  modalFooterBorderStyle: border.borderStyleBase,
  modalFooterPaddingVertical: 10,
  modalFooterPaddingHorizontal: 16,
  modalFooterBorderWidth: border.borderWidthBase,
  modalMaskBg: fade(colors.black, 0.45),
  modalConfirmBodyPadding: '32px 32px 24px',
};

// Progress
const progress = {
  progressDefaultColor: colors.processing,
  progressRemainingColor: background.backgroundColorBase,
  progressTextColor: font.textColor,
  progressRadius: 100,
  progressStepsItemBg: '#f3f3f3',
  progressTextFontSize: '1em',
  progressCircleTextFontSize: '1em',
};

// Menu
const menu = {
  menuInlineTopLevelItemHeight: 40,
  menuItemHeight: 40,
  menuItemGroupHeight: font.lineHeightBase,
  menuCollapsedWidth: 80,
  menuBg: background.componentBackground,
  menuPopupBg: background.componentBackground,
  menuItemColor: font.textColor,
  menuHighlightColor: colors.primary,
  menuHighlightDangerColor: colors.error,
  menuItemActiveBg: colors.primaryStates.primary1,
  menuItemActiveDangerBg: getColor('red',1),
  menuItemActiveBorderWidth: 3,
  menuItemGroupTitleColor: font.textColorSecondary,
  menuItemVerticalMargin: 4,
  menuItemFontSize: font.fontSizeBase,
  menuItemBoundaryMargin: 8,
  menuItemPadding: '0 20px',
  menuHorizontalLineHeight: 46,
  menuIconMarginRight: 10,
  menuIconSize: font.fontSizeBase, // same as menuItemFontSize
  menuIconSizeLg: font.fontSizeLg,
  menuItemGroupTitleFontSize: font.fontSizeBase, // same as menuItemFontSize
  // dark theme
  menuDarkColor: font.textColorSecondaryDark,
  menuDarkDangerColor: colors.error,
  menuDarkBg: layout.layoutHeaderBackground,
  menuDarkArrowColor: colors.white,
  menuDarkSubmenuBg: '#000c17',
  menuDarkHighlightColor: colors.white,
  menuDarkItemActiveBg: colors.primary,
  menuDarkItemActiveDangerBg: colors.error,
  menuDarkSelectedItemIconColor: colors.white,
  menuDarkSelectedItemTextColor: colors.white,
  menuDarkItemHoverBg: 'transparent',
};

// Spin
const spin = {
  spinDotSizeSm: 14,
  spinDotSize: 20,
  spinDotSizeLg: 32,
};

// Table
const table = {
  tableBg: background.componentBackground,
  tableHeaderBg: background.backgroundColorLight,
  tableHeaderColor: font.headingColor,
  tableHeaderSortBg: background.backgroundColorBase,
  tableBodySortBg: '#fafafa',
  tableRowHoverBg: background.backgroundColorLight,
  tableSelectedRowColor: 'inherit',
  tableSelectedRowBg: colors.primaryStates.primary1,
  tableBodySelectedSortBg: 'inherit', // Same as tableSelectedRowColor
  tableSelectedRowHoverBg: darken(colors.primaryStates.primary1, 0.2),
  tableExpandedRowBg: '#fbfbfb',
  tablePaddingVertical: 16,
  tablePaddingHorizontal: 16,
  tablePaddingVerticalMd: 16 * 3 / 4,
  tablePaddingHorizontalMd: 16 / 2,
  tablePaddingVerticalSm: 16 / 2,
  tablePaddingHorizontalSm: 16 / 2,
  tableBorderRadiusBase: border.borderRadiusBase,
  tableFooterBg: background.backgroundColorLight,
  tableFooterColor: font.headingColor,
  tableHeaderBgSm: background.backgroundColorLight, // same as tableHeaderBg
  tableFontSize: font.fontSizeBase,
  tableFontSizeMd: font.fontSizeBase, // same as tableFontSize
  tableFontSizeSm: font.fontSizeBase, // same as tableFontSize
  // Sorter
  // Legacy: `table-header-sort-active-bg` is used for hover not real active
  tableHeaderSortActiveBg: darken(background.backgroundColorLight, 0.3),
  // Filter
  tableHeaderFilterActiveBg: darken(background.backgroundColorLight, 0.8),
  tableFilterBtnsBg: 'inherit',
  tableFilterDropdownBg: background.componentBackground,
  tableExpandIconBg: background.componentBackground,
  tableSelectionColumnWidth: 60,
  tableSelectionExtraRight: 0,
};

// Tag
const tag = {
  tagDefaultBg: background.backgroundColorLight,
  tagDefaultColor: font.textColor,
  tagFontSize: font.fontSizeSm,
  tagLineHeight: 20,
};

// TimePicker
const picker = {
  pickerBg: background.componentBackground,
  pickerBasicCellHoverColor: background.itemHoverBg,
  pickerBasicCellActiveWithRangeColor: colors.primaryStates.primary1,
  pickerBasicCellHoverWithRangeColor: lighten(colors.primary, 0.35),
  pickerBasicCellDisabledBg: background.disabledBg,
  pickerBorderColor: border.borderColorSplit,
  pickerDateHoverRangeBorderColor: lighten(colors.primary, 0.20),
  pickerDateHoverRangeColor: lighten(colors.primary, 0.35), // same as pickerBasicCellHoverWithRangeColor
  pickerTimePanelCellHeight: 28,
  pickerPanelCellHeight: 24,
  pickerPanelCellWidth: 36,
  pickerTextHeight: 40,
  pickerPanelWithoutTimeCellHeight: 66,
};

// Calendar
const calendar = {
  calendarBg: background.componentBackground,
  calendarInputBg: input.inputBg,
  calendarBorderColor: border.borderColorInverse,
  calendarItemActiveBg: background.itemActiveBg,
  calendarFullBg: background.componentBackground, // same as calendarBg
  calendarFullPanelBg: background.componentBackground, // same as calendarFullBg
};

// Carousel
const carousel = {
  carouselDotWidth: 16,
  carouselDotHeight: 3,
  carouselDotActiveWidth: 24,
};

// Badge
const badge = {
  badgeHeight: 20,
  badgeDotSize: 6,
  badgeFontSize: font.fontSizeSm,
  badgeFontWeight: 'normal',
  badgeStatusSize: 6,
  badgeTextColor: background.componentBackground,
};

// Rate
const rate = {
  rateStarColor: getColor('yellow', 6),
  rateStarBg: border.borderColorSplit,
  rateStarSize: 20,
  rateStarHoverScale: 'scale(1.1)',
};

// Card
const card = {
  cardHeadColor: font.headingColor,
  cardHeadBackground: 'transparent',
  cardHeadFontSize: font.fontSizeLg,
  cardHeadFontSizeSm: font.fontSizeBase,
  cardHeadPadding: 16,
  cardHeadPaddingSm: 16 / 2,
  cardHeadHeight: 48,
  cardHeadHeightSm: 36,
  cardInnerHeadPadding: 12,
  cardPaddingBase: 24,
  cardPaddingBaseSm: 24 / 2,
  cardActionsBackground: background.componentBackground,
  cardActionsLiMargin: '12px 0',
  cardSkeletonBg: '#cfd8dc',
  cardBackground: background.componentBackground,
  cardShadow: `0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12),
    0 5px 12px 4px rgba(0, 0, 0, 0.09)`,
  cardRadius: border.borderRadiusBase,
  cardHeadTabsMarginBottom: -17,
  cardHeadExtraColor: font.textColor,
};

// Comment
const comment = {
  commentBg: 'inherit',
  commentPaddingBase: `${padding.paddingMd}px 0`,
  commentNestIndent: 44,
  commentFontSizeBase: font.fontSizeBase,
  commentFontSizeSm: font.fontSizeSm,
  commentAuthorNameColor: font.textColorSecondary,
  commentAuthorTimeColor: '#ccc',
  commentActionColor: font.textColorSecondary,
  commentActionHoverColor: '#595959',
  commentActionsMarginBottom: 'inherit',
  commentActionsMarginTop: margin.marginSm,
  commentContentDetailPMarginBottom: 'inherit',
};

// Tabs
const tabs = {
  tabsCardHeadBackground: background.backgroundColorLight,
  tabsCardHeight: 40,
  tabsCardActiveColor: colors.primary,
  tabsCardHorizontalPadding: `${(40 - Math.floor(font.fontSizeBase * font.lineHeightBase)) / 2 -
    border.borderWidthBase}px ${padding.paddingMd}px`,
  tabsCardHorizontalPaddingSm: `6px ${padding.paddingMd}`,
  tabsCardHorizontalPaddingLg: `7px ${padding.paddingMd} 6px`,
  tabsTitleFontSize: font.fontSizeBase,
  tabsTitleFontSizeLg: font.fontSizeLg,
  tabsTitleFontSizeSm: font.fontSizeBase,
  tabsInkBarColor: colors.primary,
  tabsBarMargin: `0 0 ${margin.marginMd}px 0`,
  tabsHorizontalMargin: '0 32px 0 0',
  tabsHorizontalMarginRtl: '0 0 0 32px',
  tabsHorizontalPadding: `${padding.paddingSm}px 0`,
  tabsHorizontalPaddingLg: `${padding.paddingMd}px 0`,
  tabsHorizontalPaddingSm: `${padding.paddingXs}px 0`,
  tabsVerticalPadding: `${padding.paddingXs}px ${padding.paddingLg}px`,
  tabsVerticalMargin: `0 0 ${padding.paddingMd}px 0`,
  tabsScrollingSize: 32,
  tabsHighlightColor: colors.primary,
  tabsHoverColor: colors.primaryStates.primary5,
  tabsActiveColor: colors.primaryStates.primary7,
  tabsCardGutter: 2,
  tabsCardTabActiveBorderTop: '2px solid transparent',
};

// BackTop
const backTop = {
  backTopColor: colors.white,
  backTopBg: font.textColorSecondary,
  backTopHoverBg: font.textColor,
};

// Avatar
const avatar = {
  avatarSizeBase: 32,
  avatarSizeLg: 40,
  avatarSizeSm: 24,
  avatarFontSizeBase: 18,
  avatarFontSizeLg: 24,
  avatarFontSizeSm: 14,
  avatarBg: '#ccc',
  avatarBorderColor: getColor('red', 6),
  avatarColor: colors.white,
  avatarBorderRadius: border.borderRadiusBase,
  avatarGroupOverlapping: -8,
  avatarGroupSpace: 3,
  avatarBorderWidth: 0,
  avatarGroupBorderColor: colors.white,
};

// Switch
const switchToggle = {
  switchHeight: 22,
  switchSmHeight: 16,
  switchMinWidth: 44,
  switchSmMinWidth: 28,
  switchDisabledOpacity: 0.4,
  switchColor: colors.primary,
  switchBg: background.componentBackground,
  switchShadowColor: fade('#00230b', 0.20),
  switchPadding: 2,
  switchInnerMarginMin: Math.ceil(22 * 0.3), // same as switchHeight * 0.3
  switchInnerMarginMax: Math.ceil(22 * 1.1), // same as switchHeight * 1.1
  switchSmInnerMarginMin: Math.ceil(16 * 0.3), // same as switchSmHeight * 0.3
  switchSmInnerMarginMax: Math.ceil(16 * 1.1), // same as switchSmHeight * 1.1
};

// Pagination
const pagination = {
  paginationItemBg: background.componentBackground,
  paginationItemSize: margin.heightBase,
  paginationItemSizeSm: 24,
  paginationFontFamily: 'Arial',
  paginationFontWeightActive: 500,
  paginationItemBgActive: background.componentBackground,
  paginationItemLinkBg: background.componentBackground,
  paginationItemDisabledColorActive: colors.white,
  paginationItemDisabledBgActive: darken(background.disabledBg, 0.10),
  paginationItemInputBg: background.componentBackground,
  paginationMiniOptionsSizeChangerTop: 0,
};

// PageHeader
const pageHeader = {
  pageHeaderPadding: padding.paddingLg,
  pageHeaderPaddingVertical: padding.paddingMd,
  pageHeaderPaddingBreadcrumb: padding.paddingSm,
  pageHeaderContentPaddingVertical: padding.paddingSm,
  pageHeaderBackColor: colors.black,
  pageHeaderGhostBg: 'inherit',
  pageHeaderHeadingTitle: font.heading4Size,
  pageHeaderHeadingSubTitle: 14,
  pageHeaderTabsTabFontSize: 16,
};

// Breadcrumb
const breadcrumb = {
  breadcrumbBaseColor: font.textColorSecondary,
  breadcrumbLastItemColor: font.textColor,
  breadcrumbFontSize: font.fontSizeBase,
  breadcrumbIconFontSize: font.fontSizeBase,
  breadcrumbLinkColor: font.textColorSecondary,
  breadcrumbLinkColorHover: colors.primaryStates.primary5,
  breadcrumbSeparatorColor: font.textColorSecondary,
  breadcrumbSeparatorMargin: `0 ${padding.paddingXs}px`,
};

// Slider
const slider = {
  sliderMargin: '10px 6px 10px',
  sliderRailBackgroundColor: background.backgroundColorBase,
  sliderRailBackgroundColorHover: '#e1e1e1',
  sliderTrackBackgroundColor: colors.primaryStates.primary3,
  sliderTrackBackgroundColorHover: colors.primaryStates.primary4,
  sliderHandleBorderWidth: 2,
  sliderHandleBackgroundColor: background.componentBackground,
  sliderHandleColor: colors.primaryStates.primary3,
  sliderHandleColorHover: colors.primaryStates.primary4,
  sliderHandleColorFocus: lighten(colors.primary, 0.20),
  sliderHandleColorFocusShadow: fade(colors.primary, 0.12),
  sliderHandleColorTooltipOpen: colors.primary,
  sliderHandleSize: 14,
  sliderHandleMarginTop: -5,
  sliderHandleShadow: 0,
  sliderDotBorderColor: border.borderColorSplit,
  sliderDotBorderColorActive: lighten(colors.primary, 0.50),
  sliderDisabledColor: colors.disabled,
  sliderDisabledBackgroundColor: background.componentBackground,
};

// Tree
const tree = {
  treeBg: background.componentBackground,
  treeTitleHeight: 24,
  treeChildPadding: 18,
  treeDirectorySelectedColor: colors.white,
  treeDirectorySelectedBg: colors.primary,
  treeNodeHoverBg: background.itemHoverBg,
  treeNodeSelectedBg: colors.primaryStates.primary2,
};

// Collapse
const collapse = {
  collapseHeaderPadding: `${padding.paddingSm}px ${padding.paddingMd}px`,
  collapseHeaderPaddingExtra: 40,
  collapseHeaderBg: background.backgroundColorLight,
  collapseContentPadding: padding.paddingMd,
  collapseContentBg: background.componentBackground,
  collapseHeaderArrowLeft: 16,
};

// Skeleton
const skeleton = {
  skeletonColor: '#f2f2f2',
  skeletonToColor: darken('#f2f2f2', 0.05),
  skeletonParagraphMarginTop: 28,
  skeletonParagraphLiMarginTop: margin.marginMd,
  skeletonParagraphLiHeight: 16,
  skeletonTitleHeight: 16,
  skeletonTitleParagraphMarginTop: margin.marginLg,
};

// Transfer
const transfer = {
  transferHeaderHeight: 40,
  transferItemHeight: margin.heightBase,
  transferDisabledBg: background.disabledBg,
  transferListHeight: 200,
  transferItemHoverBg: background.itemHoverBg,
  transferItemPaddingVertical: 6,
  transferListSearchIconTop: 12,
};

// Message
const message = {
  messageNoticeContentPadding: '10px 16px',
  messageNoticeContentBg: background.componentBackground,
};

// Motion
const motion = {
  waveAnimationWidth: 6,
};

// Alert
const alert = {
  alertSuccessBorderColor: ~`colorPalette('{success-color}', 3) `,
  alertSuccessBgColor: ~`colorPalette('{success-color}', 1) `,
  alertSuccessIconColor: colors.success,
  alertInfoBorderColor: ~`colorPalette('{info-color}', 3) `,
  alertInfoBgColor: ~`colorPalette('{info-color}', 1) `,
  alertInfoIconColor: colors.info,
  alertWarningBorderColor: ~`colorPalette('{warning-color}', 3) `,
  alertWarningBgColor: ~`colorPalette('{warning-color}', 1) `,
  alertWarningIconColor: colors.warning,
  alertErrorBorderColor: ~`colorPalette('{error-color}', 3) `,
  alertErrorBgColor: ~`colorPalette('{error-color}', 1) `,
  alertErrorIconColor: colors.error,
  alertMessageColor: colors.heading,
  alertTextColor: font.textColor,
  alertCloseColor: font.textColorSecondary,
  alertCloseHoverColor: font.iconColorHover,
  alertNoIconPaddingVertical: padding.paddingXs,
  alertWithDescriptionNoIconPaddingVertical: padding.paddingMd - 1,
  alertWithDescriptionPaddingVertical: padding.paddingMd - 1,
  alertWithDescriptionPadding: `${padding.paddingMd - 1}px 15px ${padding.paddingMd - 1}px
    ${24 * 2 + padding.paddingMd - 1}px`,
  alertIconTop: `8px + ${font.fontSizeBase * font.lineHeightBase / 2 - font.fontSizeBase / 2}px`,
  alertWithDescriptionIconSize: 24,
  alertWithDescriptionIconTop: padding.paddingMd - 1, // same as alertWithDescriptionPaddingVertical
};

// List
const list = {
  listHeaderBackground: 'transparent',
  listFooterBackground: 'transparent',
  listEmptyTextPadding: padding.paddingMd,
  listItemPadding: `${padding.paddingSm}px 0`,
  listItemPaddingSm: `${padding.paddingXs}px ${padding.paddingMd}px`,
  listItemPaddingLg: '16px 24px',
  listItemMetaMarginBottom: padding.paddingMd,
  listItemMetaAvatarMarginRight: padding.paddingMd,
  listItemMetaTitleMarginBottom: padding.paddingSm,
  listCustomizeCardBg: background.componentBackground,
  listItemMetaDescriptionFontSize: font.fontSizeBase,
};

// Statistic
const statistic = {
  statisticTitleFontSize: font.fontSizeBase,
  statisticContentFontSize: 24,
  statisticUnitFontSize: 16,
  statisticFontFamily: font.fontFamily,
};

// Drawer
const drawer = {
  drawerHeaderPadding: `${padding.paddingMd}px ${padding.paddingLg}px`,
  drawerBodyPadding: padding.paddingLg,
  drawerBg: background.componentBackground,
  drawerFooterPaddingVertical: modal.modalFooterPaddingVertical,
  drawerFooterPaddingHorizontal: modal.modalFooterPaddingHorizontal,
  drawerHeaderCloseSize: 56,
};

// Timeline
const timeline = {
  timelineWidth: 2,
  timelineColor: border.borderColorSplit,
  timelineDotBorderWidth: 2,
  timelineDotColor: colors.primary,
  timelineDotBg: background.componentBackground,
  timelineItemPaddingBottom: 20,
};

// Upload
const upload = {
  uploadActionsColor: font.textColorSecondary,
};

// Steps
const steps = {
  processTailColor: border.borderColorSplit,
  stepsNavArrowColor: fade(colors.black, 0.25),
  stepsBackground: background.componentBackground,
  stepsIconSize: 32,
  stepsIconCustomSize: 32, // same as stepsIconSize
  stepsIconCustomTop: 0,
  stepsIconCustomFontSize: 24,
  stepsIconTop: -1,
  stepsIconFontSize: font.fontSizeLg,
  stepsIconMargin: '0 8px 0 0',
  stepsTitleLineHeight: margin.heightBase,
  stepsSmallIconSize: 24,
  stepsSmallIconMargin: '0 8px 0 0',
  stepsDotSize: 8,
  stepsDotTop: 2,
  stepsCurrentDotSize: 10,
  stepsDescriptionMaxWidth: 140,
  stepsNavContentMaxWidth: 'auto',
  stepsVerticalIconWidth: 16,
  stepsVerticalTailWidth: 16,
  stepsVerticalTailWidthSm: 12,
};

// Notification
const notification = {
  notificationBg: background.componentBackground,
  notificationPaddingVertical: 16,
  notificationPaddingHorizontal: 24,
};

//  Result
const result = {
  resultTitleFontSize: 24,
  resultSubtitleFontSize: font.fontSizeBase,
  resultIconFontSize: 72,
  resultExtraMargin: '24px 0 0 0',
};

// Image
const image = {
  imageSizeBase: 48,
  imageFontSizeBase: 24,
  imageBg: '#ccc',
  imageColor: colors.white,
};

const defaults = {
  colors,
  background,
  border,
  outline,
  font,
  padding,
  margin,
  link,
  animation,
  shadow,
  button,
  checkbox,
  descriptions,
  divider,
  empty,
  radio,
  radioButton,
  mediaQueries,
  grid,
  layout,
  zIndex,
  collapsePanel,
  dropdown,
  input,
  form,
  mentions,
  select,
  cascader,
  anchor,
  tooltip,
  popover,
  modal,
  progress,
  menu,
  spin,
  table,
  tag,
  picker,
  calendar,
  carousel,
  badge,
  rate,
  card,
  comment,
  tabs,
  backTop,
  avatar,
  switchToggle,
  pagination,
  pageHeader,
  breadcrumb,
  slider,
  tree,
  collapse,
  skeleton,
  transfer,
  message,
  motion,
  alert,
  list,
  statistic,
  drawer,
  timeline,
  typography,
  upload,
  steps,
  notification,
  result,
  image
};

export default defaults;
