import React, { Component } from 'react';


// https://github.com/cornflourblue
// class adapted from Jason Watmore's pagination component

class Pagination extends Component {
  state = { 
    pager: {},
    initialPage: 1
  };

componentWillMount() {
    // set page if items array isn't empty
    if (this.props.items && this.props.items.length) {
        this.setPage(this.state.initialPage);
    }
}

componentDidUpdate(prevProps, prevState) {
    // reset page if items array has changed
    if (this.props.items !== prevProps.items) {
        this.setPage(this.state.initialPage);
    }
}

setPage(page) {
    var items = this.props.items;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
        return;
    }

    // get new pager object for specified page
    pager = this.getPager(items.length, page);

    // get new page of items from items array
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // update state
    this.setState({ 
      pager: pager 
    });

    // call change page function in parent component
    this.props.onChangePage(pageOfItems);
}

numRange(start, stop, step) {
  if (stop == null) {
    stop = start || 0;
    start = 0;
  }
  step = step || 1;

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var idx = 0; idx < length; idx++, start += step) {
    range[idx] = start;
  }

  return range;
};

getPager(totalItems, currentPage, pageSize) {
    // default to first page
    currentPage = currentPage || 1;

    // default page size is 10
    pageSize = pageSize || 10;

    // calculate total pages
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 10) {
        // less than 10 total pages so show all
        startPage = 1;
        endPage = totalPages;
    } else {
        // more than 10 total pages so calculate start and end pages
        if (currentPage <= 6) {
            startPage = 1;
            endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
            startPage = totalPages - 9;
            endPage = totalPages;
        } else {
            startPage = currentPage - 5;
            endPage = currentPage + 4;
        }
    }

    // calculate start and end item indexes
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    var pages = this.numRange(startPage, endPage + 1, 1);

    // return object with all pager properties required by the view
    return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
    };
}

render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
        // don't display pager if there is only 1 page
        return null;
    }

    return (
        <ul className="pagination">
            <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                <a onClick={() => this.setPage(1)}>First</a>
            </li>
            <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
            </li>
            {pager.pages.map((page, index) =>
                <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                    <a onClick={() => this.setPage(page)}>{page}</a>
                </li>
            )}
            <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
            </li>
            <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
            </li>
        </ul>
    );
}
}

export default Pagination;