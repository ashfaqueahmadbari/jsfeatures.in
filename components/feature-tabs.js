import React from 'react';
import BaseComponent from './base.js';
import Feature from './feature.js';
import mui, { Tab, Tabs } from 'material-ui';
const tabStyle = {'backgroundColor': '#046380'};

class FeatureTabs extends BaseComponent {
  constructor () {
    super()
  }
  render () {
    var tab;
    if(window.location.href.indexOf("#ES7")>=0)
    tab=0;
    else if(window.location.href.indexOf("#ES6")>=0)
    tab=1;
    else if(window.location.href.indexOf("#ES5")>=0)
    tab=2;
    return (<div>
        <Tabs initialSelectedIndex={tab}>
            <Tab label="ES7/ES2016" id="es7" style={tabStyle}>
                <Feature spec='ES7' />
            </Tab>
            <Tab label="ES6/ES2015" id="es6" style={tabStyle}>
                <Feature spec='ES6' />
            </Tab>
            <Tab label="ES5" id="es5" style={tabStyle} >
                <Feature spec='ES5' />
            </Tab>
        </Tabs>
    </div>)
  }
}

export default FeatureTabs;
