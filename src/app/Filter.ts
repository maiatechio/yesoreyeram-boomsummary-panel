export class BoomSummaryFilter {
  public field: string;
  public operator: string;
  public value: string;
  public value2: string;
  public CanShowValue2;
  public GetValue2Helper;
  public GetValue1Helper;
  constructor(options) {
    this.field = options.field || "Sample";
    this.operator = options.field || "equals";
    this.value = options.value || "Something";
    this.value2 = options.value2 || "";
  }
}
BoomSummaryFilter.prototype.CanShowValue2 = function() {
  if (this.operator === "between") {
    return true;
  } else if (this.operator === "inside range") {
    return true;
  } else if (this.operator === "outside range") {
    return true;
  } else if (this.operator === "in") {
    return true;
  } else {
    return false;
  }
};
BoomSummaryFilter.prototype.GetValue2Helper = function() {
  if (this.operator === "between") {
    return "to";
  } else if (this.operator === "inside range") {
    return "to";
  } else if (this.operator === "outside range") {
    return "to";
  } else if (this.operator === "in") {
    return "seperator";
  } else {
    return "";
  }
};
BoomSummaryFilter.prototype.GetValue1Helper = function() {
  if (this.operator === "between") {
    return "From";
  } else if (this.operator === "inside range") {
    return "From";
  } else if (this.operator === "outside range") {
    return "From";
  } else if (this.operator === "in") {
    return "Values";
  } else {
    return "Value";
  }
};