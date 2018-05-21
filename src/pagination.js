import React, { Component } from 'react';
import { Row, Col } from './layout';
import Svg from './icons';
import { FormControl } from './input';
import Box from './box';

class MyPagination extends Component {
  constructor(props) {
    super();

    this.getSafePage = this.getSafePage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.applyPage = this.applyPage.bind(this);
    this.state = {
      page: props.page,
      classname: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ page: nextProps.page });
  }
  getSafePage(page) {
    if (isNaN(page)) {
      page = this.props.page;
    }
    return Math.min(Math.max(page, 0), this.props.pages - 1);
  }

  changePage(page) {
    console.log('page', page, 'props', this.props.page);
    if (page === -1) {
      this.setState({ value: true });
    } else {
      page = this.getSafePage(page);
      this.setState({ page, value: false });
      if (this.props.page !== page) {
        this.props.onPageChange(page);
      }
    }
  }

  applyPage(e) {
    if (e) {
      e.preventDefault();
    }
    const page = this.state.page;
    this.changePage(page === '' ? this.props.page : page);
  }

  render() {
    const {
      pages,
      page,
      pageSizeOptions,
      pageSize,
      canPrevious,
      canNext,
      onPageSizeChange,
    } = this.props;

    const paginationItems = [];

    for (var pi = 0; pi < pages; pi++) {
      paginationItems.push(pi);
    }
    return (
      <Row>
        <Col sm={4} xs={12}>
          <select
            onChange={e => onPageSizeChange(Number(e.target.value))}
            value={pageSize}
          >
            {pageSizeOptions.map((option, i) => (
              <option key={i} value={option}>
                {option} {this.props.rowsText}
              </option>
            ))}
          </select>
        </Col>
        <Col sm={8} xs={12}>
          <Box is="ul" flex alignItems="center">
            <li
              className={canPrevious ? '' : 'disabled'}
              onClick={() => {
                if (!canPrevious) return;
                this.changePage(page - 1);
              }}
              disabled={!canPrevious}
            >
              <Svg icon="left-arrow" />
            </li>
            {/* {paginationItems.map((paginationItems, index) => (
                <li
                  key={index}
                  className={this.state.page == paginationItems ? 'active' : ''}
                  onClick={() => {
                    this.changePage(paginationItems);
                  }}
                >
                  <a role="button">{paginationItems + 1}</a>
                </li>
              ))} */}
            <li>
              <FormControl
                value={this.state.value ? '' : page + 1}
                onChange={e => this.changePage(e.target.value - 1)}
              />
            </li>
            <li>{paginationItems.length}</li>
            <li
              className={canNext ? '' : 'disabled'}
              onClick={() => {
                if (!canNext) return;
                this.changePage(page + 1);
              }}
            >
              <Svg icon="right-arrow" />
            </li>
          </Box>
        </Col>
      </Row>
    );
  }
}

export default MyPagination;
