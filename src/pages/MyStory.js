import React from 'react';
import {withNamespaces} from 'react-i18next';

import './MyStory.css';

class MyStory extends React.Component {
  componentDidMount () {
    document.title = 'My Story';
  }
  render () {
    const {t} = this.props;
    return (
      <div>
        <div class="paper-background">
          <span class="coffee-stain" />
          <span class="paper-date">
            Düsseldorf, 21.06.2019
          </span>
          <section class="paper-content">
            <p>
              {t ('Story')}
            </p><br />
            <p>
              {t ('Story1')}
            </p><br />
            <p>
              {t ('Story2')}
            </p><br />
            <p>
              {t ('Story3')}
            </p><br /><br />
            <p class="paper-signature">Ivan Vasilev</p>
          </section>
        </div>

        <div class="my-story">
          <p>
            {t ('Story')}
          </p><br />
          <p>
            {t ('Story1')}
          </p><br />
          <p>
            {t ('Story2')}
          </p><br />
          <p>
            {t ('Story3')}
          </p><br /><br />
          <p>Ivan Vasilev</p>
        </div>

      </div>
    );
  }
}

export default withNamespaces () (MyStory);
