import React, {useState} from "react";

import Layout from "../components/layout";
import Article from "../components/article";
import Select from "../components/select";
import {translations} from "../translations/translations";

import MicrobioInit from "../images/microbio-init.svg";
import CulturesImage from "../images/incubate-cultures.png";
import SequencingImage from "../images/sequence-dna.png";
import PCRImage from "../images/run-pcr.png";

/**
 * Index page - home page component for the site
 * articles object is mapped over and passed to the <Article> component
 */

const articles = [
  {
    title: 'Run a PCR',
    description: 'Discover how to leverage the power of microb.io to easily automate your PCR runs.',
    urlLink: '/run-pcr/',
    imageName: PCRImage,
  },
  {
    title: 'Incubate Bacterial Cultures',
    description: 'Forgot to incubate your overnight culture? With microb.io, that will be a thing of the past!',
    urlLink: '/incubate-cultures/',
    imageName: CulturesImage,
  },
  {
    title: 'Sequence DNA',
    description: 'From Sanger sequencing to DNA sequence analysis, microb.io can help you through every base of your gene.',
    urlLink: '/sequencing/',
    imageName: SequencingImage,
  },
];

const IndexPage = () => {
  // hooks 'set...' methods used to update state, passed into the select components as onChange
  const [language, setLanguage] = useState('en');
  const [appVersion, setVersion] = useState('v1.5.0');

  return (
    <Layout language={language}>

      <header style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, marginBottom: `2rem` }}>

        {/* translations object used to get text for different languages */}
        <h1 style={{ fontSize: `26px` }}>{translations[language].body.header} {appVersion}</h1>

        <section style={{ display: `flex`, alignItems: `center` }}> 
          <p style={{ marginLeft: `3.5rem`, marginRight: `0.5rem`, fontSize: `13px` }}>{translations[language].body.version}:</p>
          <Select
            values={
              [
                {label: 'v1.5.0', value: 'v1.5.0'},
                {label: 'v1.4.0', value: 'v1.4.0'},
                {label: 'v1.3.0', value: 'v1.3.0'},
              ]
            }
            defaultValue="v1.5.0"
            onChange={setVersion}
          />
        </section>
        
        <section style={{ display: `flex`, alignItems: `center` }}>
          <p style={{ marginLeft: `1rem`, marginRight: `0.5rem`, fontSize: `13px` }}>{translations[language].body.language}:</p>
          <Select
            values={
              [
                {label: 'English', value: 'en'},
                {label: 'Français', value: 'fr'},
                {label: 'Español', value: 'es'},
              ]
            }
            defaultValue="en"
            onChange={setLanguage}
            testId="language-picker"
          />
        </section>
      </header>
      
      <main style={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}>
        <p style={{ marginBottom: `3rem`, maxWidth: `85%`, textAlign: `center` }} data-testid="indexDescription">{translations[language].body.description}</p>
        
        <aside className="project-aim" style={{
            display: `flex`,
            width: `80%`,
            marginBottom: `1rem`,
            border: `3px solid #3973da`,
            padding: `1rem`,
            borderRadius: `10px`,
            boxShadow: `rgba(0, 0, 0, 0.2) 0px 1px 3px`, 
          }}
          >
          <h3 style={{ borderRight: `1px solid grey`, padding: `1rem 1rem 0 0`, marginRight: `1rem` }}>Why use microb.io?</h3>
          <p>Scientists today work long hours - juggling grant applications, paper submissions and repetitive experiments. Take some stress out of your life with microb.io, the cutting-edge microbiological sciences library. We want to help you help yourself, by taking the stress out of your research. Go home, spend time with your family, we got this!</p>
        </aside>
        
        <section className="example" style={{ marginBottom: `2rem` }}>
          <h2 style={{ textAlign: `center`, marginBottom: `1rem` }}>Example</h2>
          <img src={MicrobioInit} alt="Initialization code for microb.io" style={{ width: `40rem` }} />
        </section>
        
        <section className="article-container">
            <h2 style={{ textAlign: `center`, marginBottom: `1rem` }}>Articles</h2>
            {articles.map(({title, description, urlLink, imageName}, index) => 
              <Article key={index} title={title} description={description} urlLink={urlLink} imageName={imageName} />
            )}
        </section>
      
      </main>

    </Layout>
  );
}

export default IndexPage;