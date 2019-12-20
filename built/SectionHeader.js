"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_native_1 = require("react-native");
const styles_1 = require("./styles");
exports.sectionHeaderHeight = 25;
const SectionHeader = function (props) {
    return (<react_native_1.View style={[styles_1.default.sectionHeaderContainer, {
            height: exports.sectionHeaderHeight,
        }]}>
      <react_native_1.Text style={styles_1.default.sectionHeaderTitle}>
        {props.title}
      </react_native_1.Text>
    </react_native_1.View>);
};
exports.default = SectionHeader;
//# sourceMappingURL=SectionHeader.js.map