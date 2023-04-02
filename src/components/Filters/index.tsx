import { CharacterContext } from "@/context/CharacterContext";
import { useContext, useState } from "react";
import {
  DropdownButton,
  DropdownContent,
  DropdownItem,
  DropdownWrapper,
} from "../../styles/filters";

export default function Filters() {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isOpenGender, setIsOpenGender] = useState(false);

  const { getCharacterByStatus, getCharacterByGender } =
    useContext(CharacterContext);

  function handleOpenStatus(status: string) {
    getCharacterByStatus(status);
    setIsOpenStatus(false);
  }

  function handleOpenGender(gender: string) {
    getCharacterByGender(gender);
    setIsOpenGender(false);
  }

  return (
    <DropdownWrapper>
      <DropdownButton onClick={() => setIsOpenStatus(!isOpenStatus)}>
        Filter Status
      </DropdownButton>
      {isOpenStatus && (
        <DropdownContent onMouseLeave={() => setIsOpenStatus(false)}>
          <DropdownItem onClick={() => handleOpenStatus("alive")}>
            Alive
          </DropdownItem>
          <DropdownItem onClick={() => handleOpenStatus("dead")}>
            Dead
          </DropdownItem>
          <DropdownItem onClick={() => handleOpenStatus("unknown")}>
            Unknown
          </DropdownItem>
        </DropdownContent>
      )}
      <DropdownButton onClick={() => setIsOpenGender(!isOpenGender)}>
        Filter Genders
      </DropdownButton>
      {isOpenGender && (
        <DropdownContent onMouseLeave={() => setIsOpenGender(false)}>
          <DropdownItem onClick={() => handleOpenGender("female")}>
            Female
          </DropdownItem>
          <DropdownItem onClick={() => handleOpenGender("male")}>
            Male
          </DropdownItem>
          <DropdownItem onClick={() => handleOpenGender("genderless")}>
            Fenderless
          </DropdownItem>
          <DropdownItem onClick={() => handleOpenGender("unknown")}>
            Unknown
          </DropdownItem>
        </DropdownContent>
      )}
    </DropdownWrapper>
  );
}
