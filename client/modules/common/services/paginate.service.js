import _ from 'lodash';

export default function (AppConstants, $http, $q) {
  'ngInject';

  class Paginate {
    /**
     * @param  {string|function} paginate callback function that returns a promise
     * @param  {string|array[string]} responseKeys
     * @param  {object} options Default paginate query options
     */
    constructor(paginate, options = {}) {
      this.reset(options);
      this.paginate = paginate;
    }

    /**
     * reset() - Clear items collection. Useful for preserving related data.
     *
     * @note If you want a hard reset of all related data, create a new Paginator
     *
     * @param {object} [resetOptions]
     *   Optional hash of options to reset with,
     *   otherwise last reset options will be used
     */
    reset(resetOptions = this.resetOptions) {
      this.resetOptions = resetOptions;
      this.options = _.extend({
        limit: 10,
        offset: 0,
        page: 0
      }, resetOptions);
      this.hasMore = true;
      this.items = [];
      return this;
    }


    merge(items) {
      this.items = _.concat(this.items, items);
    }

    /**
     * next() - Sets `paginator.loading` to true while querying
     *
     * @return {Function} [description]
     */
    next() {
      if (!this.hasMore) return $q.when(this.items);
      if (this.loading) return this.loading;

      this.loading = this.paginate(this.options)
        .then(res => {
          if (!res.length) {
            this.hasMore = false;
            return;
          }
          this.options.page++;
          this.options.offset = this.options.page * this.options.limit;
          this.merge(res);
        })
        .finally(() => this.loading = null);
    }
  }

  return Paginate;
}
