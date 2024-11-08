import icon from "../../../../assets/icons/icon-arrow.svg";
//import { AirCompanies } from "../../Sidebar/Filters/AirCompanies/AirLines";
//import { Connections } from "../../Sidebar/Filters/Connections/Connections";
//import { Filters } from "../../Sidebar/Filters/Filters";
import {
  FilterBlock,
  FilterBox,
  FilterHeader,
  FilterSettingsBlock,
  FilterVisibleBlock,
} from "./FilterSettings.styled";
import { useState } from "react";

export const FilterSettings = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  return (
    <FilterBox>
      <FilterBlock>
        <FilterHeader>
          <span>Любая авиакомпания, любое кол-во пересадок</span>
          <FilterSettingsBlock
            onClick={() => setIsFilterVisible(!isFilterVisible)}
          >
            <span>Открыть настройки</span>
            <img src={icon} alt="icon" />
          </FilterSettingsBlock>
        </FilterHeader>
        {isFilterVisible && <FilterVisibleBlock>Мшышиду</FilterVisibleBlock>}
      </FilterBlock>
    </FilterBox>
  );
};
