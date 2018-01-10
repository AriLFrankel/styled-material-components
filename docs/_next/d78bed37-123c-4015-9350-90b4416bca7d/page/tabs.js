
          window.__NEXT_REGISTER_PAGE('/tabs', function() {
            var comp = module.exports=webpackJsonp([10],{302:function(e,t,n){e.exports=n(303)},303:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),o=n(304),i=a(o),s=n(306),u=a(s),c=n(37),d=a(c),f=function(e){var t=e.className;return r.default.createElement(d.default,{theme:{primary:"#03A9F4"}},r.default.createElement("div",{className:t},r.default.createElement("h1",null,"Tabs"),r.default.createElement("h2",null,"Fixed Tabs Default"),r.default.createElement("p",null,"By default the fixed tabs will take an equal width percent of their parent container and use the theme styles."),r.default.createElement(i.default,null,r.default.createElement(u.default,{label:"Tab One"},"First tab content is great"),r.default.createElement(u.default,{label:"Tab Two"},"Tab two has content as well"),r.default.createElement(u.default,{label:"Tab Three"},"Totally tabular")),r.default.createElement("br",null),r.default.createElement("br",null),r.default.createElement("h2",null,"Fixed Tabs Custom Styles"),r.default.createElement("p",null,"Tabs can accept props for:"),r.default.createElement("ul",null,r.default.createElement("li",null,"activeBackgroundColor - hexa or rgb string"),r.default.createElement("li",null,"passiveBackgroundColor - hexa or rgb string"),r.default.createElement("li",null,"activeFontColor - hexa or rgb string"),r.default.createElement("li",null,"passiveFontColor - hexa or rgb string"),r.default.createElement("li",null,"showInkbar - default is true, boolean"),r.default.createElement("li",null,"inkbarColor - default is accent theme color, or prop passed as a hexa or rgb string")),r.default.createElement(i.default,{width:"130",activeBackgroundColor:"#b5211e",passiveBackgroundColor:"#df4340",activeFontColor:"#fff",passiveFontColor:"#c2c2c2",showInkbar:!1},r.default.createElement(u.default,{label:"Tab One"},"First tab content is great"),r.default.createElement(u.default,{label:"Tab Two"},"Tab two has content as well"),r.default.createElement(u.default,{label:"Tab Three"},"Totally tabular"))))};t.default=f},304:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(11),r=a(l),o=n(6),i=a(o),s=n(7),u=a(s),c=n(12),d=a(c),f=n(13),p=a(f),h=n(2),b=a(h),m=n(0),v=a(m),g=n(1),x=a(g),C=n(305),k=a(C),w=(0,b.default)(["\n  position: relative;\n  margin: 0 auto;\n  text-transform: uppercase;\n  width: 100%;\n  color: ",";\n"],["\n  position: relative;\n  margin: 0 auto;\n  text-transform: uppercase;\n  width: 100%;\n  color: ",";\n"]),E=(0,b.default)(["\n  font-family: lato, sans-serif;\n  text-transform: none;\n"],["\n  font-family: lato, sans-serif;\n  text-transform: none;\n"]),T=(0,b.default)(["\n  background-color: transparent;\n"],["\n  background-color: transparent;\n"]),y=(0,b.default)([""],[""]),F=x.default.nav(w,function(e){return e.theme.textColors.primary}),_=x.default.div(E),B=x.default.div(T),W=function(e){function t(e){(0,i.default)(this,t);var n=(0,d.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));n.setTabWidth=function(){var e=n.props.width||parseInt(n.tabs.getBoundingClientRect().width/n.state.numTabs,10);n.setState({tabWidth:e})},n.updateSelectedIndex=function(e){return n.setState({selectedIndex:e})},n.getSelected=function(e){return n.state.selectedIndex===e};var a=[];m.Children.forEach(e.children,function(e){(0,m.isValidElement)(e)&&a.push(e)});var l=a.length;return n.state={selectedIndex:0,tabs:a,numTabs:l},n}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.setTabWidth),this.setTabWidth()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.setTabWidth)}},{key:"render",value:function(){var e=this,t=[],n=this.state.tabs.map(function(n,a){var l=e.getSelected(a);return t.push(n.props.children?v.default.createElement(_,null,n.props.children):void 0),(0,m.cloneElement)(n,{key:a,index:a,selected:l,tabWidth:e.state.tabWidth,numTabs:e.state.numTabs,onClick:e.updateSelectedIndex,activeBackgroundColor:e.props.activeBackgroundColor,passiveBackgroundColor:e.props.passiveBackgroundColor,activeFontColor:e.props.activeFontColor,passiveFontColor:e.props.passiveFontColor})});return v.default.createElement(F,{innerRef:function(t){return e.tabs=t},className:"smc-tab-bar"},v.default.createElement(B,{className:"smc-tab-navigation-container"},n),this.props.showInkbar?v.default.createElement(k.default,{numTabs:this.state.numTabs,selectedIndex:this.state.selectedIndex,tabWidth:this.state.tabWidth,inkbarColor:this.props.inkbarColor}):null,t[this.state.selectedIndex])}}]),t}(m.PureComponent);W.defaultProps={width:void 0,showInkbar:!0};var I=(0,x.default)(W)(y);t.default=I},305:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),r=a(l),o=n(0),i=a(o),s=n(1),u=a(s),c=(0,r.default)(["\n  position: relative;\n  bottom: 0;\n  left: ","px;\n  width: ","px;\n  height: 2px;\n  background-color: ",";\n"],["\n  position: relative;\n  bottom: 0;\n  left: ","px;\n  width: ","px;\n  height: 2px;\n  background-color: ",";\n"]),d=u.default.div(c,function(e){return e.selectedIndex*e.tabWidth},function(e){return e.tabWidth},function(e){return e.inkbarColor||e.theme.accent}),f=function(e){var t=e.numTabs,n=e.selectedIndex,a=e.tabWidth,l=e.inkbarColor;return i.default.createElement(d,{className:"smc-tab-bar-scroller",numTabs:t,selectedIndex:n,tabWidth:a,inkbarColor:l})};t.default=f},306:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(2),r=a(l),o=n(0),i=a(o),s=n(1),u=a(s),c=(0,r.default)(["",""],["",""]),d=(0,r.default)(["\n  font-family: lato, sans-serif;\n  position: relative;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  display: table-cell;\n  box-sizing: border-box;\n  min-height: 48px;\n  height: 48px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  overflow: hidden;\n  vertical-align: middle;\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  width: ",";\n  &:hover {\n    opacity: 1;\n  }\n"],["\n  font-family: lato, sans-serif;\n  position: relative;\n  font-size: 0.875rem;\n  font-weight: 500;\n  letter-spacing: 0.04em;\n  line-height: 1.5rem;\n  display: table-cell;\n  box-sizing: border-box;\n  min-height: 48px;\n  height: 48px;\n  text-align: center;\n  text-decoration: none;\n  white-space: nowrap;\n  cursor: pointer;\n  overflow: hidden;\n  vertical-align: middle;\n  color: ",";\n  background-color: ",";\n  opacity: ",";\n  width: ",";\n  &:hover {\n    opacity: 1;\n  }\n"]),f=(0,r.default)([""],[""]),p=(0,s.css)(c,function(e){return e.selected?e.activeBackgroundColor:e.passiveBackgroundColor}),h=(0,s.css)(c,function(e){return e.selected?e.theme.primary:e.theme.white}),b=(0,s.css)(c,function(e){return e.selected?e.activeFontColor:e.passiveFontColor}),m=(0,s.css)(c,function(e){return e.selected?e.theme.textColors.primary:e.theme.textColors.secondary}),v=u.default.a(d,function(e){return e.activeFontColor&&e.passiveFontColor?b:m},function(e){return e.activeBackgroundColor&&e.passiveBackgroundColor?p:h},function(e){return e.selected?1:.87},function(e){return e.tabWidth}),g=function(e){var t=e.label,n=e.icon,a=e.selected,l=e.onClick,r=e.index,o=e.tabWidth,s=e.activeBackgroundColor,u=e.passiveBackgroundColor,c=e.activeFontColor,d=e.passiveFontColor;return i.default.createElement(v,{className:"smc-tab",onClick:function(){return l(r)},selected:a,tabWidth:o+"px",activeBackgroundColor:s,passiveBackgroundColor:u,activeFontColor:c,passiveFontColor:d},n||null,t)},x=(0,u.default)(g)(f);t.default=x}},[302]);
            return { page: comp.default }
          })
        