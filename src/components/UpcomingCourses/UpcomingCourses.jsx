import { useState } from "react";
import "./upcomingCourses.css";
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

function UpcomingCourses() {
  const [showInfo, setShowInfo] = useState(false);
  const handleInfo = () => {
    setShowInfo(!showInfo);
  };
  const data = useBackendData();
  return (
    <div className="upcomingCourses">
      <div className="upcomingCoursesHeader" onClick={handleInfo}>
        <p>Upcoming Courses</p>
        <img src={showInfo ? "./minus.png" : "./plus.png"} alt="img" />
      </div>
      {showInfo && (
        <div className="upcomingCoursesInfo">
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
                {data.data.upcoming_courses.map((item, index) => (
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

export default UpcomingCourses;
