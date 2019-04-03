import React, {useState} from 'react';

import Layout from "../components/layout";
import EditorContainer from "../components/editor-container";

// incubation page - code editor, try it yourself

const IncubateCulturesPage = () => {
  const [bacteria, setBacteria] = useState("Streptococcus");
  const [broth, setBroth] = useState("BHYE");
  const [time, setTime] = useState("24h");
  const [temperature, setTemp] = useState("37°C");

// incubate.then() do something?

  const codeSample = `
import { incubateCulture } from 'micro.bio';

// Call incubateCulture to begin an incubation
incubateCulture({
  bacteria: '${bacteria}',
  broth: '${broth}',
  time: '${time}',
  temperature: '${temperature}',
});
  `;

  return (
    <Layout>
      <h2 style={{ margin: `3rem 0 2rem 0`, textAlign: `center` }}>Incubating bacterial cultures with microb.io</h2>
      <div className="code-container" style={{
        display: `flex`,
        border: `1px solid #d3d3d329`,
        borderRadius: `10px`,
        padding: `1rem`,
        boxShadow: `0 1px 3px hsla(0, 0%, 0%, .2)`,
        height: `auto`,
      }}>
        <div style={{
            width: `50%`,
            marginRight: `1rem`,
          }}
          >
          <p style={{ marginTop: `0` }}>microb.io can be used to facilitate incubating bacterial cultures, no matter what species, time or temperature you want!</p>
          <p>Try editing the code opposite, or changing the variables below - you can customize the bacterial species, the growth medium (broth), the temperature for incubation, and the length of incubation time.</p>
          <p style={{ marginBottom: `0 ` }}>Bacterial species: </p>
          <select onChange={(event) => setBacteria(event.target.value)} value={bacteria} style={{
              fontSize: `16px`,
              height: `2rem`,
              border: `1px solid lightgrey`,
              backgroundColor: `white`,
            }}
          >
            <option value="Streptococcus">Streptococcus</option>
            <option value="Escherichia">Escherichia</option>
            <option value="Staphylococcus">Staphylococcus</option>
            <option value="Actinomyces">Actinomyces</option>
          </select>
          <p style={{ marginBottom: `0 ` }}>Broth type: </p>
          <select onChange={(event) => setBroth(event.target.value)} value={broth} style={{
              fontSize: `16px`,
              height: `2rem`,
              border: `1px solid lightgrey`,
              backgroundColor: `white`,
            }}
          >
            <option value="BHYE">BHYE broth</option>
            <option value="THY">THY broth</option>
            <option value="LB">LB broth</option>
          </select>
          <p style={{ marginBottom: `0 ` }}>Incubation time: </p>
          <select onChange={(event) => setTime(event.target.value)} value={time} style={{
              fontSize: `16px`,
              height: `2rem`,
              border: `1px solid lightgrey`,
              backgroundColor: `white`,
            }}
          >
            <option value="24h">24h</option>
            <option value="12h">12h</option>
            <option value="8h">8h</option>
          </select>
          <p style={{ marginBottom: `0 ` }}>Temperature: </p>
          <select onChange={(event) => setTemp(event.target.value)} value={temperature} style={{
              fontSize: `16px`,
              height: `2rem`,
              border: `1px solid lightgrey`,
              backgroundColor: `white`,
            }}
          >
            <option value="37°C">37°C</option>
            <option value="30°C">30°C</option>
            <option value="20°C">20°C</option>
            <option value="4°C">4°C</option>
          </select>
        </div>
        <EditorContainer content={codeSample} />
        </div>
    </Layout>
  );
};

export default IncubateCulturesPage;