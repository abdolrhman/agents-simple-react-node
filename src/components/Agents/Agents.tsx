import type { FC } from "react";
import { useState, useEffect, useMemo } from "react";
import Agent from "./Agent";
import { IAgent } from "../../types/Agent";
import axios from "axios";
import './Agents.css'
import SearchBox from "../SearchBox";


const Agents: FC = () => {
  const [agents, setAgents] = useState<IAgent[]>([]);
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (value: any) => {
    setSearchValue(value);
  };

  useEffect(() => {
    async function fetchInitialData() {
      const response = await axios.get("/agents");
      setAgents(response.data);
    }

    fetchInitialData();
  }, []);

  return (
    <div className="container">
      <SearchBox searchHandler={searchHandler}/>
      <table>
        <thead>
        <tr>
          <th>Image</th>
          <th>
            First Name
          </th>
          <th>
            Last Name
          </th>
          <th>
            agentLicence
          </th>
          <th>
            address
          </th>
          <th>
            practiceAreas
          </th>
          <th>
            aboutMe
          </th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {agents.length > 0 ? (
          agents.map((agent) => (
            <tr key={agent.id}>
              <td>
                <img
                  src={agent.photoUrl}
                  alt={agent.firstName + " " + agent.lastName}
                />
              </td>
              <td>{agent.firstName}</td>
              <td>{agent.lastName}</td>
              <td>{agent.agentLicence}</td>
              <td>{agent.address}</td>
              <td>{agent.practiceAreas}</td>
              <td>{agent.aboutMe}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={5}>No Agents</td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

export default Agents;
