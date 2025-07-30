/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "(pages-dir-node)/./components/CorrelationExplorer.tsx":
/*!********************************************!*\
  !*** ./components/CorrelationExplorer.tsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=CartesianGrid,Line,ResponsiveContainer,Scatter,ScatterChart,Tooltip,XAxis,YAxis,ZAxis!=!recharts */ \"(pages-dir-node)/__barrel_optimize__?names=CartesianGrid,Line,ResponsiveContainer,Scatter,ScatterChart,Tooltip,XAxis,YAxis,ZAxis!=!./node_modules/recharts/es6/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__]);\n_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst CorrelationExplorer = ()=>{\n    const [correlation, setCorrelation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0.45);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0.45\");\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [regressionLine, setRegressionLine] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const generateData = (correlation, n = 50)=>{\n        const result = [];\n        for(let i = 0; i < n; i++){\n            const x = Math.random();\n            const yMean = correlation * x + (1 - Math.abs(correlation)) * 0.5;\n            const yStd = Math.sqrt(1 - correlation * correlation);\n            const y = yMean + yStd * (Math.random() + Math.random() + Math.random() - 1.5) / 2.1;\n            result.push({\n                x: x * 100,\n                y: y * 100\n            });\n        }\n        return result;\n    };\n    const calculateRegressionLine = (data)=>{\n        const n = data.length;\n        const sumX = data.reduce((sum, point)=>sum + point.x, 0);\n        const sumY = data.reduce((sum, point)=>sum + point.y, 0);\n        const sumXY = data.reduce((sum, point)=>sum + point.x * point.y, 0);\n        const sumXX = data.reduce((sum, point)=>sum + point.x * point.x, 0);\n        const slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);\n        const intercept = (sumY - slope * sumX) / n;\n        return [\n            {\n                x: 0,\n                y: intercept\n            },\n            {\n                x: 100,\n                y: slope * 100 + intercept\n            }\n        ];\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)({\n        \"CorrelationExplorer.useEffect\": ()=>{\n            const newData = generateData(correlation);\n            setData(newData);\n            setRegressionLine(calculateRegressionLine(newData));\n        }\n    }[\"CorrelationExplorer.useEffect\"], [\n        correlation\n    ]);\n    const handleInputChange = (e)=>{\n        setInputValue(e.target.value);\n    };\n    const handleKeyDown = (e)=>{\n        if (e.key === 'Enter') {\n            let value = parseFloat(inputValue);\n            if (isNaN(value)) {\n                value = 0;\n            } else {\n                if (value < -1) {\n                    value = -1;\n                } else if (value > 1) {\n                    value = 1;\n                }\n            }\n            value = Math.round(value * 100) / 100; // Round to 2 decimal places\n            setCorrelation(value);\n            setInputValue(value.toString());\n        }\n    };\n    const getCorrelationDescription = (corr)=>{\n        if (corr === 0) return \"No correlation\";\n        if (corr > 0.7) return \"Strong positive correlation\";\n        if (corr > 0.3) return \"Moderate positive correlation\";\n        if (corr > 0) return \"Weak positive correlation\";\n        if (corr < -0.7) return \"Strong negative correlation\";\n        if (corr < -0.3) return \"Moderate negative correlation\";\n        return \"Weak negative correlation\";\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-c31feeae28391445\" + \" \" + \"bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl shadow-lg max-w-4xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-c31feeae28391445\" + \" \" + \"bg-white p-6 rounded-lg shadow-md mb-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-c31feeae28391445\" + \" \" + \"flex items-center mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                htmlFor: \"correlation-input\",\n                                className: \"jsx-c31feeae28391445\" + \" \" + \"text-xl font-medium text-indigo-700 mr-4\",\n                                children: \"Set Correlation Coefficient:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-c31feeae28391445\" + \" \" + \"flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    id: \"correlation-input\",\n                                    type: \"text\",\n                                    value: inputValue,\n                                    onChange: handleInputChange,\n                                    onKeyDown: handleKeyDown,\n                                    className: \"jsx-c31feeae28391445\" + \" \" + \"w-20 px-2 py-1 text-gray-700 border rounded-lg focus:outline-none focus:border-indigo-500 text-center text-lg\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-c31feeae28391445\" + \" \" + \"text-sm text-gray-600 mb-4\",\n                        children: \"Enter a value between -1 and 1, then press Enter to update the chart.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-c31feeae28391445\" + \" \" + \"mb-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.ResponsiveContainer, {\n                                width: \"100%\",\n                                height: 400,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.ScatterChart, {\n                                    margin: {\n                                        top: 20,\n                                        right: 40,\n                                        bottom: 20,\n                                        left: 0\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.CartesianGrid, {\n                                            strokeDasharray: \"3 3\",\n                                            stroke: \"#a0aec0\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                            lineNumber: 105,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.XAxis, {\n                                            type: \"number\",\n                                            dataKey: \"x\",\n                                            name: \"Variable X\",\n                                            stroke: \"#4a5568\",\n                                            tick: {\n                                                fill: 'transparent'\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.YAxis, {\n                                            type: \"number\",\n                                            dataKey: \"y\",\n                                            name: \"Variable Y\",\n                                            stroke: \"#4a5568\",\n                                            tick: {\n                                                fill: 'transparent'\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.ZAxis, {\n                                            type: \"number\",\n                                            range: [\n                                                20\n                                            ]\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                            lineNumber: 108,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {\n                                            cursor: {\n                                                strokeDasharray: '3 3'\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.Scatter, {\n                                            name: \"Data Points\",\n                                            data: data,\n                                            fill: \"#7C3AED\",\n                                            cursor: \"pointer\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 15\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CartesianGrid_Line_ResponsiveContainer_Scatter_ScatterChart_Tooltip_XAxis_YAxis_ZAxis_recharts__WEBPACK_IMPORTED_MODULE_3__.Line, {\n                                            type: \"linear\",\n                                            dataKey: \"y\",\n                                            data: regressionLine,\n                                            stroke: \"#EF4444\",\n                                            strokeWidth: 3,\n                                            dot: false\n                                        }, void 0, false, {\n                                            fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                            lineNumber: 116,\n                                            columnNumber: 15\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"jsx-c31feeae28391445\" + \" \" + \"text-center mt-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"jsx-c31feeae28391445\" + \" \" + \"text-2xl font-bold text-indigo-600\",\n                                    children: getCorrelationDescription(correlation)\n                                }, void 0, false, {\n                                    fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c31feeae28391445\",\n                children: \".recharts-scatter-symbol{-webkit-transition:fill.3s ease;-moz-transition:fill.3s ease;-o-transition:fill.3s ease;transition:fill.3s ease}.recharts-scatter-symbol:hover{fill:#5B21B6;-webkit-filter:brightness(1.2);filter:brightness(1.2)}\"\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/components/CorrelationExplorer.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CorrelationExplorer);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL2NvbXBvbmVudHMvQ29ycmVsYXRpb25FeHBsb3Jlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNzRTtBQU96SCxNQUFNWSxzQkFBc0I7SUFDMUIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNnQixNQUFNQyxRQUFRLEdBQUdqQiwrQ0FBUUEsQ0FBYyxFQUFFO0lBQ2hELE1BQU0sQ0FBQ2tCLGdCQUFnQkMsa0JBQWtCLEdBQUduQiwrQ0FBUUEsQ0FBYyxFQUFFO0lBRXBFLE1BQU1vQixlQUFlLENBQUNSLGFBQXFCUyxJQUFZLEVBQUU7UUFDdkQsTUFBTUMsU0FBc0IsRUFBRTtRQUM5QixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsR0FBR0UsSUFBSztZQUMxQixNQUFNQyxJQUFJQyxLQUFLQyxNQUFNO1lBQ3JCLE1BQU1DLFFBQVFmLGNBQWNZLElBQUksQ0FBQyxJQUFJQyxLQUFLRyxHQUFHLENBQUNoQixZQUFXLElBQUs7WUFDOUQsTUFBTWlCLE9BQU9KLEtBQUtLLElBQUksQ0FBQyxJQUFJbEIsY0FBY0E7WUFDekMsTUFBTW1CLElBQUlKLFFBQVFFLE9BQVFKLENBQUFBLEtBQUtDLE1BQU0sS0FBS0QsS0FBS0MsTUFBTSxLQUFLRCxLQUFLQyxNQUFNLEtBQUssR0FBRSxJQUFLO1lBQ2pGSixPQUFPVSxJQUFJLENBQUM7Z0JBQUVSLEdBQUdBLElBQUk7Z0JBQUtPLEdBQUdBLElBQUk7WUFBSTtRQUN2QztRQUNBLE9BQU9UO0lBQ1Q7SUFFQSxNQUFNVywwQkFBMEIsQ0FBQ2pCO1FBQy9CLE1BQU1LLElBQUlMLEtBQUtrQixNQUFNO1FBQ3JCLE1BQU1DLE9BQU9uQixLQUFLb0IsTUFBTSxDQUFDLENBQUNDLEtBQUtDLFFBQVVELE1BQU1DLE1BQU1kLENBQUMsRUFBRTtRQUN4RCxNQUFNZSxPQUFPdkIsS0FBS29CLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxRQUFVRCxNQUFNQyxNQUFNUCxDQUFDLEVBQUU7UUFDeEQsTUFBTVMsUUFBUXhCLEtBQUtvQixNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsUUFBVUQsTUFBTUMsTUFBTWQsQ0FBQyxHQUFHYyxNQUFNUCxDQUFDLEVBQUU7UUFDbkUsTUFBTVUsUUFBUXpCLEtBQUtvQixNQUFNLENBQUMsQ0FBQ0MsS0FBS0MsUUFBVUQsTUFBTUMsTUFBTWQsQ0FBQyxHQUFHYyxNQUFNZCxDQUFDLEVBQUU7UUFFbkUsTUFBTWtCLFFBQVEsQ0FBQ3JCLElBQUltQixRQUFRTCxPQUFPSSxJQUFHLElBQU1sQixDQUFBQSxJQUFJb0IsUUFBUU4sT0FBT0EsSUFBRztRQUNqRSxNQUFNUSxZQUFZLENBQUNKLE9BQU9HLFFBQVFQLElBQUcsSUFBS2Q7UUFFMUMsT0FBTztZQUNMO2dCQUFFRyxHQUFHO2dCQUFHTyxHQUFHWTtZQUFVO1lBQ3JCO2dCQUFFbkIsR0FBRztnQkFBS08sR0FBR1csUUFBUSxNQUFNQztZQUFVO1NBQ3RDO0lBQ0g7SUFFQTFDLGdEQUFTQTt5Q0FBQztZQUNSLE1BQU0yQyxVQUFVeEIsYUFBYVI7WUFDN0JLLFFBQVEyQjtZQUNSekIsa0JBQWtCYyx3QkFBd0JXO1FBQzVDO3dDQUFHO1FBQUNoQztLQUFZO0lBRWhCLE1BQU1pQyxvQkFBb0IsQ0FBQ0M7UUFDekIvQixjQUFjK0IsRUFBRUMsTUFBTSxDQUFDQyxLQUFLO0lBQzlCO0lBRUEsTUFBTUMsZ0JBQWdCLENBQUNIO1FBQ3JCLElBQUlBLEVBQUVJLEdBQUcsS0FBSyxTQUFTO1lBQ3JCLElBQUlGLFFBQVFHLFdBQVdyQztZQUN2QixJQUFJc0MsTUFBTUosUUFBUTtnQkFDaEJBLFFBQVE7WUFDVixPQUFPO2dCQUNMLElBQUlBLFFBQVEsQ0FBQyxHQUFHO29CQUNkQSxRQUFRLENBQUM7Z0JBQ1gsT0FBTyxJQUFJQSxRQUFRLEdBQUc7b0JBQ3BCQSxRQUFRO2dCQUNWO1lBQ0Y7WUFDQUEsUUFBUXZCLEtBQUs0QixLQUFLLENBQUNMLFFBQVEsT0FBTyxLQUFLLDRCQUE0QjtZQUNuRW5DLGVBQWVtQztZQUNmakMsY0FBY2lDLE1BQU1NLFFBQVE7UUFDOUI7SUFDRjtJQUVBLE1BQU1DLDRCQUE0QixDQUFDQztRQUNqQyxJQUFJQSxTQUFTLEdBQUcsT0FBTztRQUN2QixJQUFJQSxPQUFPLEtBQUssT0FBTztRQUN2QixJQUFJQSxPQUFPLEtBQUssT0FBTztRQUN2QixJQUFJQSxPQUFPLEdBQUcsT0FBTztRQUNyQixJQUFJQSxPQUFPLENBQUMsS0FBSyxPQUFPO1FBQ3hCLElBQUlBLE9BQU8sQ0FBQyxLQUFLLE9BQU87UUFDeEIsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNDO2tEQUFjOzswQkFDYiw4REFBQ0E7MERBQWM7O2tDQUNiLDhEQUFDQTtrRUFBYzs7MENBQ2IsOERBQUNDO2dDQUEyREMsU0FBUTswRUFBbkQ7MENBQXVFOzs7Ozs7MENBR3hGLDhEQUFDRjswRUFBYzswQ0FDYiw0RUFBQ0c7b0NBQ0NDLElBQUc7b0NBQ0hDLE1BQUs7b0NBQ0xkLE9BQU9sQztvQ0FDUGlELFVBQVVsQjtvQ0FDVm1CLFdBQVdmOzhFQUNEOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJaEIsOERBQUNnQjtrRUFBWTtrQ0FBNkI7Ozs7OztrQ0FHMUMsOERBQUNSO2tFQUFjOzswQ0FDYiw4REFBQ2hELHNLQUFtQkE7Z0NBQUN5RCxPQUFNO2dDQUFPQyxRQUFROzBDQUN4Qyw0RUFBQ2pFLCtKQUFZQTtvQ0FBQ2tFLFFBQVE7d0NBQUVDLEtBQUs7d0NBQUlDLE9BQU87d0NBQUlDLFFBQVE7d0NBQUlDLE1BQU07b0NBQUU7O3NEQUM5RCw4REFBQ2pFLGdLQUFhQTs0Q0FBQ2tFLGlCQUFnQjs0Q0FBTUMsUUFBTzs7Ozs7O3NEQUM1Qyw4REFBQ3RFLHdKQUFLQTs0Q0FBQzBELE1BQUs7NENBQVNhLFNBQVE7NENBQUlDLE1BQUs7NENBQWFGLFFBQU87NENBQVVHLE1BQU07Z0RBQUNDLE1BQU07NENBQWE7Ozs7OztzREFDOUYsOERBQUN6RSx3SkFBS0E7NENBQUN5RCxNQUFLOzRDQUFTYSxTQUFROzRDQUFJQyxNQUFLOzRDQUFhRixRQUFPOzRDQUFVRyxNQUFNO2dEQUFDQyxNQUFNOzRDQUFhOzs7Ozs7c0RBQzlGLDhEQUFDeEUsd0pBQUtBOzRDQUFDd0QsTUFBSzs0Q0FBU2lCLE9BQU87Z0RBQUM7NkNBQUc7Ozs7OztzREFDaEMsOERBQUN2RSwwSkFBT0E7NENBQUN3RSxRQUFRO2dEQUFFUCxpQkFBaUI7NENBQU07Ozs7OztzREFDMUMsOERBQUN0RSwwSkFBT0E7NENBQ055RSxNQUFLOzRDQUNMNUQsTUFBTUE7NENBQ044RCxNQUFLOzRDQUNMRSxRQUFPOzs7Ozs7c0RBRVQsOERBQUN0RSx1SkFBSUE7NENBQ0hvRCxNQUFLOzRDQUNMYSxTQUFROzRDQUNSM0QsTUFBTUU7NENBQ053RCxRQUFPOzRDQUNQTyxhQUFhOzRDQUNiQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJWCw4REFBQ3pCOzBFQUFjOzBDQUNiLDRFQUFDMEI7OEVBQWU7OENBQ2I1QiwwQkFBMEIzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJ6QztBQUVBLGlFQUFlRCxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5zYWxtb24vQWRyaWFuLVNhbG1vbi1JbnRlcmFjdGl2ZXMvY29ycmVsYXRpb24tY29lZmZpY2llbnQvY29tcG9uZW50cy9Db3JyZWxhdGlvbkV4cGxvcmVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNjYXR0ZXJDaGFydCwgU2NhdHRlciwgWEF4aXMsIFlBeGlzLCBaQXhpcywgQ2FydGVzaWFuR3JpZCwgVG9vbHRpcCwgUmVzcG9uc2l2ZUNvbnRhaW5lciwgTGluZSB9IGZyb20gJ3JlY2hhcnRzJztcblxuaW50ZXJmYWNlIERhdGFQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5jb25zdCBDb3JyZWxhdGlvbkV4cGxvcmVyID0gKCkgPT4ge1xuICBjb25zdCBbY29ycmVsYXRpb24sIHNldENvcnJlbGF0aW9uXSA9IHVzZVN0YXRlKDAuNDUpO1xuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZShcIjAuNDVcIik7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPERhdGFQb2ludFtdPihbXSk7XG4gIGNvbnN0IFtyZWdyZXNzaW9uTGluZSwgc2V0UmVncmVzc2lvbkxpbmVdID0gdXNlU3RhdGU8RGF0YVBvaW50W10+KFtdKTtcblxuICBjb25zdCBnZW5lcmF0ZURhdGEgPSAoY29ycmVsYXRpb246IG51bWJlciwgbjogbnVtYmVyID0gNTApID0+IHtcbiAgICBjb25zdCByZXN1bHQ6IERhdGFQb2ludFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBNYXRoLnJhbmRvbSgpO1xuICAgICAgY29uc3QgeU1lYW4gPSBjb3JyZWxhdGlvbiAqIHggKyAoMSAtIE1hdGguYWJzKGNvcnJlbGF0aW9uKSkgKiAwLjU7XG4gICAgICBjb25zdCB5U3RkID0gTWF0aC5zcXJ0KDEgLSBjb3JyZWxhdGlvbiAqIGNvcnJlbGF0aW9uKTtcbiAgICAgIGNvbnN0IHkgPSB5TWVhbiArIHlTdGQgKiAoTWF0aC5yYW5kb20oKSArIE1hdGgucmFuZG9tKCkgKyBNYXRoLnJhbmRvbSgpIC0gMS41KSAvIDIuMTtcbiAgICAgIHJlc3VsdC5wdXNoKHsgeDogeCAqIDEwMCwgeTogeSAqIDEwMCB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBjb25zdCBjYWxjdWxhdGVSZWdyZXNzaW9uTGluZSA9IChkYXRhOiBEYXRhUG9pbnRbXSkgPT4ge1xuICAgIGNvbnN0IG4gPSBkYXRhLmxlbmd0aDtcbiAgICBjb25zdCBzdW1YID0gZGF0YS5yZWR1Y2UoKHN1bSwgcG9pbnQpID0+IHN1bSArIHBvaW50LngsIDApO1xuICAgIGNvbnN0IHN1bVkgPSBkYXRhLnJlZHVjZSgoc3VtLCBwb2ludCkgPT4gc3VtICsgcG9pbnQueSwgMCk7XG4gICAgY29uc3Qgc3VtWFkgPSBkYXRhLnJlZHVjZSgoc3VtLCBwb2ludCkgPT4gc3VtICsgcG9pbnQueCAqIHBvaW50LnksIDApO1xuICAgIGNvbnN0IHN1bVhYID0gZGF0YS5yZWR1Y2UoKHN1bSwgcG9pbnQpID0+IHN1bSArIHBvaW50LnggKiBwb2ludC54LCAwKTtcblxuICAgIGNvbnN0IHNsb3BlID0gKG4gKiBzdW1YWSAtIHN1bVggKiBzdW1ZKSAvIChuICogc3VtWFggLSBzdW1YICogc3VtWCk7XG4gICAgY29uc3QgaW50ZXJjZXB0ID0gKHN1bVkgLSBzbG9wZSAqIHN1bVgpIC8gbjtcblxuICAgIHJldHVybiBbXG4gICAgICB7IHg6IDAsIHk6IGludGVyY2VwdCB9LFxuICAgICAgeyB4OiAxMDAsIHk6IHNsb3BlICogMTAwICsgaW50ZXJjZXB0IH1cbiAgICBdO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgbmV3RGF0YSA9IGdlbmVyYXRlRGF0YShjb3JyZWxhdGlvbik7XG4gICAgc2V0RGF0YShuZXdEYXRhKTtcbiAgICBzZXRSZWdyZXNzaW9uTGluZShjYWxjdWxhdGVSZWdyZXNzaW9uTGluZShuZXdEYXRhKSk7XG4gIH0sIFtjb3JyZWxhdGlvbl0pO1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlS2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBsZXQgdmFsdWUgPSBwYXJzZUZsb2F0KGlucHV0VmFsdWUpO1xuICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICB2YWx1ZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodmFsdWUgPCAtMSkge1xuICAgICAgICAgIHZhbHVlID0gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPiAxKSB7XG4gICAgICAgICAgdmFsdWUgPSAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YWx1ZSA9IE1hdGgucm91bmQodmFsdWUgKiAxMDApIC8gMTAwOyAvLyBSb3VuZCB0byAyIGRlY2ltYWwgcGxhY2VzXG4gICAgICBzZXRDb3JyZWxhdGlvbih2YWx1ZSk7XG4gICAgICBzZXRJbnB1dFZhbHVlKHZhbHVlLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRDb3JyZWxhdGlvbkRlc2NyaXB0aW9uID0gKGNvcnI6IG51bWJlcikgPT4ge1xuICAgIGlmIChjb3JyID09PSAwKSByZXR1cm4gXCJObyBjb3JyZWxhdGlvblwiO1xuICAgIGlmIChjb3JyID4gMC43KSByZXR1cm4gXCJTdHJvbmcgcG9zaXRpdmUgY29ycmVsYXRpb25cIjtcbiAgICBpZiAoY29yciA+IDAuMykgcmV0dXJuIFwiTW9kZXJhdGUgcG9zaXRpdmUgY29ycmVsYXRpb25cIjtcbiAgICBpZiAoY29yciA+IDApIHJldHVybiBcIldlYWsgcG9zaXRpdmUgY29ycmVsYXRpb25cIjtcbiAgICBpZiAoY29yciA8IC0wLjcpIHJldHVybiBcIlN0cm9uZyBuZWdhdGl2ZSBjb3JyZWxhdGlvblwiO1xuICAgIGlmIChjb3JyIDwgLTAuMykgcmV0dXJuIFwiTW9kZXJhdGUgbmVnYXRpdmUgY29ycmVsYXRpb25cIjtcbiAgICByZXR1cm4gXCJXZWFrIG5lZ2F0aXZlIGNvcnJlbGF0aW9uXCI7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLWJyIGZyb20tYmx1ZS0xMDAgdG8tcHVycGxlLTEwMCByb3VuZGVkLXhsIHNoYWRvdy1sZyBtYXgtdy00eGwgbXgtYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZC1sZyBzaGFkb3ctbWQgbWItNlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1iLTRcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSB0ZXh0LWluZGlnby03MDAgbXItNFwiIGh0bWxGb3I9XCJjb3JyZWxhdGlvbi1pbnB1dFwiPlxuICAgICAgICAgICAgU2V0IENvcnJlbGF0aW9uIENvZWZmaWNpZW50OlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGlkPVwiY29ycmVsYXRpb24taW5wdXRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgIG9uS2V5RG93bj17aGFuZGxlS2V5RG93bn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0yMCBweC0yIHB5LTEgdGV4dC1ncmF5LTcwMCBib3JkZXIgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLWluZGlnby01MDAgdGV4dC1jZW50ZXIgdGV4dC1sZ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwIG1iLTRcIj5cbiAgICAgICAgICBFbnRlciBhIHZhbHVlIGJldHdlZW4gLTEgYW5kIDEsIHRoZW4gcHJlc3MgRW50ZXIgdG8gdXBkYXRlIHRoZSBjaGFydC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICA8UmVzcG9uc2l2ZUNvbnRhaW5lciB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9ezQwMH0+XG4gICAgICAgICAgICA8U2NhdHRlckNoYXJ0IG1hcmdpbj17eyB0b3A6IDIwLCByaWdodDogNDAsIGJvdHRvbTogMjAsIGxlZnQ6IDAgfX0+XG4gICAgICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIHN0cm9rZT1cIiNhMGFlYzBcIiAvPlxuICAgICAgICAgICAgICA8WEF4aXMgdHlwZT1cIm51bWJlclwiIGRhdGFLZXk9XCJ4XCIgbmFtZT1cIlZhcmlhYmxlIFhcIiBzdHJva2U9XCIjNGE1NTY4XCIgdGljaz17e2ZpbGw6ICd0cmFuc3BhcmVudCd9fSAvPlxuICAgICAgICAgICAgICA8WUF4aXMgdHlwZT1cIm51bWJlclwiIGRhdGFLZXk9XCJ5XCIgbmFtZT1cIlZhcmlhYmxlIFlcIiBzdHJva2U9XCIjNGE1NTY4XCIgdGljaz17e2ZpbGw6ICd0cmFuc3BhcmVudCd9fSAvPlxuICAgICAgICAgICAgICA8WkF4aXMgdHlwZT1cIm51bWJlclwiIHJhbmdlPXtbMjBdfSAvPlxuICAgICAgICAgICAgICA8VG9vbHRpcCBjdXJzb3I9e3sgc3Ryb2tlRGFzaGFycmF5OiAnMyAzJyB9fSAvPlxuICAgICAgICAgICAgICA8U2NhdHRlciBcbiAgICAgICAgICAgICAgICBuYW1lPVwiRGF0YSBQb2ludHNcIiBcbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfSBcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzdDM0FFRFwiXG4gICAgICAgICAgICAgICAgY3Vyc29yPVwicG9pbnRlclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxMaW5lIFxuICAgICAgICAgICAgICAgIHR5cGU9XCJsaW5lYXJcIiBcbiAgICAgICAgICAgICAgICBkYXRhS2V5PVwieVwiIFxuICAgICAgICAgICAgICAgIGRhdGE9e3JlZ3Jlc3Npb25MaW5lfSBcbiAgICAgICAgICAgICAgICBzdHJva2U9XCIjRUY0NDQ0XCIgXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezN9XG4gICAgICAgICAgICAgICAgZG90PXtmYWxzZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvU2NhdHRlckNoYXJ0PlxuICAgICAgICAgIDwvUmVzcG9uc2l2ZUNvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWluZGlnby02MDBcIj5cbiAgICAgICAgICAgICAge2dldENvcnJlbGF0aW9uRGVzY3JpcHRpb24oY29ycmVsYXRpb24pfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAucmVjaGFydHMtc2NhdHRlci1zeW1ib2wge1xuICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIC5yZWNoYXJ0cy1zY2F0dGVyLXN5bWJvbDpob3ZlciB7XG4gICAgICAgICAgZmlsbDogIzVCMjFCNjtcbiAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29ycmVsYXRpb25FeHBsb3JlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiU2NhdHRlckNoYXJ0IiwiU2NhdHRlciIsIlhBeGlzIiwiWUF4aXMiLCJaQXhpcyIsIkNhcnRlc2lhbkdyaWQiLCJUb29sdGlwIiwiUmVzcG9uc2l2ZUNvbnRhaW5lciIsIkxpbmUiLCJDb3JyZWxhdGlvbkV4cGxvcmVyIiwiY29ycmVsYXRpb24iLCJzZXRDb3JyZWxhdGlvbiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwiZGF0YSIsInNldERhdGEiLCJyZWdyZXNzaW9uTGluZSIsInNldFJlZ3Jlc3Npb25MaW5lIiwiZ2VuZXJhdGVEYXRhIiwibiIsInJlc3VsdCIsImkiLCJ4IiwiTWF0aCIsInJhbmRvbSIsInlNZWFuIiwiYWJzIiwieVN0ZCIsInNxcnQiLCJ5IiwicHVzaCIsImNhbGN1bGF0ZVJlZ3Jlc3Npb25MaW5lIiwibGVuZ3RoIiwic3VtWCIsInJlZHVjZSIsInN1bSIsInBvaW50Iiwic3VtWSIsInN1bVhZIiwic3VtWFgiLCJzbG9wZSIsImludGVyY2VwdCIsIm5ld0RhdGEiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUtleURvd24iLCJrZXkiLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJyb3VuZCIsInRvU3RyaW5nIiwiZ2V0Q29ycmVsYXRpb25EZXNjcmlwdGlvbiIsImNvcnIiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsIm9uQ2hhbmdlIiwib25LZXlEb3duIiwicCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Iiwic3Ryb2tlRGFzaGFycmF5Iiwic3Ryb2tlIiwiZGF0YUtleSIsIm5hbWUiLCJ0aWNrIiwiZmlsbCIsInJhbmdlIiwiY3Vyc29yIiwic3Ryb2tlV2lkdGgiLCJkb3QiLCJzcGFuIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./components/CorrelationExplorer.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),\n/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),\n/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),\n/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),\n/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),\n/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),\n/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),\n/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages/module.compiled */ \"(pages-dir-node)/./node_modules/next/dist/server/route-modules/pages/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(pages-dir-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(pages-dir-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! private-next-pages/_document */ \"(pages-dir-node)/./node_modules/next/dist/pages/_document.js\");\n/* harmony import */ var private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-pages/_app */ \"(pages-dir-node)/./pages/_app.tsx\");\n/* harmony import */ var _pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/index.tsx */ \"(pages-dir-node)/./pages/index.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);\n_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the app and document modules.\n\n\n// Import the userland code.\n\n// Re-export the component (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));\n// Re-export methods.\nconst getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');\nconst getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');\nconst getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');\nconst reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');\n// Re-export legacy methods.\nconst unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');\nconst unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');\nconst unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');\nconst unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');\nconst unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,\n        page: \"/index\",\n        pathname: \"/\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    components: {\n        // default export might not exist when optimized for data only\n        App: private_next_pages_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        Document: (private_next_pages_document__WEBPACK_IMPORTED_MODULE_3___default())\n    },\n    userland: _pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__\n});\n\n//# sourceMappingURL=pages.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVMmcGFnZT0lMkYmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyUyRmluZGV4LnRzeCZhYnNvbHV0ZUFwcFBhdGg9cHJpdmF0ZS1uZXh0LXBhZ2VzJTJGX2FwcCZhYnNvbHV0ZURvY3VtZW50UGF0aD1wcml2YXRlLW5leHQtcGFnZXMlMkZfZG9jdW1lbnQmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdGO0FBQ2hDO0FBQ0U7QUFDMUQ7QUFDeUQ7QUFDVjtBQUMvQztBQUM4QztBQUM5QztBQUNBLGlFQUFlLHdFQUFLLENBQUMsNkNBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sdUJBQXVCLHdFQUFLLENBQUMsNkNBQVE7QUFDckMsdUJBQXVCLHdFQUFLLENBQUMsNkNBQVE7QUFDckMsMkJBQTJCLHdFQUFLLENBQUMsNkNBQVE7QUFDekMsZUFBZSx3RUFBSyxDQUFDLDZDQUFRO0FBQzdCLHdCQUF3Qix3RUFBSyxDQUFDLDZDQUFRO0FBQzdDO0FBQ08sZ0NBQWdDLHdFQUFLLENBQUMsNkNBQVE7QUFDOUMsZ0NBQWdDLHdFQUFLLENBQUMsNkNBQVE7QUFDOUMsaUNBQWlDLHdFQUFLLENBQUMsNkNBQVE7QUFDL0MsZ0NBQWdDLHdFQUFLLENBQUMsNkNBQVE7QUFDOUMsb0NBQW9DLHdFQUFLLENBQUMsNkNBQVE7QUFDekQ7QUFDTyx3QkFBd0Isa0dBQWdCO0FBQy9DO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLDhEQUFXO0FBQ3hCLGtCQUFrQixvRUFBZ0I7QUFDbEMsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELGlDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvcGFnZXMvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgYXBwIGFuZCBkb2N1bWVudCBtb2R1bGVzLlxuaW1wb3J0ICogYXMgZG9jdW1lbnQgZnJvbSBcInByaXZhdGUtbmV4dC1wYWdlcy9fZG9jdW1lbnRcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHBcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzL2luZGV4LnRzeFwiO1xuLy8gUmUtZXhwb3J0IHRoZSBjb21wb25lbnQgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsICdkZWZhdWx0Jyk7XG4vLyBSZS1leHBvcnQgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAnZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBob2lzdCh1c2VybGFuZCwgJ2dldFNlcnZlclNpZGVQcm9wcycpO1xuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCAnY29uZmlnJyk7XG5leHBvcnQgY29uc3QgcmVwb3J0V2ViVml0YWxzID0gaG9pc3QodXNlcmxhbmQsICdyZXBvcnRXZWJWaXRhbHMnKTtcbi8vIFJlLWV4cG9ydCBsZWdhY3kgbWV0aG9kcy5cbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUHJvcHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXRocyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U3RhdGljUGF0aHMnKTtcbmV4cG9ydCBjb25zdCB1bnN0YWJsZV9nZXRTdGF0aWNQYXJhbXMgPSBob2lzdCh1c2VybGFuZCwgJ3Vuc3RhYmxlX2dldFN0YXRpY1BhcmFtcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclByb3BzID0gaG9pc3QodXNlcmxhbmQsICd1bnN0YWJsZV9nZXRTZXJ2ZXJQcm9wcycpO1xuZXhwb3J0IGNvbnN0IHVuc3RhYmxlX2dldFNlcnZlclNpZGVQcm9wcyA9IGhvaXN0KHVzZXJsYW5kLCAndW5zdGFibGVfZ2V0U2VydmVyU2lkZVByb3BzJyk7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc1JvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFUyxcbiAgICAgICAgcGFnZTogXCIvaW5kZXhcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgLy8gZGVmYXVsdCBleHBvcnQgbWlnaHQgbm90IGV4aXN0IHdoZW4gb3B0aW1pemVkIGZvciBkYXRhIG9ubHlcbiAgICAgICAgQXBwOiBhcHAuZGVmYXVsdCxcbiAgICAgICAgRG9jdW1lbnQ6IGRvY3VtZW50LmRlZmF1bHRcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL19hcHAudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0s7QUFHOUIsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUMvQyxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FkcmlhbnNhbG1vbi9BZHJpYW4tU2FsbW9uLUludGVyYWN0aXZlcy9jb3JyZWxhdGlvbi1jb2VmZmljaWVudC9wYWdlcy9fYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcCAiXSwibmFtZXMiOlsiUmVhY3QiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CorrelationExplorer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CorrelationExplorer */ \"(pages-dir-node)/./components/CorrelationExplorer.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_CorrelationExplorer__WEBPACK_IMPORTED_MODULE_2__]);\n_components_CorrelationExplorer__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen py-6 flex flex-col justify-center sm:py-12\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative py-3 sm:max-w-xl sm:mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CorrelationExplorer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/pages/index.tsx\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/pages/index.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/adriansalmon/Adrian-Salmon-Interactives/correlation-coefficient/pages/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3BhZ2VzL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQzBDO0FBRXBELFNBQVNFO0lBQ3RCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDSCx1RUFBbUJBOzs7Ozs7Ozs7Ozs7Ozs7QUFJNUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5zYWxtb24vQWRyaWFuLVNhbG1vbi1JbnRlcmFjdGl2ZXMvY29ycmVsYXRpb24tY29lZmZpY2llbnQvcGFnZXMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDb3JyZWxhdGlvbkV4cGxvcmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQ29ycmVsYXRpb25FeHBsb3JlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBweS02IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgc206cHktMTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMyBzbTptYXgtdy14bCBzbTpteC1hdXRvXCI+XG4gICAgICAgIDxDb3JyZWxhdGlvbkV4cGxvcmVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJDb3JyZWxhdGlvbkV4cGxvcmVyIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(pages-dir-node)/./pages/index.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "(pages-dir-node)/__barrel_optimize__?names=CartesianGrid,Line,ResponsiveContainer,Scatter,ScatterChart,Tooltip,XAxis,YAxis,ZAxis!=!./node_modules/recharts/es6/index.js":
