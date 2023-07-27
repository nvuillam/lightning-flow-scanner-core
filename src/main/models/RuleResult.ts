import { RuleDefinitions } from '../store/RuleDefinitions';
import { RuleInfo } from '../store/RuleInfo';
import {FlowElement} from './FlowElement';
import {FlowVariable} from './FlowVariable';

export class RuleResult {

  public occurs: boolean;
  public ruleDescription: string;
  public ruleLabel: string;
  public ruleName: string;
  public severity: string;
  public type: string;
  public details?: (FlowElement[] | FlowVariable[] | string);

  constructor(occurs: boolean, ruleName: string, type: string, severity:string, details? : (FlowElement[] | FlowVariable[] | string)) {
    this.occurs = occurs;
    this.ruleName = ruleName;
    this.severity = severity;
    this.type = type;
    if(details){
        this.details = details;
    }
    for (const ruleDefinitionName in RuleDefinitions) {
      if (ruleDefinitionName === ruleName) {
        const rule = RuleInfo(RuleDefinitions[ruleDefinitionName]);
        this.ruleDescription = rule.text;
        this.ruleLabel = rule.label;
      }
    }
  }

}
