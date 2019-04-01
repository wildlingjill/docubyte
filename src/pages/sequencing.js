import React from 'react';

import Layout from "../components/layout";
import pcr1 from "../images/pcr1.png";
import pcr2 from "../images/pcr2.png";
import pcr3 from "../images/pcr3.png";
import pcr4 from "../images/pcr4.png";
import pcr5 from "../images/pcr5.png";

// sequencing page - diagrams/flow chart, bit of text for each step

const SequencingPage = () => (
    <Layout>
        <h2>Sequencing DNA with microb.io</h2>
        <p>Let microb.io take the time and effort out of sequencing DNA fragments. Our revolutionary process will run through the process quickly and efficiently with just a few lines of code, giving you the sequence you desire at the end. Just start the initial PCR yourself, and sit back to wait for your fragment sequence!</p>
        <table>
            <tr>
                <td>
                    <img
                        src={pcr1}
                        alt="Image showing PCR primers annealing to DNA strand"
                        style={{
                            width: `20rem`,
                            margin: `2rem 5rem 2rem 0`,
                        }} 
                    />
                </td>
                <td>
                    <h3>Step 1: Start your PCR!</h3>
                    <p>If you supply the primers and the DNA, microb.io can take it from there! Our code allows you to dynamically change the settings of the PCR, increasing the number of cycles, the temperatures and the cycle length with ease.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <img
                        src={pcr2}
                        alt="Sanger sequencing using fluorescently-labelled primers"
                        style={{
                            width: `20rem`,
                            margin: `2rem 5rem 2rem 0`,
                        }} 
                    />
                </td>
                <td>
                    <h3>Step 2: Sanger sequencing</h3>
                    <p>The next step is Sanger sequencing, where the sequence of your amplified fragment is determined using state-of-the-art fluorescently-labelled oligosaccharides.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <img
                        src={pcr3}
                        alt="Gel electrophoresis of the DNA sequence"
                        style={{
                            width: `20rem`,
                            margin: `2rem 5rem 2rem 0`,
                        }} 
                    />
                </td>
                <td>
                    <h3>Step 3: Gel electrophoresis</h3>
                    <p>With microb.io, you never have to worry about over-running your gel! Our program detects the ideal run time for your gel electrophoresis, ensuring good spacing of the bands whilst avoiding any run-off from the gel. Includes an optimized ladder based on your initial PCR fragment size.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <img
                        src={pcr4}
                        alt="Compose DNA sequence from the gel"
                        style={{
                            width: `20rem`,
                            margin: `2rem 5rem 2rem 0`,
                        }} 
                    />
                </td>
                <td>
                    <h3>Step 4: Assembling the sequence</h3>
                    <p>From the gel electrophoresis, the final sequence of your amplified DNA fragment will be assembled, and a sequencing chart will be produced.</p>
                </td>
            </tr>
            <tr>
                <td>
                    <img
                        src={pcr5}
                        alt="Match sequenced DNA against expected gene sequence"
                        style={{
                            width: `20rem`,
                            margin: `2rem 5rem 2rem 0`,
                        }} 
                    />
                </td>
                <td>
                    <h3>Step 5: Expected sequence comparison</h3>
                    <p>We line the amplified DNA sequence up against your expected gene sequence, and show you any SNPs or mutations!</p>
                </td>
            </tr>
        </table>
    </Layout>
);

export default SequencingPage;