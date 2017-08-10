import React, { PureComponent } from 'react';
import {
  Button,
  Panel,
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Panels extends PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true,
    };
  }

  handleClickPanel = () => {
    alert('You have clicked on me');
  };

  renderTitle = () => (<h3><FontAwesome name="bookmark" /> Panel title</h3>);

  render() {
    return (
      <Panel header={(<h3>Panel, PanelGroup, Accordion</h3>)}>

        <Panel onClick={this.handleClickPanel}>
          <p>Click me</p>
          <p>
            You can pass on any additional properties you need, e.g. a custom onClick handler, as it is shown in the example code. They all
            will apply to the wrapper div element.
          </p>
        </Panel>

        <Button onClick={() => this.setState({ open: !this.state.open })} bsStyle="primary">
          toggle collapse panel
        </Button>
        <Panel
          collapsible
          expanded={this.state.open}
          header={(<h3>Collapsible Panel</h3>)}
        >
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
        </Panel>

        <Panel header="Panel heading">
          Panel content
        </Panel>

        <Panel header={this.renderTitle()}>
          Panel content
        </Panel>

        <Panel header={this.renderTitle()} footer="Panel footer">
          Panel content
        </Panel>

        <Panel header={this.renderTitle()} bsStyle="primary">
          Panel content
        </Panel>

        <Panel header={this.renderTitle()} bsStyle="success">
          Panel content
        </Panel>

        <Panel header={this.renderTitle()} bsStyle="info">
          Panel content
        </Panel>

        <Panel header={this.renderTitle()} bsStyle="warning">
          Panel content
        </Panel>

        <Panel header={this.renderTitle()} bsStyle="danger">
          Panel content
        </Panel>

      </Panel>
    );
  }
}

export default Panels;