/*!**************************************************************************************************************************************************************!*\
  !*** __barrel_optimize__?names=CartesianGrid,Line,ResponsiveContainer,Scatter,ScatterChart,Tooltip,XAxis,YAxis,ZAxis!=!./node_modules/recharts/es6/index.js ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartesianGrid: () => (/* reexport safe */ _cartesian_CartesianGrid__WEBPACK_IMPORTED_MODULE_0__.CartesianGrid),\n/* harmony export */   Line: () => (/* reexport safe */ _cartesian_Line__WEBPACK_IMPORTED_MODULE_1__.Line),\n/* harmony export */   ResponsiveContainer: () => (/* reexport safe */ _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContainer),\n/* harmony export */   Scatter: () => (/* reexport safe */ _cartesian_Scatter__WEBPACK_IMPORTED_MODULE_3__.Scatter),\n/* harmony export */   ScatterChart: () => (/* reexport safe */ _chart_ScatterChart__WEBPACK_IMPORTED_MODULE_4__.ScatterChart),\n/* harmony export */   Tooltip: () => (/* reexport safe */ _component_Tooltip__WEBPACK_IMPORTED_MODULE_5__.Tooltip),\n/* harmony export */   XAxis: () => (/* reexport safe */ _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_6__.XAxis),\n/* harmony export */   YAxis: () => (/* reexport safe */ _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_7__.YAxis),\n/* harmony export */   ZAxis: () => (/* reexport safe */ _cartesian_ZAxis__WEBPACK_IMPORTED_MODULE_8__.ZAxis)\n/* harmony export */ });\n/* harmony import */ var _cartesian_CartesianGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartesian/CartesianGrid */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/CartesianGrid.js\");\n/* harmony import */ var _cartesian_Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartesian/Line */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/Line.js\");\n/* harmony import */ var _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/ResponsiveContainer */ \"(pages-dir-node)/./node_modules/recharts/es6/component/ResponsiveContainer.js\");\n/* harmony import */ var _cartesian_Scatter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cartesian/Scatter */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/Scatter.js\");\n/* harmony import */ var _chart_ScatterChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/ScatterChart */ \"(pages-dir-node)/./node_modules/recharts/es6/chart/ScatterChart.js\");\n/* harmony import */ var _component_Tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/Tooltip */ \"(pages-dir-node)/./node_modules/recharts/es6/component/Tooltip.js\");\n/* harmony import */ var _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cartesian/XAxis */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/XAxis.js\");\n/* harmony import */ var _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cartesian/YAxis */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/YAxis.js\");\n/* harmony import */ var _cartesian_ZAxis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cartesian/ZAxis */ \"(pages-dir-node)/./node_modules/recharts/es6/cartesian/ZAxis.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_cartesian_CartesianGrid__WEBPACK_IMPORTED_MODULE_0__, _cartesian_Line__WEBPACK_IMPORTED_MODULE_1__, _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__, _cartesian_Scatter__WEBPACK_IMPORTED_MODULE_3__, _chart_ScatterChart__WEBPACK_IMPORTED_MODULE_4__, _component_Tooltip__WEBPACK_IMPORTED_MODULE_5__, _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_6__, _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_7__]);\n([_cartesian_CartesianGrid__WEBPACK_IMPORTED_MODULE_0__, _cartesian_Line__WEBPACK_IMPORTED_MODULE_1__, _component_ResponsiveContainer__WEBPACK_IMPORTED_MODULE_2__, _cartesian_Scatter__WEBPACK_IMPORTED_MODULE_3__, _chart_ScatterChart__WEBPACK_IMPORTED_MODULE_4__, _component_Tooltip__WEBPACK_IMPORTED_MODULE_5__, _cartesian_XAxis__WEBPACK_IMPORTED_MODULE_6__, _cartesian_YAxis__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS9fX2JhcnJlbF9vcHRpbWl6ZV9fP25hbWVzPUNhcnRlc2lhbkdyaWQsTGluZSxSZXNwb25zaXZlQ29udGFpbmVyLFNjYXR0ZXIsU2NhdHRlckNoYXJ0LFRvb2x0aXAsWEF4aXMsWUF4aXMsWkF4aXMhPSEuL25vZGVfbW9kdWxlcy9yZWNoYXJ0cy9lczYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN5RDtBQUNsQjtBQUM4QjtBQUN4QjtBQUNNO0FBQ047QUFDSjtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvYWRyaWFuc2FsbW9uL0Fkcmlhbi1TYWxtb24tSW50ZXJhY3RpdmVzL2NvcnJlbGF0aW9uLWNvZWZmaWNpZW50L25vZGVfbW9kdWxlcy9yZWNoYXJ0cy9lczYvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgeyBDYXJ0ZXNpYW5HcmlkIH0gZnJvbSBcIi4vY2FydGVzaWFuL0NhcnRlc2lhbkdyaWRcIlxuZXhwb3J0IHsgTGluZSB9IGZyb20gXCIuL2NhcnRlc2lhbi9MaW5lXCJcbmV4cG9ydCB7IFJlc3BvbnNpdmVDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnQvUmVzcG9uc2l2ZUNvbnRhaW5lclwiXG5leHBvcnQgeyBTY2F0dGVyIH0gZnJvbSBcIi4vY2FydGVzaWFuL1NjYXR0ZXJcIlxuZXhwb3J0IHsgU2NhdHRlckNoYXJ0IH0gZnJvbSBcIi4vY2hhcnQvU2NhdHRlckNoYXJ0XCJcbmV4cG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiLi9jb21wb25lbnQvVG9vbHRpcFwiXG5leHBvcnQgeyBYQXhpcyB9IGZyb20gXCIuL2NhcnRlc2lhbi9YQXhpc1wiXG5leHBvcnQgeyBZQXhpcyB9IGZyb20gXCIuL2NhcnRlc2lhbi9ZQXhpc1wiXG5leHBvcnQgeyBaQXhpcyB9IGZyb20gXCIuL2NhcnRlc2lhbi9aQXhpc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/__barrel_optimize__?names=CartesianGrid,Line,ResponsiveContainer,Scatter,ScatterChart,Tooltip,XAxis,YAxis,ZAxis!=!./node_modules/recharts/es6/index.js\n");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ "eventemitter3":
