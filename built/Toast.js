"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_root_toast_1 = require("react-native-root-toast");
let toast = null;
exports.default = {
    show(content) {
        if (toast) {
            react_native_root_toast_1.default.hide(toast);
        }
        toast = react_native_root_toast_1.default.show(content, {
            position: react_native_root_toast_1.default.positions.CENTER,
            duration: 1000,
            shadow: false,
            opacity: 1,
            containerStyle: {
                height: 70,
                width: 70,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.7)'
            },
            textStyle: {
                color: 'white',
                fontSize: 35,
                fontWeight: 'bold'
            }
        });
    }
};
//# sourceMappingURL=Toast.js.map