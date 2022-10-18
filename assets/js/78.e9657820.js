(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{463:function(a,t,e){"use strict";e.r(t);var s=e(38),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[a._v("WARNING")]),a._v(" "),e("p",[a._v("Twill packages are new. If you found any issue please let us know by creating an issue.")])]),a._v(" "),e("h1",{attrs:{id:"creating-a-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-package"}},[a._v("#")]),a._v(" Creating a package")]),a._v(" "),e("p",[a._v("As mentioned in the introduction, a Twill package is at its core the same as a regular Laravel package.")]),a._v(" "),e("p",[a._v("If you are new to Laravel package development you can read more about it in the\n"),e("a",{attrs:{href:"https://laravel.com/docs/9.x/packages",target:"_blank",rel:"noopener noreferrer"}},[a._v("Laravel documentation"),e("OutboundLink")],1),a._v(".")]),a._v(" "),e("h2",{attrs:{id:"generating-your-first-twill-package"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generating-your-first-twill-package"}},[a._v("#")]),a._v(" Generating your first Twill package")]),a._v(" "),e("p",[a._v("To make it a bit easier to get started we made a command you can use to kickstart your Twill package.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan twill:make:package\n")])])]),e("p",[a._v("After filling in the questions, a package with a "),e("code",[a._v("composer.json")]),a._v(" and "),e("code",[a._v("TwillPackageServiceProvider")]),a._v(" will be created.")]),a._v(" "),e("p",[a._v("The package generate command provides instructions on how to install it while working on it locally.")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("Your package has been generated"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n\nYou can now "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" it to your project's "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" json repositories to work on it:\n\n"),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"repositories"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"type"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"path"')]),a._v(",\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"url"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./packages/twill-extension"')]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(",\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(",\n\nThen you can require it: "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("composer")]),a._v(" require area17/twill-extension\n\nBy default the package has no functionality, you can "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),a._v(" a first capsule using "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Replace YourModel with the model you want to use"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(":\n\nphp artisan twill:make:capsule YourModel --singleton --packageDirectory"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./packages/twill-extension --packageNamespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("TwillExtension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("YourModel\n\nEnjoy"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])]),e("p",[a._v("And that's it, your first package is now created and enabled for your twill installation.")]),a._v(" "),e("p",[a._v("It is however, still empty so lets add a module as the instructions mention:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("php artisan twill:make:capsule Project --packageDirectory"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("./packages/twill-extension --packageNamespace"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("TwillExtension"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Project\n")])])]),e("p",[a._v("The command above will create a capsule, if you want to create a singleton capsule you could use "),e("code",[a._v("php artisan twill:make:capsule --singleton")]),a._v(" instead.")]),a._v(" "),e("p",[a._v("Once this is done you already can go ahead and refresh your twill admin and the new\ncapsule should appear in the menu!")]),a._v(" "),e("p",[a._v("If you get an error when visiting, do not forget to run your database migrations.")]),a._v(" "),e("p",[a._v("And that's it! You can now make Twill packages with capsules!")])])}),[],!1,null,null,null);t.default=n.exports}}]);