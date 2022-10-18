(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{395:function(t,s,e){"use strict";e.r(s);var a=e(38),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"adding-browser-fields-to-a-block"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-browser-fields-to-a-block"}},[t._v("#")]),t._v(" Adding Browser Fields to a Block")]),t._v(" "),e("p",[t._v("To attach other records inside of a block, it is possible to use the "),e("code",[t._v("browser")]),t._v(" field.")]),t._v(" "),e("ul",[e("li",[t._v("In a block, use the "),e("code",[t._v("browser")]),t._v(" field:")])]),t._v(" "),e("p",[t._v("filename: "),e("code",[t._v("views/admin/blocks/products.blade.php")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("    @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("twillBlockTitle")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Products'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("formField")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'browser'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'routePrefix'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'moduleName'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'products'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'products'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'label'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Products'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'max'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("ul",[e("li",[t._v("If the module you are browsing is not at the root of your admin, you should use the "),e("code",[t._v("browser_route_prefixes")]),t._v(" array in the configuration in addition to "),e("code",[t._v("routePrefix")]),t._v(" in the form field declaration:")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("    "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'block_editor'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'browser_route_prefixes'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'products'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'shop'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),e("ul",[e("li",[t._v("When rendering the blocks on the frontend you can get the browser items selected in the block, by using the "),e("code",[t._v("browserIds")]),t._v(" helper to retrieve the selected items' ids, and then you may use Eloquent method like "),e("code",[t._v("find")]),t._v(" to get the actual records. Example in a blade template:")])]),t._v(" "),e("p",[t._v("filename: "),e("code",[t._v("views/site/blocks/blockWithBrowser.blade.php")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("    @"),e("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("php")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$selected_items_ids")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$block")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("browserIds")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'browserFieldName'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$items")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Item")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$selected_items_ids")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    @endphp\n")])])]),e("ul",[e("li",[t._v("When the browser field allows multiple modules/endpoints, you can also use the "),e("code",[t._v("getRelated")]),t._v(" function on the block:")])]),t._v(" "),e("p",[t._v("filename: "),e("code",[t._v("views/site/blocks/blockWithBrowser.blade.php")])]),t._v(" "),e("div",{staticClass:"language-php extra-class"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[t._v("    @"),e("span",{pre:!0,attrs:{class:"token class-name type-declaration"}},[t._v("php")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$selected_items")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$block")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRelated")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'browserFieldName'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    @endphp\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);