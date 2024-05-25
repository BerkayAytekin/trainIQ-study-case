import { useState } from "react";
import "./topEmployees.css";
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

function TopEmployees() {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
  const data = useBackendData();
  return (
    <div className="topEmployees">
      <div className="topEmployeesHeader" onClick={handleInfo}>
        <p>Top Employees</p>
        <img src={showInfo ? "./minus.png" : "./plus.png"} alt="img" />
      </div>
      {showInfo && (
        <div className="topEmployeesInfo">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>CURRENT SCORE</Th>
                  <Th>E-MAIL</Th>
                  <Th>NAME</Th>
                  <Th>TITLE</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.data.top_employees.map((item, index) => (
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
export default TopEmployees;
