import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FontAwesome from 'react-fontawesome';
import Col from '../../components/Bootstrap/Col';
import Panel from '../../components/Bootstrap/Panel';
import Row from '../../components/Bootstrap/Row';
import { setPage } from '../../store/Header/reducer';

class UiComponents extends PureComponent {
  componentDidMount() {
    this.props.setPage({ currentPage: 'UiComponents' });
  }

  render() {
    return (
      <div>
        <h1>UiComponents</h1>
        <Row>
          <Col size={{ md: 4 }}>
            <Panel heading="Panel heading">
              <div>Panel content</div>
            </Panel>
          </Col>
          <Col size={{ md: 4 }}>
            <Panel title={(<span><FontAwesome name="bookmark" /> Panel title</span>)}>
              <div>Panel content</div>
            </Panel>
          </Col>
          <Col size={{ md: 4 }}>
            <Panel title="Panel title" footer="Panel footer">
              <div>Panel content</div>
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

UiComponents.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiComponents);
