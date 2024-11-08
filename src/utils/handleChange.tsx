import { addFilters, removeFilters } from "../feature/slices";
import { useAppDispatch } from "../store";

export const Change = () => {
  const dispatch = useAppDispatch();
  //const [Checked, setChecked] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const payload = {
      value: e.target.value,
    };

    if (e.target.checked) {
      dispatch(removeFilters(payload));
      return;
    }

    dispatch(addFilters(payload));
  };
  return handleChange;
};
