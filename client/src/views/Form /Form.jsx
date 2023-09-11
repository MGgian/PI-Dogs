import { useState } from "react";

const Form = () => {

  const form = useState({
    email:"",
    name:"",
    phone:""
  })
    return (
        <Form>
          <div> 
            <label>Email</label>
            <input type="text" value={form.email}/>
          </div>

          <div>
            <label>Name</label>
            <input type="text" value={form.name}/>
          </div>

          <div>
            <label>Phone</label>
            <input type="text" value={form.phone}/>
          </div>
        </Form>
    )
}

export default Form;