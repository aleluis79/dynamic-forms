import{Provider,renderStorybookUI}from"./chunk-E6ABNH5R.js";import{CHANNEL_CREATED,addons,createBrowserChannel}from"./chunk-E3WK6ZOZ.js";import"./chunk-XCO5HRLK.js";import"./chunk-FEE35O7J.js";import{scope}from"./chunk-S4VOIVUE.js";import"./chunk-XP3HGWTR.js";var ReactProvider=class extends Provider{constructor(){super();let channel=createBrowserChannel({page:"manager"});addons.setChannel(channel),channel.emit(CHANNEL_CREATED),this.addons=addons,this.channel=channel,scope.__STORYBOOK_ADDONS_CHANNEL__=channel}getElements(type){return this.addons.getElements(type)}getConfig(){return this.addons.getConfig()}handleAPI(api){this.addons.loadAddons(api)}},{document}=scope,rootEl=document.getElementById("root");setTimeout(()=>{renderStorybookUI(rootEl,new ReactProvider)},0);