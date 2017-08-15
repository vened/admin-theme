import {
  Badge,
  Col,
  Row,
  Button,
} from 'antd';
import React, { PureComponent } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdminPanel from '../../components/UI/AdminPanel/index';
import { setPage } from '../../store/Header/reducer';

class UiBadge extends PureComponent {
  componentDidMount() {
    this.props.setPage({ currentPage: 'UiBadge' });
  }

  render() {
    return (
      <div>
        <Row gutter={16} align="normal" type="flex" style={{ margin: '0 0 16px' }}>

          <Col span={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <AdminPanel title="Basic Example">
              <p style={{ margin: '0 0 30px' }}>
                Simplest Usage. Badge will be hidden when count is 0, but we can use showZero to show it.
              </p>
              <Row gutter={16}>
                <Col className="gutter-row" span={3}>
                  <Badge count={5}>
                    <a href="#" className="head-example" />
                  </Badge>
                </Col>
                <Col className="gutter-row" span={3}>
                  <Badge count={4} showZero>
                    <a href="#" className="head-example" />
                  </Badge>
                </Col>
              </Row>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="danger">Danger</Button>
            </AdminPanel>
          </Col>

          <Col span={12} xl={12} lg={12} md={12} sm={24} xs={24}>
            <AdminPanel title="Overflow Count">
              <p style={{ margin: '0 0 30px' }}>
                OverflowCount is displayed when count is larger than overflowCount. The default value of overflowCount is 99.
              </p>
              <Row gutter={16}>
                <Col className="gutter-row" span={3}>
                  <Badge count={5}>
                    <a href="#" className="head-example" />
                  </Badge>
                </Col>
                <Col className="gutter-row" span={3}>
                  <Badge count={4} showZero>
                    <a href="#" className="head-example" />
                  </Badge>
                </Col>
              </Row>
            </AdminPanel>
          </Col>

        </Row>
      </div>
    )
      ;
  }
}

UiBadge.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
  setPage,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UiBadge);
