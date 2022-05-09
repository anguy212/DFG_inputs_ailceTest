import { BasicInput } from "./testComponents/BasicInput";
import { DropDownInput, Test } from "./testComponents/DropDownInput";
import styled from "styled-components";
import { useState } from "react";

const TestFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 50px;
  background-color: pink;
`

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
  });

  const [dropDownValues, setDropDownValues] = useState({
    color: "",
    shape: "",
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      Type: "text",
      PlaceHolder: "Username",
      ErrorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      LabelText: "Username",
      Pattern: "^[A-Za-z0-9]{3,16}$",
      Required: true,
    },
    {
      id: 2,
      name: "email",
      Type: "email",
      PlaceHolder: "Email",
      ErrorMessage: "It should be a valid email address!",
      LabelText: "Email",
      Pattern: "^[A-Za-z0-9]*@[A-Za-z0-9]*.com",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      Type: "date",
      PlaceHolder: "Birthday",
      LabelText: "Birthday",
    },
    {
      id: 4,
      name: "password",
      Type: "password",
      PlaceHolder: "Password",
      ErrorMessage: "Password needs one special character",
      LabelText: "Password",
      required: true,
    },
  ];

  const inputs2 = [
    {
      name: "color",
      LabelText: "Color",
      Options: ["Red", "Blue", "Green"],
      PlaceHolder: "Pick a Color"
    },
    {
      name: "shape",
      Label: "Shape",
      Options: ["Circle", "Square", "Triangle"],
      PlaceHolder: "Pick a Shape"
    }
  ]

  const onDropChange = (n, value) => {
    setDropDownValues({...dropDownValues, [n]: value});
  }

  const onChange = (e) => {
    //console.log(e.target)
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  //console.log(values)
  //console.log(dropDownValues)
  return (
    <TestFormDiv>
      {inputs.map((input, key) => (
        //{console.log(input)}
        <BasicInput key ={key} {...input} OnChange = {onChange} value = {values[input.name]}/>
        //<Test key={key} {...input}></Test>
      ))}
      {inputs2.map((input, key) => (
        <DropDownInput key = {key} {...input} OnChange = {onDropChange} value = {dropDownValues[input.name]}/>
      ))}
    </TestFormDiv>
  );
}

export default App;
