import { useAppSelector } from "../store/hooks";
import { IFormType } from "../form/formType";

type InfoGetter<T> = (data: IFormType) => T;

const useDataFiller = <T>(getInfo: InfoGetter<T>) => {
  const data = useAppSelector((state) => {
    if (state.form.onDemo) {
      return getInfo(state.form.placeholderData);
    } else {
      return getInfo(state.form.userData || state.form.placeholderData);
    }
  });

  return data;
};

export default useDataFiller;
