import React from 'react';
import BaseComponent from './base.js';
import {Paper} from 'material-ui';
import {js_beautify} from 'js-beautify';
import Highlight from 'react-highlight';

import ES6 from '../data/es6.js'
import ES7 from '../data/es7.js'
import ES5 from '../data/es5.js'

const specs = {
    ES5: ES5,
    ES6: ES6,
    ES7: ES7
}
// from https://gist.github.com/mathewbyrne/1280286
const slugify = function(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/\./g, '-')            // Replace dot spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

class Feature extends BaseComponent {
  constructor () {
    super()
  }
  render () {
      const Sytles = {
       pStyle: {
          'marginLeft': '0.7em',
          'color': '#2ac',
          'paddingBottom': '0.3em',
          'fontWeight': '100'
      },
       h1Style: {
          'paddingTop': '0.1em',
          'paddingBottom': '0.2em',
          'fontSize': '2.25em',
          'fontWeight': '200',
          'lineHeight': '1.2',
          'borderBottom': '1px solid #2ABBD7',
          'marginLeft': '7px'
      }
      };
      const spec=this.props.spec;

      const features = specs[this.props.spec].map(function(feature) {
          const name = Object.keys(feature)[0];
          // can avoid this beautification step, using it for now.
          const code = js_beautify(feature[name]['code'], { indent_size: 2 });
          const info = feature[name]['info'];

          return (
              <Paper zDepth={1} key={name} style={{'backgroundColor': '#f0fdfd'}}>
                 <h1 id={spec +'-' + slugify(name)} style={Sytles.h1Style}>
                     <a href={'#' + spec +'-' + slugify(name)}
                         style={{'textDecoration': 'none', 'color': '#d30'}}>
                         {name}
                     </a>
                </h1>
                <p id={slugify(name)} style={Sytles.pStyle}>{info}</p>
                 <Highlight className='js'>
                     {code}
                 </Highlight>
           </Paper>
          )
      });
      return (
          <div>
              {features}
          </div>
      )
  }
}

export default Feature;
