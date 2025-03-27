"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[10320],{64064:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>d});var n=o(6254);const i={},a=(0,o(58079).A)(i,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"nue-3a-nue-zbflb",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#nue-3a-nue-zbflb"},[(0,n.Lk)("span",null,"Nue / 3A NUE-ZBFLB")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"NUE-ZBFLB")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=Nue%20%2F%203A"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Nue / 3A")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Smart fan light switch")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"switch (state), power_on_behavior")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/NUE-ZBFLB.png",alt:"Nue / 3A NUE-ZBFLB"})])],-1))])]),t[9]||(t[9]=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch-button-light-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-button-light-endpoint"><span>Switch (button_light endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_button_light</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_button_light&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_button_light&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_button_light&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_button_light&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-button-fan-high-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-button-fan-high-endpoint"><span>Switch (button_fan_high endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_button_fan_high</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_button_fan_high&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_button_fan_high&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_button_fan_high&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_button_fan_high&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-1" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-1"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-button-fan-med-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-button-fan-med-endpoint"><span>Switch (button_fan_med endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_button_fan_med</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_button_fan_med&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_button_fan_med&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_button_fan_med&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_button_fan_med&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-2" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-2"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="switch-button-fan-low-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-button-fan-low-endpoint"><span>Switch (button_fan_low endpoint)</span></a></h3><p>The current state of this switch is in the published state under the <code>state_button_fan_low</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_button_fan_low&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_button_fan_low&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_button_fan_low&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_button_fan_low&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off-3" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off-3"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum-button-light-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-button-light-endpoint"><span>Power-on behavior (enum, button_light endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_button_light</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_button_light&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_button_light&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-on-behavior-enum-button-fan-high-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-button-fan-high-endpoint"><span>Power-on behavior (enum, button_fan_high endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_button_fan_high</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_button_fan_high&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_button_fan_high&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-on-behavior-enum-button-fan-med-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-button-fan-med-endpoint"><span>Power-on behavior (enum, button_fan_med endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_button_fan_med</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_button_fan_med&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_button_fan_med&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-on-behavior-enum-button-fan-low-endpoint" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum-button-fan-low-endpoint"><span>Power-on behavior (enum, button_fan_low endpoint)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior_button_fan_low</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior_button_fan_low&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior_button_fan_low&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p>',26))])}]]),d=JSON.parse('{"path":"/devices/NUE-ZBFLB.html","title":"Nue / 3A NUE-ZBFLB control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Nue / 3A NUE-ZBFLB control via MQTT","description":"Integrate your Nue / 3A NUE-ZBFLB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-09-30T20:52:56.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch (button_light endpoint)","slug":"switch-button-light-endpoint","link":"#switch-button-light-endpoint","children":[]},{"level":3,"title":"Switch (button_fan_high endpoint)","slug":"switch-button-fan-high-endpoint","link":"#switch-button-fan-high-endpoint","children":[]},{"level":3,"title":"Switch (button_fan_med endpoint)","slug":"switch-button-fan-med-endpoint","link":"#switch-button-fan-med-endpoint","children":[]},{"level":3,"title":"Switch (button_fan_low endpoint)","slug":"switch-button-fan-low-endpoint","link":"#switch-button-fan-low-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, button_light endpoint)","slug":"power-on-behavior-enum-button-light-endpoint","link":"#power-on-behavior-enum-button-light-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, button_fan_high endpoint)","slug":"power-on-behavior-enum-button-fan-high-endpoint","link":"#power-on-behavior-enum-button-fan-high-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, button_fan_med endpoint)","slug":"power-on-behavior-enum-button-fan-med-endpoint","link":"#power-on-behavior-enum-button-fan-med-endpoint","children":[]},{"level":3,"title":"Power-on behavior (enum, button_fan_low endpoint)","slug":"power-on-behavior-enum-button-fan-low-endpoint","link":"#power-on-behavior-enum-button-fan-low-endpoint","children":[]}]}],"git":{"updatedTime":1743062877000},"filePathRelative":"devices/NUE-ZBFLB.md"}')}}]);