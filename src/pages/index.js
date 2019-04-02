import React from "react";

import Layout from "../components/layout";
import Article from "../components/article";

import CulturesImage from "../images/incubate-cultures.png";
import SequencingImage from "../images/sequence-dna.png";
import PCRImage from "../images/run-pcr.png";

// version dropdown
// carbon code snippet for implementation
// nav bar
// github link with icon
// why use this product?
// google translate API call? translate to french, language drop-down

export default class IndexPage extends React.Component {
  static displayName="Index Page";

  constructor(props) {
    super(props);

    this.state = {
      articles: [
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
      ],
      appVersion: 'v1.5.0',
    };
  }

  render = () => {
    const {articles} = this.state;
    return (
      <Layout>
        <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, marginBottom: `2rem` }}>
          <h1 style={{ fontSize: `26px` }}>microb.io documentation {this.state.appVersion}</h1>
          <div style={{ display: `flex`, alignItems: `center` }}>
            <p style={{ marginLeft: `3.5rem`, marginRight: `0.5rem`, fontSize: `13px` }}>Version:</p>
            <select defaultValue="v1.5.0" onChange={(event) => this.setState({appVersion: event.target.value})} style={{
                height: `2rem`,
                fontSize: `13px`,
                width: `4.5rem`,
              }}
            >
              <option value="v1.5.0">v1.5.0</option>
              <option value="v1.4.0">v1.4.0</option>
              <option value="v1.3.0">v1.3.0</option>
            </select>
          </div>
          <div style={{ display: `flex`, alignItems: `center` }}>
            <p style={{ marginLeft: `1rem`, marginRight: `0.5rem`, fontSize: `13px` }}>Language:</p>
            <select defaultValue="English" style={{
                height: `2rem`,
                fontSize: `13px`,
                width: `4.5rem`,
              }}
            >
              <option value="English">English</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </div>
        <div style={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}>
          <p style={{ marginBottom: `3rem` }}>Here you can find all the documentation you need to start using microb.io, for all your bacterial needs!</p>
          <div className="article-container">
            {articles.map(({title, description, urlLink, imageName}, index) => 
              <Article key={index} title={title} description={description} urlLink={urlLink} imageName={imageName} />
            )}
          </div>
        </div>
      </Layout>
    );
  };
}
