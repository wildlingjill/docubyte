import React from 'react';

import Layout from "../components/layout";
import Step from "../components/step";

// pcr page - step 1 -> code, step 2 -> code

const PCRPage = () => {
  const steps = [
    {
      header: 'Step 1: Design primers',
      text: 'Pass a desired sequence for amplification and optimal primer length to the primerDesign function, and it will custom-design your optimized primers instantly! Multiple types of PCR are also supported, including overlap-extension, qPCR, and RT-PCR.',
      code: `
import {primerDesign} from 'microb.io';

const sequence =
  'ATGTCCAAGGATCTTCGTAGGCATGGCTGACGCTAACGTCTA';

const primers = primerDesign({
  sequence,
  optimalLength: 20,
  type: 'Overlap Extension'
});
      `,
    },
    {
      header: 'Step 2: Design PCR run',
      text: 'Design your PCR program with our cycleDesign function, with customizable run-time, number of cycles, duration of each cycle and temperature. This will produce a fully optimized PCR program, guaranteed to produce high quality results.',
      code: `
import {cycleDesign} from 'microb.io';

const program = cycleDesign({
  runTime: 120,
  cycles: 40,
  cycleBreakdown: {
    '70°C': {cycles: 15, duration: 30},
    '90°C': {cycles: 10, duration: 30},
    '10°C': {cycles: 5, duration: 20},
    '37°C': {cycles: 10, duration: 40},
  },
});
      `,
    },
    {
      header: 'Step 3: Run your program',
      text: 'Using the custom primers and PCR program from steps 1 & 2, combine with your bacterial DNA and run the PCR. Once the program has run, use the microb.io runGel and purifyFragment functions to obtain your amplified DNA sequence. Then you can check out our "Sequence DNA" section!',
      code: `
import {runProgram, runGel, purifyFragment} from 'microb.io';

let mySequence;

runProgram(primers, program)
  .then((solution) =>
    runGel(solution.fragments))
  .then((bands) =>
    mySequence = purifyFragment(bands.fragment));
      `,
    },
  ];

  return (
    <Layout>
      <h2 style={{ margin: `3rem 0 2rem 0`, textAlign: `center` }}>Running a PCR with microb.io</h2>
        {steps.map(({header, text, code}, index) => <Step header={header} key={index} text={text} code={code} />)}
    </Layout>
  )
};

export default PCRPage;