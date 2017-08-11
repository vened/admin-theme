import React, { PureComponent } from 'react';
import {
  Accordion,
  Button,
  ListGroup,
  ListGroupItem,
  Panel,
  PanelGroup,
} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class Panels extends PureComponent {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true,
      activeKey: '1',
    };
  }

  handleClickPanel = () => {
    alert('You have clicked on me');
  };

  handleSelect = (activeKey) => {
    this.setState({ activeKey });
  };

  renderTitle = () => (<h3><FontAwesome name="bookmark" /> Panel title</h3>);

  render() {
    return (
      <Panel header={(<h3>Panel, PanelGroup, Accordion</h3>)}>

        <p>
          Use react-bootstrap, <a href="https://react-bootstrap.github.io/components.html#panels" target="_blank">documentation Panel</a>
        </p>

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

        <Panel collapsible defaultExpanded header="With tables and list groups(click collapsible)">
          Some default panel content here.
          <ListGroup fill>
            <ListGroupItem>Item 1</ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>&hellip;</ListGroupItem>
          </ListGroup>
          Some more panel content here.
        </Panel>

        <h4>Controlled PanelGroups</h4>
        <p>
          PanelGroups can be controlled by a parent component. The activeKey prop dictates which panel is open.
        </p>

        <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
          <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
          <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
        </PanelGroup>

        <h4>Uncontrolled PanelGroups</h4>
        <p>
          PanelGroups can also be uncontrolled where they manage their own state. The defaultActiveKey prop dictates which panel is open
          when initially.
        </p>

        <PanelGroup defaultActiveKey="2" accordion>
          <Panel header="Panel 1" eventKey="1">Panel 1 content</Panel>
          <Panel header="Panel 2" eventKey="2">Panel 2 content</Panel>
        </PanelGroup>

        <h4>Accordions</h4>

        <Accordion>
          <Panel header="Collapsible Group Item #1" eventKey="1">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </Panel>
          <Panel header="Collapsible Group Item #2" eventKey="2">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </Panel>
          <Panel header="Collapsible Group Item #3" eventKey="3">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non
            cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
            aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </Panel>
        </Accordion>

      </Panel>
    );
  }
}

export default Panels;
