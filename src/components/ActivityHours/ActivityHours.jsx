import { useState } from "react";
import "./activityHours.css";
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

function ActivityHours() {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
  const data = useBackendData();
  return (
    <div className="activityHours">
      <div className="activityHeader" onClick={handleInfo}>
        <p>Activity Hours</p>
        <img src={showInfo ? "./minus.png" : "./plus.png"} alt="img" />
      </div>
      {showInfo && (
        <div>
          <div>
            <ul>
              <li>
                <b>Total Emplooyes:</b> {data.data.total_employees}
              </li>
              <li>
                <b>Total Compolated Courses:</b>
                {data.data.total_completed_courses}
              </li>
              <li>
                <b>Average Employee Score:</b>
                {data.data.average_employee_score}
              </li>
            </ul>
          </div>
          <div className="activityInfo">
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>DATE</Th>
                    <Th>EXAMS COMPLETED</Th>
                    <Th>HOURS</Th>
                    <Th>LESSONS TAKEN</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.data.activity_hours.map((item, index) => (
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
        </div>
      )}
    </div>
  );
}

export default ActivityHours;
