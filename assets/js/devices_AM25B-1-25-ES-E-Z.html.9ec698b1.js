"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[58563],{62605:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>s,data:()=>l});var i=t(6254);const a={},s=(0,t(58079).A)(a,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[11]||(o[11]=(0,i.Lk)("h1",{id:"ewelink-am25b-1-25-es-e-z",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ewelink-am25b-1-25-es-e-z"},[(0,i.Lk)("span",null,"eWeLink AM25B-1-25-ES-E-Z")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"AM25B-1-25-ES-E-Z")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=eWeLink"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("eWeLink")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"AK Curtain")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"battery, voltage, cover (state, position), motor_direction, motor_mode, motor_clb_position, motor_clb_position_result")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/AM25B-1-25-ES-E-Z.png",alt:"eWeLink AM25B-1-25-ES-E-Z"})])],-1))])]),o[12]||(o[12]=(0,i.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,i.Lk)("span",null,"OTA updates")])],-1)),(0,i.Lk)("p",null,[o[8]||(o[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("OTA updates")]))),_:1}),o[9]||(o[9]=(0,i.eW)("."))]),o[13]||(o[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[10]||(o[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[14]||(o[14]=(0,i.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Reported battery voltage in millivolts. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="motor-direction-enum" tabindex="-1"><a class="header-anchor" href="#motor-direction-enum"><span>Motor direction (enum)</span></a></h3><p>Set the motor direction. Value can be found in the published state on the <code>motor_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_direction&quot;: NEW_VALUE}</code>. The possible values are: <code>forward</code>, <code>reverse</code>.</p><h3 id="motor-mode-enum" tabindex="-1"><a class="header-anchor" href="#motor-mode-enum"><span>Motor mode (enum)</span></a></h3><p>Motor Mode. Value can be found in the published state on the <code>motor_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>inching</code>, <code>continuou</code>.</p><h3 id="motor-clb-position-enum" tabindex="-1"><a class="header-anchor" href="#motor-clb-position-enum"><span>Motor clb position (enum)</span></a></h3><p>Motor Calibration By Position. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_clb_position&quot;: NEW_VALUE}</code>. The possible values are: <code>open</code>, <code>close</code>, <code>other</code>, <code>clear</code>.</p><h3 id="motor-clb-position-result-text" tabindex="-1"><a class="header-anchor" href="#motor-clb-position-result-text"><span>Motor clb position result (text)</span></a></h3><p>Motor Calibration Result. Value can be found in the published state on the <code>motor_clb_position_result</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p>',16))])}]]),l=JSON.parse('{"path":"/devices/AM25B-1-25-ES-E-Z.html","title":"eWeLink AM25B-1-25-ES-E-Z control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"eWeLink AM25B-1-25-ES-E-Z control via MQTT","description":"Integrate your eWeLink AM25B-1-25-ES-E-Z via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-01-03T20:04:59.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Motor direction (enum)","slug":"motor-direction-enum","link":"#motor-direction-enum","children":[]},{"level":3,"title":"Motor mode (enum)","slug":"motor-mode-enum","link":"#motor-mode-enum","children":[]},{"level":3,"title":"Motor clb position (enum)","slug":"motor-clb-position-enum","link":"#motor-clb-position-enum","children":[]},{"level":3,"title":"Motor clb position result (text)","slug":"motor-clb-position-result-text","link":"#motor-clb-position-result-text","children":[]}]}],"git":{"updatedTime":1743062877000},"filePathRelative":"devices/AM25B-1-25-ES-E-Z.md"}')}}]);