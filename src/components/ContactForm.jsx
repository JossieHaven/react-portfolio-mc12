import React from "react";
import { Form, Input, Button } from "@heroui/react";
import "./ContactForm.css"; 

export default function App() {
  const [action, setAction] = React.useState(null);

  return (
    <div className="form-container">
      <Form
        className="flex flex-col gap-4"
        validationBehavior="native"
        onReset={() => setAction("reset")}
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));
          setAction(`submit ${JSON.stringify(data)}`);
        }}
      >
        <Input
          isRequired
          errorMessage="Please enter a valid Username"
          labelPlacement="outside"
          name="username"
          placeholder="Enter your Username here"
          type="text"
        />

        <Input
          isRequired
          errorMessage="Please enter a valid e-mail here"
          labelPlacement="outside"
          name="email"
          placeholder="Enter your e-mail"
          type="email"
        />

        <Input
          labelPlacement="outside"
          name="message"
          placeholder="Enter message here"
          type="text"
        />

        <div className="form-buttons">
          <Button className="primary" type="submit">
            Submit
          </Button>
          <Button className="reset" type="reset">
            Reset
          </Button>
        </div>

        {action && <div className="form-action">Action: <code>{action}</code></div>}
      </Form>
    </div>
  );
}
