import React, { useState } from "react";

const AddAgentForm = (props: any) => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    agentLicence: "",
    aboutMe: "",
    practiceAreas: "",
    photoUrl: "",
    address: "",
  };
  const [agent, setAgent] = useState(initialFormState);

  const handleInputChange = (event: any) => {
    const {name, value} = event.target;

    setAgent({...agent, [name]: value});
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!agent.firstName || !agent.lastName) return;

        props.addAgent(agent);
        setAgent(initialFormState);
      }}
    >
      <h2>Add Agent</h2>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={agent.firstName}
          onChange={handleInputChange}
          pattern="[a-zA-Z]+"
          required
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={agent.lastName}
          onChange={handleInputChange}
          pattern="[a-zA-Z]+"
          required
        />
      </div>
      <div className="form-group">
        <label>Agent Licence</label>
        <input
          type="text"
          name="agentLicence"
          value={agent.agentLicence}
          onChange={handleInputChange}
          pattern="[a-zA-Z0-9-]+"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="text"
          name="address"
          value={agent.address}
          onChange={handleInputChange}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
      </div>
      <div className="form-group">
        <label>About Me</label>
        <input
          type="text"
          name="aboutMe"
          value={agent.aboutMe}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Practice Areas</label>
        <input
          type="text"
          name="practiceAreas"
          value={agent.practiceAreas}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="modal-button">Add</button>
    </form>
  );
};

export default AddAgentForm;
