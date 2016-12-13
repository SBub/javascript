 /* @flow */

import PubNubCore from '../core/pubnub-common';
import { InternalSetupStruct } from '../core/flow_interfaces';

import superagentTransport from '../core/components/http_modules/fetch';

let Database = class {

  storage: Object;

  constructor() {
    this.storage = {};
  }

  get(key) {
    return this.storage[key];
  }

  set(key, value) {
    this.storage[key] = value;
  }
};

export default class extends PubNubCore {

  constructor(setup: InternalSetupStruct) {
    setup.db = new Database();
    setup.networkTransport = superagentTransport;
    setup.sdkFamily = 'Nodejs';
    super(setup);
  }

}