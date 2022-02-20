import {assert, expect} from 'chai';
import 'mocha';
import {getRules, scan} from '../src';
import {Flow} from '../src/main/models/Flow';
import {ScannerOptions} from '../src/main/models/ScannerOptions';
import {ScanResult} from '../src/main/models/ScanResult';
import AssignTaskOwner = require('./testfiles/AssignTaskOwner.json');

describe('When scanning a screen flow with 2 screens, a dml statements in between and  limits in navigation of the later screen', () => {

  let flow;
  before('arrange', () => {

    // ARRANGE
    flow = new Flow({
      path: 'anypath',
      xmldata : AssignTaskOwner
    });

  });
  it('DuplicateDMLOperationsByNavigation should have no result', () => {
    const results : ScanResult[] = scan([flow],  new ScannerOptions(['DuplicateDMLOperationsByNavigation']));
    expect(results[0].ruleResults.length).to.equal(0);
  });
});
