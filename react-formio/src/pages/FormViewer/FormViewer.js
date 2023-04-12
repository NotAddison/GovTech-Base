import { React, useState, useEffect } from 'react';
import { Form, Templates, Formio } from '@formio/react';
import { useNavigate, useLocation } from 'react-router-dom';

import { Header, Button, Container } from './styled';

// Default Base Form Schema (if no formSchema is passed in via location.state)
const DEFAULT_FORM_SCHEMA = {
  "display": "form",
  "components": [
    {
      "label": "Text Field",
      "applyMaskOn": "change",
      "tableView": true,
      "key": "textField",
      "type": "textfield",
      "input": true
    },
    {
      "label": "Submit",
      "action": "url",
      "showValidations": false,
      "disableOnInvalid": true,
      "tableView": false,
      "key": "submit",
      "type": "button",
      "url": "URL_HERE",
      "headers": [
        {
          "header": "Authorization",
          "value": "Bearer"
        }
      ],
      "input": true
    }
  ]
};

// Redirect Path (Edit Button)
const redirectPath = "/FormBuilder" ; 

// Form IO Templates (dark theme)
Templates.framework = 'bootstrap4';

export function FormViewer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formSchema, setFormSchema] = useState(DEFAULT_FORM_SCHEMA);

  useEffect(() => {
    if (location.state && location.state.formSchema) {
      setFormSchema(location.state.formSchema);
    }
  }, []);

  const handleEditClick = () => {
    console.log("BaseURL: ", Formio.getBaseUrl());
    navigate(redirectPath, { state: { formSchema } });
  };

  return (
    <Container>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdn.form.io/formiojs/formio.full.min.css" />
      <script src="https://cdn.form.io/formiojs/formio.full.min.js"></script>

      <Header>
        <h1>Form Viewer</h1>
        <Button onClick={handleEditClick}>Edit Form</Button>
      </Header>

      <br />
      <Form form={formSchema} />
    </Container>
  );
}
