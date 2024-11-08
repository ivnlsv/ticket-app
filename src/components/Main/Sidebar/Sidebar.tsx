//import s from "./Sidebar.module.scss";
import arrow from "../../../assets/icons/icon-arrow.svg";
import { useState } from "react";
import { Filters } from "./Filters/Filters";
import { Input } from "./Input/Input";
import { useAppSelector } from "../../../feature/store";
import { FILTERS_TYPES } from "../../../models/config";
import {
  SettingsBlock,
  SettingsHeader,
  SettingsTitle,
  SidebarBlock,
  SidebarFilters,
} from "./Sidebar.styled";

export const Sidebar = () => {
  const { filters } = useAppSelector((state) => state.tickets);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const filtersCheck = (filterType: "airlines" | "connections") => {
    let activeFilters = FILTERS_TYPES[filterType] as (string | number)[];

    filters[filterType].map(
      (filter) =>
        (activeFilters = activeFilters.filter(
          (activeFilter) => activeFilter !== filter
        ))
    );

    if (filters[filterType].length) {
      return filterType === "airlines"
        ? `Авиакомпании: ${activeFilters.join(", ")}`
        : `Пересадок: ${activeFilters.join(", ")}`;
    }

    return filterType === "airlines"
      ? "Любая авиакомпания"
      : "Любое кол-во пересадок";
  };

  return (
    <SidebarBlock isOpen={isOpen}>
      <SettingsHeader>
        <div>
          {filtersCheck("airlines")}, {filtersCheck("connections")}
        </div>
        <SettingsBlock onClick={() => setIsOpen(!isOpen)}>
          <SettingsTitle>Открыть настройки</SettingsTitle>
          <div>
            <img src={arrow} width={20} height={12} alt="arrow" />
          </div>
        </SettingsBlock>
      </SettingsHeader>

      <SidebarFilters>
        <Filters title="Количество пересадок">
          <Input
            type="checkbox"
            name="connections"
            id="no-connections"
            value="0"
          >
            Без пересадок
          </Input>
          <Input type="checkbox" name="connections" id="1-connection" value="1">
            1 пересадка
          </Input>
          <Input type="checkbox" name="connections" id="2-connection" value="2">
            2 пересадки
          </Input>
          <Input type="checkbox" name="connections" id="3-connection" value="3">
            3 пересадки
          </Input>
        </Filters>
        <Filters title="Компании">
          <Input type="radio" name="airlines" id="pobeda" value="pobeda">
            Победа
          </Input>
          <Input type="radio" name="airlines" id="redwings" value="redwings">
            Red Wings
          </Input>
          <Input type="radio" name="airlines" id="s7air" value="s7air">
            S7 Airlines
          </Input>
        </Filters>
      </SidebarFilters>
    </SidebarBlock>
  );
};
