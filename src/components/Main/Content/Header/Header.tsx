import { HeaderBlock, HeaderItem } from "./Header.styled";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
//import { useAppSelector } from "../../../../store";
import {
  sortByDuration,
  sortByOptimal,
  sortByPrice,
} from "../../../../feature/slices";

export const Header = () => {
  //const tickets = useAppSelector((state) => state.tickets);

  const [isDisabled, setIsDisabled] = useState([true, false, false]);
  const dispatch = useDispatch();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      switch (e.currentTarget.name) {
        case "cheapest":
          dispatch(sortByPrice());
          setIsDisabled([true, false, false]);
          break;
        case "fastest":
          dispatch(sortByDuration());
          setIsDisabled([false, true, false]);
          break;
        default:
          dispatch(sortByOptimal());
          setIsDisabled([false, false, true]);
          break;
      }
    },
    [dispatch]
  );

  return (
    <HeaderBlock>
      <HeaderItem
        disabled={isDisabled[0]}
        onClick={(e) => handleClick(e)}
        name="cheapest"
      >
        Самый дешевый
      </HeaderItem>
      <HeaderItem
        disabled={isDisabled[1]}
        onClick={(e) => handleClick(e)}
        name="fastest"
      >
        Самый быстрый
      </HeaderItem>
      <HeaderItem
        disabled={isDisabled[2]}
        onClick={(e) => handleClick(e)}
        name="optimal"
      >
        Самый оптимальный
      </HeaderItem>
    </HeaderBlock>
  );
};
