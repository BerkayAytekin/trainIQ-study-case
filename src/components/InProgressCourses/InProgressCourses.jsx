import { useState } from "react";
import "./inProgressCourses.css";
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

function InProgressCourses() {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
  const data = useBackendData();
  return (
    <div className="progressCourses">
      <div className="progressCoursesHeader" onClick={handleInfo}>
        <p>In Progress Courses</p>
        <img src={showInfo ? "./minus.png" : "./plus.png"} alt="img" />
      </div>
      {showInfo && (
        <div className="progressCoursesInfo">
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ASSIGNED TO</Th>
                  <Th>DESCRIPTION</Th>
                  <Th>DUE DATE</Th>
                  <Th>STATUS</Th>
                  <Th>TITLE</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.data.in_progress_courses.map((item, index) => (
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

export default InProgressCourses;