/*!********************************!*\
  !*** external "eventemitter3" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("eventemitter3");

/***/ }),

/***/ "lodash/every":
/*!*******************************!*\
  !*** external "lodash/every" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/every");

/***/ }),

/***/ "lodash/find":
/*!******************************!*\
  !*** external "lodash/find" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/find");

/***/ }),

/***/ "lodash/flatMap":
/*!*********************************!*\
  !*** external "lodash/flatMap" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/flatMap");

/***/ }),

/***/ "lodash/get":
/*!*****************************!*\
  !*** external "lodash/get" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/get");

/***/ }),

/***/ "lodash/isBoolean":
/*!***********************************!*\
  !*** external "lodash/isBoolean" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isBoolean");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ "lodash/isFunction":
/*!************************************!*\
  !*** external "lodash/isFunction" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isFunction");

/***/ }),

/***/ "lodash/isNaN":
/*!*******************************!*\
  !*** external "lodash/isNaN" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNaN");

/***/ }),

/***/ "lodash/isNil":
/*!*******************************!*\
  !*** external "lodash/isNil" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNil");

/***/ }),

/***/ "lodash/isNumber":
/*!**********************************!*\
  !*** external "lodash/isNumber" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNumber");

/***/ }),

/***/ "lodash/isObject":
/*!**********************************!*\
  !*** external "lodash/isObject" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject");

/***/ }),

