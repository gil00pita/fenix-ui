import InternalAffix, { AffixProps } from './Affix';

export { AffixProps, AffixState } from './Affix';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<AffixProps & React.RefAttributes<HTMLElement>> {
}

const Affix = InternalAffix as CompoundedComponent;

export default Affix;
