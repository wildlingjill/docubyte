import React from 'react';

import Layout from "../components/layout";
import SequenceStep from "../components/sequence-step";

import pcr1 from "../images/pcr1.png";
import pcr2 from "../images/pcr2.png";
import pcr3 from "../images/pcr3.png";
import pcr4 from "../images/pcr4.png";
import pcr5 from "../images/pcr5.png";

/**
 * Sequencing page component used on the "Sequencing DNA" page
 * Calls SequenceStep component for each step on the page
 */

const SequencingPage = () => (
  <Layout>

    <h2 style={{ margin: `3rem 0 2rem 0`, textAlign: `center` }}>Sequencing DNA with microb.io</h2>
    <p style={{ textAlign: `justify`, marginBottom: `2rem` }}>Let microb.io take the time and effort out of sequencing DNA fragments. Our revolutionary process will run through the process quickly and efficiently with just a few lines of code, giving you the sequence you desire at the end. Just start the initial PCR yourself, and sit back to wait for your fragment sequence!</p>
    
    <main style={{ display: `flex`, flexDirection: `column` }}>
      <SequenceStep
        imageName={pcr1}
        imageAlt="PCR primers annealing to DNA strand"
        imageHeight="12rem"
        imageWidth="20rem"
        header="Step 1: Start your PCR!"
        text="If you supply the primers and the DNA, microb.io can take it from there! Our code allows you to dynamically change the settings of the PCR, increasing the number of cycles, the temperatures and the cycle length with ease."
      />

      <SequenceStep
        imageName={pcr2}
        imageAlt="Sanger sequencing using fluorescently-labelled primers"
        imageHeight="15rem"
        imageWidth="18rem"
        header="Step 2: Sanger sequencing"
        text="The next step is Sanger sequencing, where the sequence of your amplified fragment is determined using state-of-the-art fluorescently-labelled oligosaccharides."
      />

      <SequenceStep
        imageName={pcr3}
        imageAlt="Gel electrophoresis of the DNA sequence"
        imageHeight="18rem"
        imageWidth="15rem"
        header="Step 3: Gel electrophoresis"
        text="With microb.io, you never have to worry about over-running your gel! Our program detects the ideal run time for your gel electrophoresis, ensuring good spacing of the bands whilst avoiding any run-off from the gel. Includes an optimized ladder based on your initial PCR fragment size."
      />

      <SequenceStep
        imageName={pcr4}
        imageAlt="Compose DNA sequence from the gel"
        imageHeight="10rem"
        imageWidth="20rem"
        header="Step 4: Assembling the sequence"
        text="From the gel electrophoresis, the final sequence of your amplified DNA fragment will be assembled, and a sequencing chart will be produced."
      />

      <SequenceStep
        imageName={pcr5}
        imageAlt="Match sequenced DNA against expected gene sequence"
        imageHeight="10rem"
        imageWidth="20rem"
        header="Step 5: Expected sequence comparison"
        text="We line the amplified DNA sequence up against your expected gene sequence, and show you any SNPs or mutations!"
      />
    </main>

  </Layout>
);

export default SequencingPage;