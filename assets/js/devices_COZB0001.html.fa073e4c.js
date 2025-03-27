"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[62121],{62214:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>i});var o=a(6254);const s={},n=(0,a(58079).A)(s,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[11]||(t[11]=(0,o.Lk)("h1",{id:"eurotronic-cozb0001",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#eurotronic-cozb0001"},[(0,o.Lk)("span",null,"Eurotronic COZB0001")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"COZB0001")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Eurotronic"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Eurotronic")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Comet Zigbee wireless heater thermostat")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, child_lock, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration, pi_heating_demand), trv_mode, valve_position, mirror_display")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/COZB0001.png",alt:"Eurotronic COZB0001"})])],-1))])]),t[12]||(t[12]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>After pairing, the LED display shows an animation and the thermostat moves to the mounting position. Subsequently, the LED display shows “Ad”. When you have mounted the Comet Zigbee on the valve, continue with the adaptation. Press and hold the two arrow keys for 3 seconds. After the adaptions is completed, the target temperature is shown.</p><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset"><span>Factory reset</span></a></h3><p>Press and hold the button in the battery compartment of your Comet Zigbee for at least 10 seconds. From the 5th second on, a counter will run on the thermostat’s display. Keep the button pressed until the 10 appears on your Comet Zigbee. Then “Ad” will be shown again on the display and the controller will be in pairing mode.</p><h3 id="recommendation" tabindex="-1"><a class="header-anchor" href="#recommendation"><span>Recommendation</span></a></h3><p>This device sends multiple messages in short time period with the same payload. It’s worth setting debounce option to throttle them without losing unique action payloads.</p><p>E.g. (devices.yaml)</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device</span>\n<span class="line">    <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">0.5</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="controlling" tabindex="-1"><a class="header-anchor" href="#controlling"><span>Controlling</span></a></h3><p><em>Current heating setpoint</em></p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;current_heating_setpoint&quot;</span><span class="token operator">:</span> <span class="token number">21.5</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Current heating setpoint is also modified when occupied or unoccupied heating setpoint is set.</p><p><em>System mode</em></p><p>The system mode will be either <code>off</code>, <code>auto</code>, or <code>heat</code>. When set to <code>heat</code> the boost host flags will be set, when using <code>off</code> the window_open host flag will be set (and off will be displayed on the display).</p><p><em>Eurotronic host flags</em></p><p>The <code>eurotronic_host_flags</code> property contains an object with a true/false field for each host option.</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;eurotronic_host_flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;mirror_display&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;window_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;child_protection&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can toggle these flags by publishing a message to the <code>set</code> MQTT topic containing <code>eurotronic_host_flags</code>. e.g. enabling the display mirroring:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span><span class="token property">&quot;eurotronic_host_flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;mirror_display&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Note that <code>true</code> or <code>false</code> do not have quotes around them!</strong></p><p><em>Eurotronic system mode</em></p><p><strong>This is deprecated in favor of eurotronic_host_flags, but will still work for now.</strong></p><p>This is a bitmap encoded field to set several device specific features. Please remind it is not possible to set single bits, always the full bitmap is written. Bit 0 doesn&#39;t seem to be writeable, it is always reported as set, so expect your written value + 1 to be reported.</p><table><thead><tr><th>Bit</th><th>Position</th></tr></thead><tbody><tr><td>0</td><td>unknown (default 1)</td></tr><tr><td>1</td><td>Mirror Display</td></tr><tr><td>2</td><td>Boost Mode (Always ON)</td></tr><tr><td>3</td><td>unknown</td></tr><tr><td>4</td><td>unknown</td></tr><tr><td>5</td><td>Window Open Mode (Always OFF)</td></tr><tr><td>6</td><td>unknown</td></tr><tr><td>7</td><td>Child Protection</td></tr></tbody></table><p>Examples for eurotronic_system_mode:</p><p>Mirror display: (Reported as 3)</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;eurotronic_system_mode&quot;</span><span class="token operator">:</span> <span class="token number">2</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>External window open, device display shows &quot;OFF&quot;: (Reported as 33)</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;eurotronic_system_mode&quot;</span><span class="token operator">:</span> <span class="token number">32</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Mirror display and set child protection: (Reported as 131)</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;eurotronic_system_mode&quot;</span><span class="token operator">:</span> <span class="token number">130</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Eurotronic error status</em></p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;eurotronic_error_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This field is a readonly bitmap</p><table><thead><tr><th>Bit</th><th>Position</th></tr></thead><tbody><tr><td>0</td><td>reserved</td></tr><tr><td>1</td><td>reserved</td></tr><tr><td>2</td><td>reserved</td></tr><tr><td>3</td><td>Valve adaption failed (E1)</td></tr><tr><td>4</td><td>Valve movement too slow (E2)</td></tr><tr><td>5</td><td>Valve not moving/blocked (E3)</td></tr><tr><td>6</td><td>reserved</td></tr><tr><td>7</td><td>reserved</td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',37)),(0,o.Lk)("p",null,[t[8]||(t[8]=(0,o.eW)("This device supports OTA updates, for more information see ")),(0,o.bF)(a,{to:"/guide/usage/ota_updates.html"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,o.eW)("."))]),t[13]||(t[13]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[10]||(t[10]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,o.Fv)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>, <code>local_temperature_calibration</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>8</code> and <code>28</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.The minimal value is <code>-12.8</code> and the maximum value is <code>12.7</code> with a step size of <code>0.1</code>.</li></ul><h3 id="trv-mode-enum" tabindex="-1"><a class="header-anchor" href="#trv-mode-enum"><span>Trv mode (enum)</span></a></h3><p>Select between direct control of the valve via the <code>valve_position</code> or automatic control of the valve based on the <code>current_heating_setpoint</code>. For manual control set the value to 1, for automatic control set the value to 2 (the default). When switched to manual mode the display shows a value from 0 (valve closed) to 100 (valve fully open) and the buttons on the device are disabled.. Value can be found in the published state on the <code>trv_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;trv_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trv_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>1</code>, <code>2</code>.</p><h3 id="valve-position-numeric" tabindex="-1"><a class="header-anchor" href="#valve-position-numeric"><span>Valve position (numeric)</span></a></h3><p>Directly control the radiator valve when <code>trv_mode</code> is set to 1. The values range from 0 (valve closed) to 255 (valve fully open). Value can be found in the published state on the <code>valve_position</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_position&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_position&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="mirror-display-binary" tabindex="-1"><a class="header-anchor" href="#mirror-display-binary"><span>Mirror display (binary)</span></a></h3><p>Mirror display of the thermostat. Useful when it is mounted in a way where the display is presented upside down.. Value can be found in the published state on the <code>mirror_display</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mirror_display&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mirror_display&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> mirror display is ON, if <code>OFF</code> OFF.</p>',15))])}]]),i=JSON.parse('{"path":"/devices/COZB0001.html","title":"Eurotronic COZB0001 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Eurotronic COZB0001 control via MQTT","description":"Integrate your Eurotronic COZB0001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-12T12:58:50.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Factory reset","slug":"factory-reset","link":"#factory-reset","children":[]},{"level":3,"title":"Recommendation","slug":"recommendation","link":"#recommendation","children":[]},{"level":3,"title":"Controlling","slug":"controlling","link":"#controlling","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Trv mode (enum)","slug":"trv-mode-enum","link":"#trv-mode-enum","children":[]},{"level":3,"title":"Valve position (numeric)","slug":"valve-position-numeric","link":"#valve-position-numeric","children":[]},{"level":3,"title":"Mirror display (binary)","slug":"mirror-display-binary","link":"#mirror-display-binary","children":[]}]}],"git":{"updatedTime":1743062877000},"filePathRelative":"devices/COZB0001.md"}')}}]);