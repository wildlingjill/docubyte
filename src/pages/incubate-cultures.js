import React, {useState} from 'react';
import AceEditor from 'react-ace';
import brace from 'brace';

import 'brace/mode/javascript';
import 'brace/theme/solarized_dark';

import Layout from "../components/layout";

// incubation page - code editor, try it yourself

const IncubateCulturesPage = () => {
  const [bacteria, setBacteria] = useState("Streptococcus");
  const [broth, setBroth] = useState("BHYE");
  const [time, setTime] = useState("24h");
  const [temperature, setTemp] = useState("37°C");

  const onLoad = () => {
      console.log("loaded");
  };

  const onChange = () => {
      console.log("changed");
  };

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
      <h2>Incubating bacterial cultures with microb.io</h2>
      <div className="code-container" style={{
        display: `flex`,
        border: `1px solid #d3d3d329`,
        borderRadius: `10px`,
        padding: `1rem`,
        boxShadow: `0 1px 3px hsla(0, 0%, 0%, .2)`,
      }}>
        <div style={{
            width: `50%`,
            marginRight: `1rem`,
          }}
          >
          <p style={{ marginTop: `0` }}>microb.io can be used to facilitate incubating bacterial cultures, no matter what species, time or temperature you want!</p>
          <p>Try editing the code opposite, or changing the variables below - you can customize the bacterial species, the growth medium (broth), the temperature for incubation, and the length of incubation time.</p>
          <p>Bacterial species: </p>
          <select onChange={(event) => setBacteria(event.target.value)} value={bacteria} style={{ fontSize: `16px` }}>
            <option value="Streptococcus">Streptococcus</option>
            <option value="Escherichia">Escherichia</option>
            <option value="Staphylococcus">Staphylococcus</option>
            <option value="Actinomyces">Actinomyces</option>
          </select>
          <p>Broth type: </p>
          <select onChange={(event) => setBroth(event.target.value)} value={broth} style={{ fontSize: `16px` }}>
            <option value="BHYE">BHYE broth</option>
            <option value="THY">THY broth</option>
            <option value="LB">LB broth</option>
          </select>
          <p>Incubation time: </p>
          <select onChange={(event) => setTime(event.target.value)} value={time} style={{ fontSize: `16px` }}>
            <option value="24h">24h</option>
            <option value="12h">12h</option>
            <option value="8h">8h</option>
          </select>
          <p>Temperature: </p>
          <select onChange={(event) => setTemp(event.target.value)} value={temperature} style={{ fontSize: `16px` }}>
            <option value="37°C">37°C</option>
            <option value="30°C">30°C</option>
            <option value="20°C">20°C</option>
            <option value="4°C">4°C</option>
          </select>
        </div>
        <AceEditor
            style={{
              width: `50%`,
            }}
            editorProps={{$blockScrolling: true}}
            mode="javascript"
            theme="solarized_dark"
            name="cultures"
            onLoad={onLoad}
            onChange={onChange}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={codeSample}
            enableBasicAutocompletion={false}
            enableLiveAutocompletion={true}
            enableSnippets={false}
            showLineNumbers={true}
            tabSize={2}
            readOnly={false}
            wrapEnabled={true}
            maxLines={Infinity}
          />
        </div>
    </Layout>
  );
};

export default IncubateCulturesPage;