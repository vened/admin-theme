import React, { PureComponent } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Col from '../../components/Bootstrap/Col';
import Row from '../../components/Bootstrap/Row';
import { setPage } from '../../store/Header/reducer';

class UiGeneral extends PureComponent {
  componentDidMount() {
    this.props.setPage({ currentPage: 'UiGeneral' });
  }

  render() {
    return (
      <div>
        <Row>
          <Col size={{ md: 4 }}>
            <Panel>
              md9 mdPush3
            </Panel>
          </Col>
        </Row>
        <Row>
          <Col size={{
            md: 9,
            mdPush: 3,
          }}>
            <h1>md9 mdPush3</h1>
          </Col>
          <Col size={{
            md: 3,
            mdPull: 9,
          }}>
            <h1>md9 mdPush3</h1>
          </Col>
        </Row>
        <Row>
          <Col size={{
            xs: 10,
            xsOffset: 2,
            xsPull: 2,
            xsPush: 3,
            sm: 9,
            smOffset: 3,
            smPull: 2,
            smPush: 2,
            md: 6,
            mdOffset: 2,
            mdPull: 2,
            mdPush: 2,
            lg: 4,
            lgOffset: 1,
            lgPull: 2,
            lgPush: 3,
          }}>
            <h1>UiGeneral</h1>
          </Col>
          <div className="col-lg-3">
            <h1>UiGeneral</h1>
          </div>
          <div className="col-lg-3">
            <h1>UiGeneral</h1>
          </div>
        </Row>
      </div>
    );
  }
}

UiGeneral.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiGeneral);
