import React, { useState } from 'react';
import { FormBuilder } from '@formio/react';
import { useNavigate, useLocation } from "react-router-dom";
import { Header, Button, Container } from '../FormViewer/styled';

const redirectPath = "/FormViewer"

export function FormBuilderComponent() {
  const location = useLocation();
  const navigate = useNavigate();
  let formSchema = {};

  // If formSchema is passed in via location.state, use it
  if (location.state && location.state.formSchema) {
    formSchema = location.state.formSchema;
  }

  // Save Button Action
  const handleSave = () => {
    console.log("Saving form...");
    navigate(redirectPath, { state: { formSchema: jsonSchema } });
  };

  // Form Builder & JSON Schema
  const [jsonSchema, setSchema] = useState(formSchema);
  const onFormChange = (schema) => {
    setSchema({...schema, components: [...schema.components]});
  };

  return (
    <Container>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.form.io/formiojs/formio.full.min.css" />
      <script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>

      
      <Header>
        <h1>Form Builder</h1>
        <Button onClick={handleSave}>Save Form</Button>
      </Header>

      <br/>
      <FormBuilder form={jsonSchema} onChange={onFormChange}/>
      {/* <br/><br/>
      <h1>JSON</h1>
      <pre>{JSON.stringify(jsonSchema, null, 4)}</pre> */}
    </Container>
  );
}
