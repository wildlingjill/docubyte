import React, {useState} from 'react';

import Layout from "../components/layout";
import EditorContainer from "../components/editor-container";
import Select from "../components/select";

/**
 * Component for the incubate cultures page
 */

const IncubateCulturesPage = () => {
  // state options for the select components, change to alter the code snippet in the EditorContainer component
  const [bacteria, setBacteria] = useState("Streptococcus");
  const [broth, setBroth] = useState("BHYE");
  const [time, setTime] = useState("24h");
  const [temperature, setTemp] = useState("37°C");

  // value for the aceEditor in the EditorContainer component
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
      
      <section className="code-container" style={{
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
          <Select
            values={[
              {
                label: "Streptococcus",
                value: "Streptococcus",
              },
              {
                label: "Escherichia",
                value: "Escherichia",
              },
              {
                label: "Staphylococcus",
                value: "Staphylococcus",
              },
              {
                label: "Actinomyces",
                value: "Actinomyces",
              },
            ]}
            defaultValue="Streptococcus"
            onChange={setBacteria}
          />

          <p style={{ marginBottom: `0 ` }}>Broth type: </p>
          <Select
            values={[
              {
                label: "BHYE broth",
                value: "BHYE",
              },
              {
                label: "THY broth",
                value: "THY",
              },
              {
                label: "LB broth",
                value: "LB",
              },
            ]}
            defaultValue="BHYE broth"
            onChange={setBroth}
          />

          <p style={{ marginBottom: `0 ` }}>Incubation time: </p>
          <Select
            values={[
              {
                label: "24h",
                value: "24h",
              },
              {
                label: "12h",
                value: "12h",
              },
              {
                label: "8h",
                value: "8h",
              },
            ]}
            defaultValue="24h"
            onChange={setTime}
          />

          <p style={{ marginBottom: `0 ` }}>Temperature: </p>
          <Select
            values={[
              {
                label: "37°C",
                value: "37°C",
              },
              {
                label: "30°C",
                value: "30°C",
              },
              {
                label: "20°C",
                value: "20°C",
              },
              {
                label: "4°C",
                value: "4°C",
              },
            ]}
            defaultValue="37°C"
            onChange={setTemp}
          />
          </div>
          
        <EditorContainer content={codeSample} />

      </section>

    </Layout>
  );
};

export default IncubateCulturesPage;