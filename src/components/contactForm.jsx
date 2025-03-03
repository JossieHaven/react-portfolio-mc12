import React from "react";
import {Form, Input, Button} from "@heroui/react";

export default function App() {
  const [action, setAction] = React.useState(null);

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4"
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
        errorMessage="Please enter a valid e-mail"
        labelPlacement="outside"
        name="email"
        placeholder="Enter your e-mail here"
        type="email"
      />
        <Input
        labelPlacement="outside"
        name="message"
        placeholder="Enter your message here"
        type="message"
      />
      <div className="flex gap-2">
        <Button color="primary" type="submit">
          Submit
        </Button>
        <Button type="reset" variant="flat">
          Reset
        </Button>
      </div>
      {action && (
        <div className="text-small text-default-500">
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  );
}

