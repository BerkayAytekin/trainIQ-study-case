import { useState } from "react";
import "./skillsInDevelopment.css";
import { useBackendData } from "../../context/Context";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function SkillsInDevelopment() {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
  const data = useBackendData();
  return (
    <div className="skillsInDevelopment">
      <div className="skillsInDevelopmentHeader" onClick={handleInfo}>
        <p>Skills In Development</p>
        <img src={showInfo ? "./minus.png" : "./plus.png"} alt="img" />
      </div>
      {showInfo && (
        <div className="skillsInDevelopmentInfo">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>EMPLOYEES</Th>
                  <Th>SKILLS</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.data.skills_in_development.map((item, index) => (
                  <Tr key={index}>
                    {Object.values(item).map((itm, index) => (
                      <Td key={index}>{itm}</Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
}

export default SkillsInDevelopment;
