(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{168:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("ul",[s("li",[t._v("Install Komodo following the "),s("router-link",{attrs:{to:"./../installations/basic-instructions.html#installing-basic-komodo-software"}},[t._v("installation guides")]),t._v(" and change into the "),s("code",[t._v("komodod")]),t._v(" subdirectory using:")],1)]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("For a more detailed description of Jumblr, please read Section IV of our "),s("a",{attrs:{href:"https://komodoplatform.com/whitepaper",target:"_blank",rel:"noopener noreferrer"}},[t._v("whitepaper"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("Designate your deposit address.")]),t._v(" "),t._m(14),s("p",[t._v("Designate your secret destination address.")]),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("Command:")]),t._v(" "),t._m(25),s("p",[t._v("Response:")]),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),s("p",[t._v("Command:")]),t._v(" "),t._m(36),s("p",[t._v("Response:")]),t._v(" "),t._m(37),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),s("p",[t._v("Command:")]),t._v(" "),t._m(47),s("p",[t._v("Response:")]),t._v(" "),t._m(48),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),t._m(55),t._v(" "),t._m(56),t._v(" "),s("p",[t._v("Command:")]),t._v(" "),t._m(57),s("p",[t._v("Response:")]),t._v(" "),t._m(58)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"jumblr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumblr","aria-hidden":"true"}},[this._v("#")]),this._v(" Jumblr")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The following RPC calls interact with the "),e("code",[this._v("komodod")]),this._v(" software, and are made available through the "),e("code",[this._v("komodo-cli")]),this._v(" software.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"basic-instructions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-instructions","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Instructions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[this._v("cd")]),this._v(" ~/komodo/src\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Start the daemon:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./komodod "),e("span",{attrs:{class:"token operator"}},[this._v("&")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Designate a KMD address with at least 10.024 KMD funds:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./komodo-cli jumblr_deposit KMD_address\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("The jumblr process continues until there are less than ~ 10.024 KMD in the deposit address.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Designate a destination address for your funds. This should be a transparent address that you are keeping secret:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("komodo-cli jumblr_secret destination_KMD_address\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Leave your node running until the balance in your first address reaches below 10.024 KMD and the destination address receives the correct amount.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Jumblr is created to be resistant against time-based analysis. Because of this, Jumblr is purposefully designed not to be fast. You will need to leave your node running for several hours for the process to finish.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" 📌 Examples:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./komodo-cli jumblr_deposit RT4mSUjG35QeuGcedsfpHtP5MhDeEGTAqb\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./komodo-cli jumblr_secret RS46GZ5iTkt2exdauQG3JJ8fdnZNJUvAc1\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"jumblr-deposit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-deposit","aria-hidden":"true"}},[this._v("#")]),this._v(" jumblr_deposit")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v('jumblr_deposit "depositaddress"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("jubmlr_deposit")]),this._v(" method indicates the address from which Jumblr should withdraw funds. There should be at least 10.024 KMD in this address. Jumblr will withdraw funds in increments of 10, 100, or 7770 KMD.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("While shielded z_address technology is available on all KMD-based asset chains, the Jumblr engine and methods are only available on the KMD mainnet.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments","aria-hidden":"true"}},[this._v("#")]),this._v(" Arguments:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v('"depositaddress"')]),t._v(" "),s("td",[t._v("(string, required)")]),t._v(" "),s("td",[t._v("the address from which Jumblr will withdraw funds")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response","aria-hidden":"true"}},[this._v("#")]),this._v(" Response:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("(none)")]),t._v(" "),s("td"),t._v(" "),s("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2","aria-hidden":"true"}},[this._v("#")]),this._v(" 📌 Examples:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./komodo-cli jumblr_deposit RT4mSUjG35QeuGcedsfpHtP5MhDeEGTAqb\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),this._v("none"),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"jumblr-pause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-pause","aria-hidden":"true"}},[this._v("#")]),this._v(" jumblr_pause")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("jumblr_pause")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("jumblr_pause")]),this._v(" method instructs Jumblr to temporarily pause the privacy-shielding process.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("See also "),e("b",[this._v("jumblr_resume")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"arguments-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Arguments:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("(none)")]),t._v(" "),s("td"),t._v(" "),s("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Response:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("(none)")]),t._v(" "),s("td"),t._v(" "),s("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3","aria-hidden":"true"}},[this._v("#")]),this._v(" 📌 Examples:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./komodo-cli jumblr_pause\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),this._v("none"),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"jumblr-resume"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-resume","aria-hidden":"true"}},[this._v("#")]),this._v(" jumblr_resume")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("jumblr_resume")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("jumblr_resume")]),this._v(" method instructs Jumblr to resume the privacy-shielding process.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("See also "),e("b",[this._v("jumblr_pause")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"arguments-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Arguments:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("(none)")]),t._v(" "),s("td"),t._v(" "),s("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Response:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("(none)")]),t._v(" "),s("td"),t._v(" "),s("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"examples-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-4","aria-hidden":"true"}},[this._v("#")]),this._v(" 📌 Examples:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./komodo-cli jumblr_resume\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),this._v("none"),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"jumblr-secret"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jumblr-secret","aria-hidden":"true"}},[this._v("#")]),this._v(" jumblr_secret")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v('jumblr_secret "secretaddress"')])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The "),s("code",[t._v("jumblr_secret")]),t._v(" method indicates to Jumblr the final t destination address. This should be a separate t address that has no connection to the "),s("code",[t._v("wallet.dat")]),t._v(" file of your "),s("code",[t._v("jumblr_deposit")]),t._v(" address. Ideally, you should only access the final "),s("code",[t._v("jumblr_secret")]),t._v(" address via a separate node, and with other layers of privacy (VPN, Tor, etc.).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"arguments-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-4","aria-hidden":"true"}},[this._v("#")]),this._v(" Arguments:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v('"secretaddress"')]),t._v(" "),s("td",[t._v("(string, required)")]),t._v(" "),s("td",[t._v("the destination transparent address")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"response-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#response-4","aria-hidden":"true"}},[this._v("#")]),this._v(" Response:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Structure")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("(none)")]),t._v(" "),s("td"),t._v(" "),s("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"examples-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-5","aria-hidden":"true"}},[this._v("#")]),this._v(" 📌 Examples:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./komodo-cli jumbr_secret "),e("span",{attrs:{class:"token string"}},[this._v('"RCpMUZwxc3pWsgip5aj3Sy1cKkh86P3Tns"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[this._v("(")]),this._v("none"),e("span",{attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])}],!1,null,null,null);r.options.__file="jumblr.md";e.default=r.exports}}]);