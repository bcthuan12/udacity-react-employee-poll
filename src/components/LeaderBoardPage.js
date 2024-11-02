import { connect, useSelector } from "react-redux";
import TopBar from "./TopBar";
import { Container, Image, Row, Stack, Table } from "react-bootstrap";

const LeaderBoardPage = () => {
  const users = Object.values(useSelector((state) => state.users)).sort(
    (a, b) => Object.keys(b.answers).length - Object.keys(a.answers).length,
  );
  return (
    <div>
      <TopBar />
      <Container className="mt-5">
        <Table
          bordered
          hover
          className="table table-bordered border-success border-opacity-25"
        >
          <thead>
            <tr>
              <th>
                <h3>Users</h3>
              </th>
              <th>
                <h3>Answered</h3>
              </th>
              <th>
                <h3>Created</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>
                  <div>
                    <Stack direction={"horizontal"} gap={4}>
                      <Image src={u?.image} style={{ width: 50 }} />
                      <Stack direction={"vertical"} gap={1}>
                        <h5>{u.name}</h5>
                        <h6>{u.id}</h6>
                      </Stack>
                    </Stack>
                  </div>
                </td>
                <td>{Object.keys(u.answers).length}</td>
                <td>{Object.keys(u.questions).length}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default LeaderBoardPage;
