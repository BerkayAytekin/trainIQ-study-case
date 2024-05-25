import { useState } from "react";
import "./topSkills.css";
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

function TopSkills() {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
  const data = useBackendData();
  return (
    <div className="topSkills">
      <div className="topSkillsHeader" onClick={handleInfo}>
        <p>Top Skills</p>
        <img src={showInfo ? "./minus.png" : "./plus.png"} alt="img" />
      </div>
      {showInfo && (
        <div className="topSkillsInfo">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>EMPLOYEES</Th>
                  <Th>SKILLS</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.data.top_skills.map((item, index) => (
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

export default TopSkills;
