import React, { useState, useContext } from "react";
import { Form } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";

const Filters = () => {
  const {
    globalGender,
    setGlobalGender,
    globalMethods,
    modifyMethod,
  } = useContext(GlobalContext);

  const [gender, setGender] = useState("all");
  const [methods, setMethods] = useState([]);

  const handleGender = (e) => {
    setGender(e.target.value);
    setGlobalGender(e.target.value);
  };

  const handleMethod = (e) => {
    modifyMethod(e.target.value);
  };

  return (
    <div className="ml-md-5">
      <p className="custom-bold mb-2">Filter by gender</p>
      <Form.Group controlId="gender" className="filters" value="male">
        <Form.Check
          type="radio"
          name="gender"
          value="all"
          label="All"
          checked={globalGender === "all"}
          onChange={(e) => handleGender(e)}
        ></Form.Check>
        <Form.Check
          type="radio"
          name="gender"
          value="female"
          label="Female"
          checked={globalGender === "female"}
          onChange={(e) => handleGender(e)}
        ></Form.Check>
        <Form.Check
          type="radio"
          name="gender"
          value="male"
          label="Male"
          checked={globalGender === "male"}
          onChange={(e) => handleGender(e)}
        ></Form.Check>
        <Form.Check
          type="radio"
          name="gender"
          value="prefer to skip"
          label="Prefer to skip"
          checked={globalGender === "prefer to skip"}
          onChange={(e) => handleGender(e)}
        ></Form.Check>
      </Form.Group>

      <p className="custom-bold mb-2">Filter by payment method</p>
      <Form.Group controlId="paymentMethod" className="filters">
        <Form.Check
          type="checkbox"
          name="money order"
          value="money order"
          label="Money order"
          checked={globalMethods.includes("money order")}
          onChange={(e) => handleMethod(e)}
        ></Form.Check>
        <Form.Check
          type="checkbox"
          name="check"
          value="check"
          label="Check"
          checked={globalMethods.includes("check")}
          onChange={(e) => handleMethod(e)}
        ></Form.Check>
        <Form.Check
          type="checkbox"
          name="CC"
          value="cc"
          label="CC"
          checked={globalMethods.includes("cc")}
          onChange={(e) => handleMethod(e)}
        ></Form.Check>
        <Form.Check
          type="checkbox"
          name="paypal"
          value="paypal"
          label="Paypal"
          checked={globalMethods.includes("paypal")}
          onChange={(e) => handleMethod(e)}
        ></Form.Check>
      </Form.Group>
    </div>
  );
};

export default Filters;
