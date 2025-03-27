"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[52027],{90533:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>n});var a=o(6254);const c={},i=(0,o(58079).A)(c,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"neo-nas-wv05b2",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#neo-nas-wv05b2"},[(0,a.Lk)("span",null,"NEO NAS-WV05B2")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"NAS-WV05B2")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=NEO"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("NEO")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart sprinkler timer")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), status, countdown, countdown_left, water_total, water_current, current_switch, reset_switch, child_lock, battery")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NAS-WV05B2.png",alt:"NEO NAS-WV05B2"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="status-enum" tabindex="-1"><a class="header-anchor" href="#status-enum"><span>Status (enum)</span></a></h3><p>Status. Value can be found in the published state on the <code>status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>off</code>, <code>auto</code>, <code>disabled</code>, <code>app_manual</code>, <code>key_control</code>.</p><h3 id="countdown-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-numeric"><span>Countdown (numeric)</span></a></h3><p>Count down. Value can be found in the published state on the <code>countdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;countdown&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id="countdown-left-numeric" tabindex="-1"><a class="header-anchor" href="#countdown-left-numeric"><span>Countdown left (numeric)</span></a></h3><p>Countdown left time. Value can be found in the published state on the <code>countdown_left</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>1</code> and the maximum value is <code>60</code>. The unit of this value is <code>min</code>.</p><h3 id="water-total-numeric" tabindex="-1"><a class="header-anchor" href="#water-total-numeric"><span>Water total (numeric)</span></a></h3><p>Water total (gal). Value can be found in the published state on the <code>water_total</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>gal</code>.</p><h3 id="water-current-numeric" tabindex="-1"><a class="header-anchor" href="#water-current-numeric"><span>Water current (numeric)</span></a></h3><p>Current water flow (gal/min). Value can be found in the published state on the <code>water_current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>gal/min</code>.</p><h3 id="current-switch-binary" tabindex="-1"><a class="header-anchor" href="#current-switch-binary"><span>Current switch (binary)</span></a></h3><p>Flow switch. Value can be found in the published state on the <code>current_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> current switch is ON, if <code>OFF</code> OFF.</p><h3 id="reset-switch-binary" tabindex="-1"><a class="header-anchor" href="#reset-switch-binary"><span>Reset switch (binary)</span></a></h3><p>Total flow reset switch. Value can be found in the published state on the <code>reset_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;reset_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> reset switch is ON, if <code>OFF</code> OFF.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Child lock. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> child lock is ON, if <code>OFF</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>',21))])}]]),n=JSON.parse('{"path":"/devices/NAS-WV05B2.html","title":"NEO NAS-WV05B2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"NEO NAS-WV05B2 control via MQTT","description":"Integrate your NEO NAS-WV05B2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-08-01T18:23:33.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Status (enum)","slug":"status-enum","link":"#status-enum","children":[]},{"level":3,"title":"Countdown (numeric)","slug":"countdown-numeric","link":"#countdown-numeric","children":[]},{"level":3,"title":"Countdown left (numeric)","slug":"countdown-left-numeric","link":"#countdown-left-numeric","children":[]},{"level":3,"title":"Water total (numeric)","slug":"water-total-numeric","link":"#water-total-numeric","children":[]},{"level":3,"title":"Water current (numeric)","slug":"water-current-numeric","link":"#water-current-numeric","children":[]},{"level":3,"title":"Current switch (binary)","slug":"current-switch-binary","link":"#current-switch-binary","children":[]},{"level":3,"title":"Reset switch (binary)","slug":"reset-switch-binary","link":"#reset-switch-binary","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]}]}],"git":{"updatedTime":1743062877000},"filePathRelative":"devices/NAS-WV05B2.md"}')}}]);