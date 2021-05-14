import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MODAL__CHANGE, USER_NAME } from "../redux/types";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Dashboard } from "../Pages/Dashboard";
import { useState } from "react";

function ModalPage() {
  const state = useSelector((state) => state.modal);
  const [input, setInput] = useState({
    name:"",
    email:"",
    pledge:"",
    pledge1:"",
  })
  

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    console.log(input);
    dispatch({ type: MODAL__CHANGE, payload: false });
    dispatch({type:USER_NAME, payload: input})
  };

  console.log("state", state);
  const changeHandler = (event) => {
    console.log(event.target.checked);
    setInput({
      ...input,
      [event.target.name]: event.target.value || event.target.checked,
    });
  }

  return (
    <>
      <Modal
        show={state}
        onHide={() => dispatch({ type: MODAL__CHANGE, payload: false })}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div className="container p-4">
          <Form className="container p-4">
          <Form.Group controlId="formBasicPassword">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="name" name="name" onChange={changeHandler}  value={input.name}  />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" onChange={changeHandler} value={input.email} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" onChange={changeHandler} name="pledge"  value={input.pledge} label=" Yes, I pledge to protect women's rights and strive for gender equality as I believe in inclusion, equality and non-discrimination." />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" onChange={changeHandler} name="pledge1" value={input.pledge1} label=" Yes, I want to participate in the #IStandForGenderEquality challenge. More information will be sent to your email." />
            </Form.Group>
            

            <Link to="/users">
              <Button variant="primary" type="button" onClick={handleSubmit}>
                Submit
              </Button>
            </Link>


            <Button className="m-4" onClick={() => dispatch({ type: MODAL__CHANGE, payload: false })}>Cancel</Button>
            
          </Form>
        </div>
      </Modal>
      <Router>
        <Switch>
          <Route path="/users">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default ModalPage;
