import React, { useState } from "react";
import styled from "styled-components";
import { SkillRadioSelection } from "./SkillRadioSelection";

const SkillName = styled.span`
  width: 90px;
  display: inline-block;
  text-align: left;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SkillSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  border: 3px solid red;
  font-size: 0.9rem;
  height: 100%;
`;

const SkillSelect = styled.select`
  margin-right: 8px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #0070f3;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0061d1;
  }

  margin-top: auto;
`;

const RemoveButton = styled(Button)`
  padding: 4px 8px;
  font-size: 12px;
  margin-right: 8px;
`;

const SkillSelection = ({ skills, onSkillAdd }) => {
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLevel, setSelectedLevel] = useState(1);

  const handleResetSkillSelection = () => {
    setSelectedSkill("");
    setSelectedLevel(1);
  };

  const handleSkillAdd = (event) => {
    event.preventDefault();
    if (selectedSkill) {
      onSkillAdd({ name: selectedSkill, level: selectedLevel });
      handleResetSkillSelection();
    }
  };

  return (
    <Container>
      <SkillSelectContainer>
        <SkillSelect
          value={selectedSkill}
          onChange={(event) => setSelectedSkill(event.target.value)}
        >
          <option value="">-- Wähle eine Fähigkeit aus --</option>
          {skills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </SkillSelect>
        <SkillRadioSelection
          onSkillLevelChange={setSelectedLevel}
          skillLevel={selectedLevel}
        />
        <Button onClick={handleSkillAdd}>Hinzufügen</Button>
      </SkillSelectContainer>
    </Container>
  );
};

export default SkillSelection;