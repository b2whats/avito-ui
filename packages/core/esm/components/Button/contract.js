// export enum trick allows per-platform declaration merging
export var ButtonPreset;

(function (ButtonPreset) {
  ButtonPreset[ButtonPreset["primary"] = 0] = "primary";
  ButtonPreset[ButtonPreset["default"] = 1] = "default";
})(ButtonPreset || (ButtonPreset = {}));
//# sourceMappingURL=contract.js.map