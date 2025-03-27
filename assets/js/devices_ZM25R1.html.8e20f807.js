"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57613],{71236:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>s,data:()=>r});var i=t(6254);const d={},s=(0,t(58079).A)(d,[["render",function(e,o){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[o[8]||(o[8]=(0,i.Lk)("h1",{id:"zemismart-zm25r1",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#zemismart-zm25r1"},[(0,i.Lk)("span",null,"Zemismart ZM25R1")])],-1)),(0,i.Lk)("table",null,[o[6]||(o[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[o[2]||(o[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZM25R1")],-1)),(0,i.Lk)("tr",null,[o[1]||(o[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Zemismart"},{default:(0,i.k6)((()=>o[0]||(o[0]=[(0,i.eW)("Zemismart")]))),_:1})])]),o[3]||(o[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Tubular motor")],-1)),o[4]||(o[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"cover (state, position), motor_direction, motor_working_mode, remote_pair, upper_stroke_limit, middle_stroke_limit, lower_stroke_limit")],-1)),o[5]||(o[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZM25R1.png",alt:"Zemismart ZM25R1"})])],-1))])]),o[9]||(o[9]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>o[7]||(o[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,i.Fv)('<ul><li><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="motor-direction-enum" tabindex="-1"><a class="header-anchor" href="#motor-direction-enum"><span>Motor direction (enum)</span></a></h3><p>Motor direction. Value can be found in the published state on the <code>motor_direction</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_direction&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>reversed</code>.</p><h3 id="motor-working-mode-enum" tabindex="-1"><a class="header-anchor" href="#motor-working-mode-enum"><span>Motor working mode (enum)</span></a></h3><p>Motor operating mode. Value can be found in the published state on the <code>motor_working_mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;motor_working_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>continuous</code>, <code>intermittently</code>.</p><h3 id="remote-pair-enum" tabindex="-1"><a class="header-anchor" href="#remote-pair-enum"><span>Remote pair (enum)</span></a></h3><p>Remote control pairing mode. Value can be found in the published state on the <code>remote_pair</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;remote_pair&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>.</p><h3 id="upper-stroke-limit-enum" tabindex="-1"><a class="header-anchor" href="#upper-stroke-limit-enum"><span>Upper stroke limit (enum)</span></a></h3><p>Set / Reset the upper stroke limit. Value can be found in the published state on the <code>upper_stroke_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;upper_stroke_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>RESET</code>.</p><h3 id="middle-stroke-limit-enum" tabindex="-1"><a class="header-anchor" href="#middle-stroke-limit-enum"><span>Middle stroke limit (enum)</span></a></h3><p>Set / Reset the middle stroke limit. Value can be found in the published state on the <code>middle_stroke_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;middle_stroke_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>RESET</code>.</p><h3 id="lower-stroke-limit-enum" tabindex="-1"><a class="header-anchor" href="#lower-stroke-limit-enum"><span>Lower stroke limit (enum)</span></a></h3><p>Set / Reset the lower stroke limit. Value can be found in the published state on the <code>lower_stroke_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;lower_stroke_limit&quot;: NEW_VALUE}</code>. The possible values are: <code>SET</code>, <code>RESET</code>.</p>',16))])}]]),r=JSON.parse('{"path":"/devices/ZM25R1.html","title":"Zemismart ZM25R1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Zemismart ZM25R1 control via MQTT","description":"Integrate your Zemismart ZM25R1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-01-31T19:37:45.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Motor direction (enum)","slug":"motor-direction-enum","link":"#motor-direction-enum","children":[]},{"level":3,"title":"Motor working mode (enum)","slug":"motor-working-mode-enum","link":"#motor-working-mode-enum","children":[]},{"level":3,"title":"Remote pair (enum)","slug":"remote-pair-enum","link":"#remote-pair-enum","children":[]},{"level":3,"title":"Upper stroke limit (enum)","slug":"upper-stroke-limit-enum","link":"#upper-stroke-limit-enum","children":[]},{"level":3,"title":"Middle stroke limit (enum)","slug":"middle-stroke-limit-enum","link":"#middle-stroke-limit-enum","children":[]},{"level":3,"title":"Lower stroke limit (enum)","slug":"lower-stroke-limit-enum","link":"#lower-stroke-limit-enum","children":[]}]}],"git":{"updatedTime":1743062877000},"filePathRelative":"devices/ZM25R1.md"}')}}]);