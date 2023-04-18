(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208ffa"],{a6d3:function(e,t,o){"use strict";o.r(t);var i=function(){var e=this;e._self._c;return e._m(0)},n=[function(){var e=this,t=e._self._c;return t("div",[t("h1",[e._v("Changelog")]),t("h2",[e._v("0.5.5")]),t("p",[e._v("New: 1.Supports configuring the padding when exporting to PNG, SVG, or PDF. 2.Support the configuration of z-index for node text editing boxes and node comment floating layer elements. 3.Support clicking on areas outside the canvas to end node editing status.")]),t("h2",[e._v("0.5.4")]),t("p",[e._v("New: 1.Add new themes. 2.Added timeline and fishbone structure.")]),t("p",[e._v("Fix: 1.Fix the conflict issue between node right-click and canvas right-click. 2.Fix the bug that the line segment is not hidden when dragging nodes such as organizational chart and directory organization chart.")]),t("p",[e._v("optimization: 1.Optimize the layout of organizational chart. 2.Optimize the layout of the directory organization chart.")]),t("h2",[e._v("0.5.4-fix.1")]),t("p",[e._v("optimization: 1.Optimize fishbone layout.")]),t("h2",[e._v("0.5.3")]),t("p",[e._v("Fix: 1.Fixed the issue of setting the text style when multiple nodes were selected in rich text mode, which would change the text of all selected nodes to the text of the last selected node.")]),t("p",[e._v("New: 1.Support setting the position of the initial central node.")]),t("h3",[e._v("0.5.3-fix.1")]),t("p",[e._v("Fix: 1.Fix the issue where setting the position of the initial central node does not take effect.")]),t("h3",[e._v("0.5.3-fix.2")]),t("p",[e._v("Fix: 1.Fix the issue of not displaying images in nodes when exporting as images.")]),t("h2",[e._v("0.5.2")]),t("p",[e._v("Fix: 1.Remove "),t("code",[e._v("uid")]),e._v(" from exported "),t("code",[e._v("JSON")]),e._v(" data; 2.Clear the node cache pool when re rendering.")]),t("h2",[e._v("0.5.1")]),t("p",[e._v("optimization: 1.Only respond to shortcut key events when the mouse is inside the canvas")]),t("p",[e._v("Fix: 1.Fix the issue of incorrect node position during fast operation")]),t("h2",[e._v("0.5.0")]),t("p",[e._v("This version is mainly about code level changes and optimization, with the core goal of improving rendering performance and reducing stuck issues.")]),t("p",[e._v("New: 1.Support custom expansion and collapse node icons and colors;")]),t("p",[e._v("optimization: 1.Optimize rendering logic, set the theme, move forward and backward, and other operations no longer require full rendering;")]),t("pre",[t("code",[e._v(" 2.Optimize node drag logic, and fix the problem of being unable to drag between two nodes;\n\n 3.Collapse all nodes adds logic to return to the center point;\n\n 4.Fix the problem of nodes flying and scrambling caused by triggering rendering multiple times in a short time;\n\n 5.Optimize the experience of node editing;\n")])]),t("p",[e._v("Fix: 1.Fix the issue where the setData method does not trigger history;")]),t("p",[e._v("modify: Starting from version 0.5.0, considering performance issues, the node activation state can only modify shape related styles:")]),t("pre",{staticClass:"hljs"},[t("code",[e._v("[\n  "),t("span",{staticClass:"hljs-string"},[e._v("'fillColor'")]),e._v(",\n  "),t("span",{staticClass:"hljs-string"},[e._v("'borderColor'")]),e._v(",\n  "),t("span",{staticClass:"hljs-string"},[e._v("'borderWidth'")]),e._v(",\n  "),t("span",{staticClass:"hljs-string"},[e._v("'borderDasharray'")]),e._v(",\n  "),t("span",{staticClass:"hljs-string"},[e._v("'borderRadius'")]),e._v("\n]\n")])]),t("h2",[e._v("0.4.7")]),t("p",[e._v("optimization: 1.During rich text editing, when initially focusing, all are no longer selected by default; 2.When editing rich text, use the node fill color as the background color to avoid being invisible when the node color is white. 3.Node activation state switching no longer triggers history. 4.Triggering history multiple times in a short time will only add the last data. 5.Optimize the addition of historical records. When there is a rollback, delete the historical data after the current pointer when adding a new record again.")]),t("p",[e._v("New: 1.Support for importing and exporting Markdown format files. 2.Support for configuring initial text when inserting nodes. 3.Expand the commands for inserting and deleting nodes to support specifying nodes.")]),t("h2",[e._v("0.4.6")]),t("p",[e._v("New: 1.Associated lines support adjusting control points.")]),t("p",[e._v("optimization: 1.When adding historical data, filter data that has not changed compared to the previous time.")]),t("p",[e._v("Fix: 1.Fixed a conflict between the direction keys and the navigation function of the direction keys during node editing. 2.Fixed the issue of node id loss when dragging a mobile node, which can cause associated lines to be lost.")]),t("h2",[e._v("0.4.5")]),t("p",[e._v("New: 1.Supports associative lines. 2.You can also drag the canvas by holding down the root node. 3. Hold down the ctrl key to adjust multiple selected nodes.")]),t("h2",[e._v("0.4.4")]),t("p",[e._v("New: Support horizontal scrolling in response to the mouse.")]),t("h2",[e._v("0.4.3")]),t("p",[e._v("Fix: No trigger after forward and backward "),t("code",[e._v("data_ Change")]),e._v(" event.")]),t("p",[e._v("New: Support user-defined mouse wheel events; The mouse wheel is adjusted to support zooming and moving the view up and down.")]),t("h2",[e._v("0.4.2")]),t("p",[e._v("New: The "),t("code",[e._v("setText")]),e._v(" method of the Node class adds a second parameter to support setting rich text content.")]),t("h2",[e._v("0.4.1")]),t("p",[e._v("New: 1.Add and throw node mouseenter and mouseleave events; 2.Node rich text supports setting background color; 3.Node rich text supports clear style.")]),t("p",[e._v("Fix: 1.Mac system touchpad scaling is the opposite problem; 2.When the device window.devicePixelRatio is not 1, the size of the rich text node in the exported image will become larger when there are rich text nodes.")]),t("h2",[e._v("0.4.0")]),t("p",[e._v("New: The node supports rich text editing.")]),t("h2",[e._v("0.3.4")]),t("p",[e._v("New: Automatic line wrapping function is added to node text.")]),t("p",[e._v("Fix: 1.Fix the problem of deletion exceptions if there are root nodes in the batch deleted nodes. 2.Fix the problem that high node height will overlap with other nodes in the case of bottom edge style.")]),t("h2",[e._v("0.3.3")]),t("p",[e._v("Fix: The root node text cannot wrap.")]),t("h2",[e._v("0.3.2")]),t("p",[e._v("Fix: 1.Fix the problem that the node style is not updated when the secondary node is dragged to other nodes or other nodes are dragged to the secondary node; 2.Fix the problem that when the actual content of the mind map is larger than the screen width and height, the excess part is not watermarked when exporting.")]),t("h2",[e._v("0.3.1")]),t("p",[e._v("Fix: 1.The problem that deleting the background image does not take effect; 2.The problem that the connector runs above the root node when the node is dragged to the root node.")]),t("p",[e._v("New: Add position and size settings for background image display. This setting is also supported for exported pictures.")]),t("h2",[e._v("0.3.0")]),t("p",[e._v("Upgrade to plugin architecture, pull out some non-core functions as plugins, register as needed, and reduce the overall volume.")]),t("h2",[e._v("0.2.24")]),t("p",[e._v("New: Node free drag is changed to configurable, the default is "),t("code",[e._v("false")]),e._v(", not open; Support add watermark.")]),t("h2",[e._v("0.2.23")]),t("p",[e._v("New: Support register new theme.")]),t("h2",[e._v("0.2.22")]),t("p",[e._v("optimization：The theme and structure pictures of the built-in "),t("code",[e._v("simple-mind-map")]),e._v(" package are removed and replaced by user self-maintenance. The original pictures can be found in the "),t("code",[e._v("web/assets/img/")]),e._v(" directory.")]),t("h2",[e._v("0.2.21")]),t("p",[e._v("New: Support node horizontal line style.")]),t("h2",[e._v("0.2.20")]),t("p",[e._v("fix：When the distance from the canvas to the upper left corner of the window is not 0, the node dragging will have an offset problem.")]),t("h2",[e._v("0.2.19")]),t("p",[e._v("fix：When the node is not activated, pressing any key will trigger the problem of automatic focus.")]),t("h2",[e._v("0.2.18")]),t("p",[e._v("optimization：Keyboard navigation algorithm for finding focus, supporting simple algorithm, region algorithm and shadow algorithm.")]),t("h2",[e._v("0.2.17")]),t("p",[e._v("New：Keyboard navigation, that is, switch the active nodes through the direction keys; The node text content can be edited directly in the outline.")]),t("h2",[e._v("0.2.16")]),t("p",[e._v("optimization：Mini map; drag performance.")]),t("h2",[e._v("0.2.15")]),t("p",[e._v("optimization：Local file editing.")]),t("p",[e._v("New：Double-click the image in the node to preview the large image.")]),t("h2",[e._v("0.2.14")]),t("p",[e._v("optimization：Automatically expand when inserting child nodes.")]),t("p",[e._v("fix：The error occurred when the mini map was closed.")]),t("h2",[e._v("0.2.13")]),t("p",[e._v("fix：The child node is missing when collapsing state replication.")]),t("h2",[e._v("0.2.11")]),t("p",[e._v("fix：Fix the problem that is lost when the child node collapses state replication.")]),t("p",[e._v("New：Support mini map.")]),t("h2",[e._v("0.2.10")]),t("p",[e._v("optimization：Focus immediately when you manually create a node.")]),t("p",[e._v("fix：Connection style depth update problem.")]),t("p",[e._v("New：Logical structure diagram and mind map add linear connection style and direct connection style.")]),t("h2",[e._v("0.2.9")]),t("p",[e._v("New：Support the creation, opening and saving of local files on the computer.")]),t("h2",[e._v("0.2.8")]),t("p",[e._v("fix：Xmind8 version file import failed.")]),t("p",[e._v("New：Expanding to the specified level is supported.")]),t("h2",[e._v("0.2.7")]),t("p",[e._v("fix：The root node adds multiple nodes to burst the stack.")]),t("p",[e._v("New：Support import .xmind file.")]),t("h2",[e._v("0.2.6")]),t("p",[e._v("New：The title tag is added when exporting svg.")]),t("h2",[e._v("0.2.5")]),t("p",[e._v("fix：Bugs caused by node expansion and collapse.")]),t("p",[e._v("New：Node supports custom line styles.")]),t("h2",[e._v("0.2.4")]),t("p",[e._v("New：Nodes support multiple shapes.")]),t("h2",[e._v("0.2.3")]),t("p",[e._v("fix：Shortcut key conflicts when editing node text; Right-click menu shortcut prompt error; Right-click menu shortcut prompt.")]),t("h2",[e._v("0.2.2")]),t("p",[e._v("fix：The input string '/' conflicts with the shortcut key '/'.")]),t("h2",[e._v("0.2.1")]),t("p",[e._v("New：Support export as pdf.")]),t("h2",[e._v("0.2.0")]),t("p",[e._v("New：Classic4 theme；Support adding summary; Support free drag; Move Node Up, Move Node Down, Copy Node, Cut Node, Paste Node, One-click Organize Cloth Shortcut; Library packaging; Ctrl+left click to select multiple.")]),t("h2",[e._v("0.1.18")]),t("p",[e._v("fix：The problem that the node icon cannot be deleted; The tool button is grayed out and can still be clicked.")]),t("h2",[e._v("0.1.17")]),t("p",[e._v("New：Add read-only mode.")]),t("h2",[e._v("0.1.16")]),t("p",[e._v("New：Node notes support markdown and rich text.")]),t("p",[e._v("fix：Can't select text; Node annotations cannot hide problems after node activation; When editing text such as hyperlinks, notes, labels, etc., the return key and return key conflict with the shortcut key of mind map.")]),t("h2",[e._v("0.1.15")]),t("p",[e._v("New：The status data supports saving the active status and view status (drag position, zoom value)；Support node drag.")]),t("h2",[e._v("0.1.14")]),t("p",[e._v("fix：There are problems with setting topics when activating nodes.")]),t("h2",[e._v("0.1.13")]),t("p",[e._v("New：Shortcut key function; Support export as json。")]),t("p",[e._v("optimization：Some details.")]),t("h2",[e._v("0.1.12")]),t("p",[e._v("New：Local storage；Right-click menu function, etc.")]),t("h2",[e._v("0.1.0")]),t("p",[e._v("Complete basic functions.")])])}],a={},s=a,r=o("2877"),d=Object(r["a"])(s,i,n,!1,null,null,null);t["default"]=d.exports}}]);