import type { FC } from "react";
import "./App.css";

import Agents from "../Agents/Agents";
import Header from "../Header";
import useModal from "../hooks/useModal";
import { useState } from "react";
import Modal from "../Modal";
import AddAgentForm from "../Agents/AddAgentForm";
import axios from "axios";

const App: FC = () => {
  const {isShowing, toggle} = useModal();

  const [agents, setAgents] = useState([]);
  // todo: separate add to its own component
  const addAgent = async (agent: any) => {
    console.log('wqeq', agent);
    toggle();
    agent.photoUrl = "https://randomuser.me/api/portraits/thumb/lego/1.jpg";
    await axios.post(
      'http://localhost:3000/agents',
      agent)
      .then(res => {
        if (res.status === 200)
          window.location.reload();
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
    // @ts-ignore
    setAgents([agent, ...agents]);
  };

  return (
    <>
      <Header/>
      <div className="container">
        <button className="button-add" onClick={toggle}>
          Add User
        </button>
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        content={<AddAgentForm addAgent={addAgent}/>}
      />
      <div className="app">
        <Agents/>
      </div>
    </>
  );
};

export default App;
