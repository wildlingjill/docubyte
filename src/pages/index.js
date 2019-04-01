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
    };
  }

  render = () => {
    const {articles} = this.state;
    return (
      <Layout>
        <h1>microb.io documentation</h1>
        <p>Here you can find all the documentation you need to start using microb.io, for all your bacterial needs!</p>
        <div className="article-container">
          {articles.map(({title, description, urlLink, imageName}) => 
            <Article title={title} description={description} urlLink={urlLink} imageName={imageName} />
          )}
        </div>
      </Layout>
    );
  };
}
