import React from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AdminDashboardLinks from "../../components/admin/AdminDashboardLinks";
const deleteHandler = () => {
  if (window.confirm("are you sure")) alert("user deleted!!");
};
const AdminUserDetails = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <AdminDashboardLinks />
        </Col>
        <Col md={9}>
          <Row className="border-3 !border-[#436850] my-3 p-3 rounded-3xl">
            <Col md={12}>
              <h1 className="font-semibold text-2xl mb-2">
                Users connected with Vedavibe
              </h1>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Is Admin</th>
                    <th>Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>test1@gmail.com</td>
                    <td>
                      <i className="bi bi-check-lg text-success"></i>
                    </td>
                    <td>
                      <LinkContainer to="/admin/edit-user">
                        <Button className="btn-sm">
                          <i class="bi bi-pencil-square"></i>
                        </Button>
                      </LinkContainer>
                      {" / "}
                      <Button
                        className="btn-sm"
                        variant="danger"
                        onClick={deleteHandler}
                      >
                        <i class="bi bi-archive-fill"></i>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>test2@gmail.com</td>
                    <td>
                      <i className="bi bi-x-lg text-danger"></i>
                    </td>

                    <td>
                      <LinkContainer to="/admin/edit-user">
                        <Button className="btn-sm">
                          <i class="bi bi-pencil-square"></i>
                        </Button>
                      </LinkContainer>
                      {" / "}
                      <Button
                        className="btn-sm"
                        variant="danger"
                        onClick={deleteHandler}
                      >
                        <i class="bi bi-archive-fill"></i>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry </td>
                    <td>the Bird</td>
                    <td>test3@gmail.com</td>
                    <td>
                      <i className="bi bi-check-lg text-success"></i>
                    </td>

                    <td>
                      <LinkContainer to="/admin/edit-user">
                        <Button className="btn-sm">
                          <i class="bi bi-pencil-square"></i>
                        </Button>
                      </LinkContainer>
                      {" / "}
                      <Button
                        className="btn-sm"
                        variant="danger"
                        onClick={deleteHandler}
                      >
                        <i class="bi bi-archive-fill"></i>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Jack</td>
                    <td>smith</td>
                    <td>test4@gmail.com</td>
                    <td>
                      <i className="bi bi-x-lg text-danger"></i>
                    </td>

                    <td>
                      <LinkContainer to="/admin/edit-user">
                        <Button className="btn-sm">
                          <i class="bi bi-pencil-square"></i>
                        </Button>
                      </LinkContainer>
                      {" / "}
                      <Button
                        className="btn-sm"
                        variant="danger"
                        onClick={deleteHandler}
                      >
                        <i class="bi bi-archive-fill"></i>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUserDetails;
