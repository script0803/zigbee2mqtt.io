"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[16029],{62670:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>n});var a=o(6254);const r={},i=(0,o(58079).A)(r,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[8]||(t[8]=(0,a.Lk)("h1",{id:"tongou-towsmr1",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tongou-towsmr1"},[(0,a.Lk)("span",null,"Tongou TOWSMR1")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"TOWSMR1")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Tongou"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Tongou")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Single-phase multifunction RCBO (DIN Module)")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), temperature, current, power, voltage, energy, leakage_current, event, over_current_setting, over_current_threshold, over_voltage_setting, over_voltage_threshold, under_voltage_setting, under_voltage_threshold, leakage_setting, leakage_threshold, temperature_setting, temperature_threshold, over_power_setting, over_power_threshold, auto_reclosing, restore_default")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TOWSMR1.png",alt:"Tongou TOWSMR1"})])],-1))])]),t[9]||(t[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,a.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="leakage-current-numeric" tabindex="-1"><a class="header-anchor" href="#leakage-current-numeric"><span>Leakage current (numeric)</span></a></h3><p>Current leakage. Value can be found in the published state on the <code>leakage_current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mA</code>.</p><h3 id="event-enum" tabindex="-1"><a class="header-anchor" href="#event-enum"><span>Event (enum)</span></a></h3><p>Last event of the device. Value can be found in the published state on the <code>event</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>normal</code>, <code>over_current_trip</code>, <code>over_power_trip</code>, <code>high_temp_trip</code>, <code>over_voltage_trip</code>, <code>under_voltage_trip</code>, <code>over_current_alarm</code>, <code>over_power_alarm</code>, <code>high_temp_alarm</code>, <code>over_voltage_alarm</code>, <code>under_voltage_alarm</code>, <code>remote_on</code>, <code>remote_off</code>, <code>manual_on</code>, <code>manual_off</code>, <code>leakage_trip</code>, <code>leakage_alarm</code>, <code>restore_default</code>, <code>automatic_closing</code>, <code>electricity_shortage</code>, <code>electricity_shortage_alarm</code>, <code>timing_switch_On</code>, <code>timing_switch_off</code>.</p><h3 id="over-current-setting-enum" tabindex="-1"><a class="header-anchor" href="#over-current-setting-enum"><span>Over current setting (enum)</span></a></h3><p>Over current setting. Value can be found in the published state on the <code>over_current_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="over-current-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-current-threshold-numeric"><span>Over current threshold (numeric)</span></a></h3><p>Setup the value on the device. Value can be found in the published state on the <code>over_current_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>40</code>. The unit of this value is <code>A</code>.</p><h3 id="over-voltage-setting-enum" tabindex="-1"><a class="header-anchor" href="#over-voltage-setting-enum"><span>Over voltage setting (enum)</span></a></h3><p>Over voltage setting. Value can be found in the published state on the <code>over_voltage_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="over-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-voltage-threshold-numeric"><span>Over voltage threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>over_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>240</code> and the maximum value is <code>295</code>. The unit of this value is <code>V</code>.</p><h3 id="under-voltage-setting-enum" tabindex="-1"><a class="header-anchor" href="#under-voltage-setting-enum"><span>Under voltage setting (enum)</span></a></h3><p>Under voltage setting. Value can be found in the published state on the <code>under_voltage_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="under-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#under-voltage-threshold-numeric"><span>Under voltage threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>under_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>145</code> and the maximum value is <code>220</code>. The unit of this value is <code>V</code>.</p><h3 id="leakage-setting-enum" tabindex="-1"><a class="header-anchor" href="#leakage-setting-enum"><span>Leakage setting (enum)</span></a></h3><p>Leakage setting. Value can be found in the published state on the <code>leakage_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;leakage_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="leakage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#leakage-threshold-numeric"><span>Leakage threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>leakage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;leakage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>30</code> and the maximum value is <code>100</code>. The unit of this value is <code>mA</code>.</p><h3 id="temperature-setting-enum" tabindex="-1"><a class="header-anchor" href="#temperature-setting-enum"><span>Temperature setting (enum)</span></a></h3><p>Temperature setting. Value can be found in the published state on the <code>temperature_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="temperature-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-threshold-numeric"><span>Temperature threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>temperature_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>-25</code> and the maximum value is <code>100</code>. The unit of this value is <code>°C</code>.</p><h3 id="over-power-setting-enum" tabindex="-1"><a class="header-anchor" href="#over-power-setting-enum"><span>Over power setting (enum)</span></a></h3><p>Over power setting. Value can be found in the published state on the <code>over_power_setting</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_power_setting&quot;: NEW_VALUE}</code>. The possible values are: <code>Ignore</code>, <code>Alarm</code>, <code>Trip</code>.</p><h3 id="over-power-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-power-threshold-numeric"><span>Over power threshold (numeric)</span></a></h3><p>Setup value on the device. Value can be found in the published state on the <code>over_power_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_power_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>25000</code>. The unit of this value is <code>W</code>.</p><h3 id="auto-reclosing-binary" tabindex="-1"><a class="header-anchor" href="#auto-reclosing-binary"><span>Auto reclosing (binary)</span></a></h3><p>When the circuit breaker trips due to voltage protection, it will automatically close when the circuit voltage returns to normal. Value can be found in the published state on the <code>auto_reclosing</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_reclosing&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> auto reclosing is ON, if <code>OFF</code> OFF.</p><h3 id="restore-default-binary" tabindex="-1"><a class="header-anchor" href="#restore-default-binary"><span>Restore default (binary)</span></a></h3><p>Turn ON to restore default settings. Value can be found in the published state on the <code>restore_default</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;restore_default&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> restore default is ON, if <code>OFF</code> OFF.</p>',46))])}]]),n=JSON.parse('{"path":"/devices/TOWSMR1.html","title":"Tongou TOWSMR1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tongou TOWSMR1 control via MQTT","description":"Integrate your Tongou TOWSMR1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-06-30T19:12:33.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Leakage current (numeric)","slug":"leakage-current-numeric","link":"#leakage-current-numeric","children":[]},{"level":3,"title":"Event (enum)","slug":"event-enum","link":"#event-enum","children":[]},{"level":3,"title":"Over current setting (enum)","slug":"over-current-setting-enum","link":"#over-current-setting-enum","children":[]},{"level":3,"title":"Over current threshold (numeric)","slug":"over-current-threshold-numeric","link":"#over-current-threshold-numeric","children":[]},{"level":3,"title":"Over voltage setting (enum)","slug":"over-voltage-setting-enum","link":"#over-voltage-setting-enum","children":[]},{"level":3,"title":"Over voltage threshold (numeric)","slug":"over-voltage-threshold-numeric","link":"#over-voltage-threshold-numeric","children":[]},{"level":3,"title":"Under voltage setting (enum)","slug":"under-voltage-setting-enum","link":"#under-voltage-setting-enum","children":[]},{"level":3,"title":"Under voltage threshold (numeric)","slug":"under-voltage-threshold-numeric","link":"#under-voltage-threshold-numeric","children":[]},{"level":3,"title":"Leakage setting (enum)","slug":"leakage-setting-enum","link":"#leakage-setting-enum","children":[]},{"level":3,"title":"Leakage threshold (numeric)","slug":"leakage-threshold-numeric","link":"#leakage-threshold-numeric","children":[]},{"level":3,"title":"Temperature setting (enum)","slug":"temperature-setting-enum","link":"#temperature-setting-enum","children":[]},{"level":3,"title":"Temperature threshold (numeric)","slug":"temperature-threshold-numeric","link":"#temperature-threshold-numeric","children":[]},{"level":3,"title":"Over power setting (enum)","slug":"over-power-setting-enum","link":"#over-power-setting-enum","children":[]},{"level":3,"title":"Over power threshold (numeric)","slug":"over-power-threshold-numeric","link":"#over-power-threshold-numeric","children":[]},{"level":3,"title":"Auto reclosing (binary)","slug":"auto-reclosing-binary","link":"#auto-reclosing-binary","children":[]},{"level":3,"title":"Restore default (binary)","slug":"restore-default-binary","link":"#restore-default-binary","children":[]}]}],"git":{"updatedTime":1743062877000},"filePathRelative":"devices/TOWSMR1.md"}')}}]);