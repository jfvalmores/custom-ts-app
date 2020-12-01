/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useState, useEffect } from 'react';

type FormElement = Element | any;
type SubmitCallback = (submit: any) => void;

const useForm = (initialData = {}) => {
  const [mKeys, setKeys] = useState<Object>(initialData);
  const mFormRef = useRef<HTMLElement>();

  useEffect(() => {
    setKeys(initialData);
  }, []);

  const handleChange = (id: string, value: object | string) => {
    if (id === 'MULTIPLE' && typeof value === 'object') {
      setKeys({
        ...mKeys,
        ...value,
      });
    } else {
      setKeys({
        ...mKeys,
        [id]: value,
      });
    }
  };

  const getElementById = (id: string, prefix: string = '#') => {
    if (mFormRef && mFormRef.current) {
      const element = mFormRef.current.querySelector(`${prefix}${id}`);
      if (element) return element;
    }

    return null;
  };

  const focus = (fieldId: string) => {
    const element: FormElement = getElementById(fieldId);
    if (!element) return;
    element.focus();
  };

  const unFocus = (fieldId: string) => {
    const element: FormElement = getElementById(fieldId);
    if (!element) return;
    element.blur();
  };

  const handleSubmit = (submitForm: SubmitCallback) => (e: FormElement) => {
    if (e) e.preventDefault();
    if (submitForm) submitForm(mKeys);
  };

  const resetForm = () => {
    setKeys({ ...initialData });
  };

  return {
    mKeys,
    focus,
    unFocus,
    setKeys,
    mFormRef,
    resetForm,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
