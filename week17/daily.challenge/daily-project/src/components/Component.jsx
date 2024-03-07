import React from "react";


function Component({ formData, handleChange }) {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
          />
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <br />
          <label>
            Checkbox 1
            <input
              type="checkbox"
              name="checkbox1"
              checked={formData.checkbox1}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Checkbox 2
            <input
              type="checkbox"
              name="checkbox2"
              checked={formData.checkbox2}
              onChange={handleChange}
            />
          </label>
        </form><br></br>
        <button type="submit">Submit</button>
      </div>
    );
  }

  export default Component;