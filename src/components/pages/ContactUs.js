import { useRef } from "react";
import { Form, Button } from "react-bootstrap";
const ContactUs = (props) => {
  const nameInputRef = useRef("");
  const emailInputRef = useRef("");
  const phoneInputRef = useRef("");


  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const customerDetails = {
      name: nameInputRef.current.value,
      email: emailInputRef.current.value,
      phone: phoneInputRef.current.value,
    };
const url = 'https://e-commerce-93448-default-rtdb.firebaseio.com/customerDetails.json'
try{
    const response = await fetch(url, {
        method:'POST',
        body:JSON.stringify(customerDetails),
        headers:{
            'Content-Type':'application/json'
        }
    });

    if(!response.ok) {
        throw new Error('Something went wrong!')
    }

    console.log('Data Sent Successfully');
}catch (error) {
    console.log(error)
}

    
  };

  

  return (
    <Form
      className="w-50 mx-auto my-4 border border-secondary p-4 rounded"
      onSubmit={formSubmitHandler}
    >
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" ref={nameInputRef} />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" ref={emailInputRef} />
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" name="phone" ref={phoneInputRef} />
      </Form.Group>

      <Button variant="primary" type="submit" className="my-4">
        Submit
      </Button>
    </Form>
  );
};

export default ContactUs;