/***/ "lodash/isPlainObject":
/*!***************************************!*\
  !*** external "lodash/isPlainObject" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isPlainObject");

/***/ }),

/***/ "lodash/isString":
/*!**********************************!*\
  !*** external "lodash/isString" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isString");

/***/ }),

/***/ "lodash/last":
/*!******************************!*\
  !*** external "lodash/last" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/last");

/***/ }),

/***/ "lodash/mapValues":
/*!***********************************!*\
  !*** external "lodash/mapValues" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/mapValues");

/***/ }),

/***/ "lodash/max":
/*!*****************************!*\
  !*** external "lodash/max" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/max");

/***/ }),

/***/ "lodash/memoize":
/*!*********************************!*\
  !*** external "lodash/memoize" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/memoize");

/***/ }),

/***/ "lodash/min":
/*!*****************************!*\
  !*** external "lodash/min" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/min");

/***/ }),

/***/ "lodash/range":
/*!*******************************!*\
  !*** external "lodash/range" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/range");

/***/ }),

/***/ "lodash/some":
/*!******************************!*\
  !*** external "lodash/some" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/some");

/***/ }),

/***/ "lodash/sortBy":
/*!********************************!*\
  !*** external "lodash/sortBy" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/sortBy");

/***/ }),

/***/ "lodash/throttle":
/*!**********************************!*\
  !*** external "lodash/throttle" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/throttle");

/***/ }),

/***/ "lodash/uniqBy":
/*!********************************!*\
  !*** external "lodash/uniqBy" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/uniqBy");

/***/ }),

/***/ "lodash/upperFirst":
/*!************************************!*\
  !*** external "lodash/upperFirst" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/upperFirst");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react-smooth":
/*!*******************************!*\
  !*** external "react-smooth" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-smooth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "recharts-scale":
/*!*********************************!*\
  !*** external "recharts-scale" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("recharts-scale");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "tiny-invariant":
/*!*********************************!*\
  !*** external "tiny-invariant" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("tiny-invariant");;

/***/ }),

/***/ "victory-vendor/d3-scale":
/*!******************************************!*\
  !*** external "victory-vendor/d3-scale" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("victory-vendor/d3-scale");

/***/ }),

/***/ "victory-vendor/d3-shape":
/*!******************************************!*\
  !*** external "victory-vendor/d3-shape" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("victory-vendor/d3-shape");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/recharts"], () => (__webpack_exec__("(pages-dir-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2F&preferredRegion=&absolutePagePath=.%2Fpages%2Findex.tsx&absoluteAppPath=private-next-pages%2F_app&absoluteDocumentPath=private-next-pages%2F_document&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();