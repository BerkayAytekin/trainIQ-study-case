import { useState } from "react";
import "./teams.css";
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

function Teams() {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
  const data = useBackendData();
  const deneme = (itm) => {
    if (Array.isArray(itm)) {
      return itm.map((elma, index) => (
        <ul>
          <li key={index}>{elma}</li>
        </ul>
      ));
    } else {
      return itm;
    }
  };

  return (
    <div className="teams">
      <div className="teamsHeader" onClick={handleInfo}>
        <p>Teams</p>
        <img src={showInfo ? "./minus.png" : "./plus.png"} alt="img" />
      </div>
      {showInfo && (
        <div className="infoContainer">
          <div className="teamsInfo">
            <button className="newTeam">Create New Team</button>
            {data.data.teams.map((item, index) => (
              <TableContainer key={index}>
                <div className="tableHeader">
                  <h2>Team: {index + 1}</h2>
                  <button className="newEmployee">Add New Employee</button>
                </div>
                <h3>{item.description}</h3>
                <ul>
                  <li>
                    <b>Overall Score:</b> {item.overall_score}
                  </li>
                  <li>
                    <b>Title:</b> {item.title}
                  </li>
                  <li>
                    <b>Total Employee Count:</b> {item.total_employee_count}
                  </li>
                </ul>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>CURRENT SCORE</Th>
                      <Th>E-MAIL</Th>
                      <Th>LESSONS TAKEN</Th>
                      <Th>NAME</Th>
                      <Th>SKILLS BEING DEVELOPED</Th>
                      <Th>TITLE</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {item.employees.map((item, index) => (
                      <Tr key={index}>
                        {Object.values(item).map((itm, index) => (
                          <Td key={index}>{deneme(itm)}</Td>
                        ))}
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Teams;
