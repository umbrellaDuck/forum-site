import cn from 'clsx';
import Image from 'next/image';
import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
  useController,
} from 'react-hook-form';
import xCircleIcon from '../../../public/x-circle.svg';
import checkIcon from '../../../public/check.svg';

export interface TControl<T extends FieldValues>
  extends React.ComponentPropsWithoutRef<'input'> {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}
const rootClass =
  'rounded-[5px] border-borderGrayColor border placeholder-placeHolderTextColor placeholder:text-sm h-[42px] px-4 w-full placeholder:text-buttonGrayColor placeholder:font-light';

const TextInput = <T extends FieldValues>({
  control,
  name,
  rules,
  className,
  ...rest
}: TControl<T>) => {
  const rootClassName = cn(rootClass, className, {});
  const {
    field,
    fieldState: { invalid },
  } = useController({ name, rules, control });

  const val = field.value;
  const labelField = name[0].toUpperCase() + name.slice(1);

  return (
    <div className='relative'>
      <label
        htmlFor='register-password'
        className='text-base mb-2 inline-block'
      >
        {labelField}
      </label>
      <input className={rootClassName} {...rest} {...field} />
      {val && (
        <Image
          alt='status-icon'
          src={invalid ? xCircleIcon : checkIcon}
          className='absolute right-4 bottom-[14px]'
        />
      )}
    </div>
  );
};

export default TextInput;
