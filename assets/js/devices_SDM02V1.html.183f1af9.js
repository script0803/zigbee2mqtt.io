"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1799],{69349:(e,r,o)=>{o.r(r),o.d(r,{comp:()=>c,data:()=>i});var t=o(6254);const n={},c=(0,o(58079).A)(n,[["render",function(e,r){const o=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[r[8]||(r[8]=(0,t.Lk)("h1",{id:"tuya-sdm02v1",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#tuya-sdm02v1"},[(0,t.Lk)("span",null,"Tuya SDM02V1")])],-1)),(0,t.Lk)("table",null,[r[6]||(r[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[r[2]||(r[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"SDM02V1")],-1)),(0,t.Lk)("tr",null,[r[1]||(r[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(o,{to:"/supported-devices/#v=Tuya"},{default:(0,t.k6)((()=>r[0]||(r[0]=[(0,t.eW)("Tuya")]))),_:1})])]),r[3]||(r[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Smart energy monitor for 2P+N system")],-1)),r[4]||(r[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"voltage_l1, voltage_l2, power_l1, power_l2, current_l1, current_l2, energy, produced_energy, power_factor, power, ac_frequency, energy_l1, energy_l2, energy_produced_l1, energy_produced_l2, power_factor_l1, power_factor_l2")],-1)),r[5]||(r[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SDM02V1.png",alt:"Tuya SDM02V1"})])],-1))])]),r[9]||(r[9]=(0,t.Lk)("h2",{id:"options",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#options"},[(0,t.Lk)("span",null,"Options")])],-1)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>r[7]||(r[7]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),r[10]||(r[10]=(0,t.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>ac_frequency_calibration</code>: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>ac_frequency_precision</code>: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="voltage-l1-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-l1-numeric"><span>Voltage l1 (numeric)</span></a></h3><p>Measured electrical potential value (phase L1). Value can be found in the published state on the <code>voltage_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-l2-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-l2-numeric"><span>Voltage l2 (numeric)</span></a></h3><p>Measured electrical potential value (phase L2). Value can be found in the published state on the <code>voltage_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-l1-numeric" tabindex="-1"><a class="header-anchor" href="#power-l1-numeric"><span>Power l1 (numeric)</span></a></h3><p>Instantaneous measured power (phase L1). Value can be found in the published state on the <code>power_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-l2-numeric" tabindex="-1"><a class="header-anchor" href="#power-l2-numeric"><span>Power l2 (numeric)</span></a></h3><p>Instantaneous measured power (phase L2). Value can be found in the published state on the <code>power_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-l1-numeric" tabindex="-1"><a class="header-anchor" href="#current-l1-numeric"><span>Current l1 (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase L1). Value can be found in the published state on the <code>current_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-l2-numeric" tabindex="-1"><a class="header-anchor" href="#current-l2-numeric"><span>Current l2 (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase L2). Value can be found in the published state on the <code>current_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Total forward active energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="produced-energy-numeric" tabindex="-1"><a class="header-anchor" href="#produced-energy-numeric"><span>Produced energy (numeric)</span></a></h3><p>Total reverse active energy. Value can be found in the published state on the <code>produced_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-factor-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-numeric"><span>Power factor (numeric)</span></a></h3><p>Total power factor. Value can be found in the published state on the <code>power_factor</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Total active power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#ac-frequency-numeric"><span>AC frequency (numeric)</span></a></h3><p>Measured electrical AC frequency. Value can be found in the published state on the <code>ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hz</code>.</p><h3 id="energy-l1-numeric" tabindex="-1"><a class="header-anchor" href="#energy-l1-numeric"><span>Energy l1 (numeric)</span></a></h3><p>Sum of consumed energy (phase L1). Value can be found in the published state on the <code>energy_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-l2-numeric" tabindex="-1"><a class="header-anchor" href="#energy-l2-numeric"><span>Energy l2 (numeric)</span></a></h3><p>Sum of consumed energy (phase L2). Value can be found in the published state on the <code>energy_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-l1-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-l1-numeric"><span>Energy produced l1 (numeric)</span></a></h3><p>Sum of produced energy (phase L1). Value can be found in the published state on the <code>energy_produced_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-l2-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-l2-numeric"><span>Energy produced l2 (numeric)</span></a></h3><p>Sum of produced energy (phase L2). Value can be found in the published state on the <code>energy_produced_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-factor-l1-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-l1-numeric"><span>Power factor l1 (numeric)</span></a></h3><p>Instantaneous measured power factor (phase L1). Value can be found in the published state on the <code>power_factor_l1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-l2-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-l2-numeric"><span>Power factor l2 (numeric)</span></a></h3><p>Instantaneous measured power factor (phase L2). Value can be found in the published state on the <code>power_factor_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p>',36))])}]]),i=JSON.parse('{"path":"/devices/SDM02V1.html","title":"Tuya SDM02V1 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya SDM02V1 control via MQTT","description":"Integrate your Tuya SDM02V1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-01T19:01:34.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Voltage l1 (numeric)","slug":"voltage-l1-numeric","link":"#voltage-l1-numeric","children":[]},{"level":3,"title":"Voltage l2 (numeric)","slug":"voltage-l2-numeric","link":"#voltage-l2-numeric","children":[]},{"level":3,"title":"Power l1 (numeric)","slug":"power-l1-numeric","link":"#power-l1-numeric","children":[]},{"level":3,"title":"Power l2 (numeric)","slug":"power-l2-numeric","link":"#power-l2-numeric","children":[]},{"level":3,"title":"Current l1 (numeric)","slug":"current-l1-numeric","link":"#current-l1-numeric","children":[]},{"level":3,"title":"Current l2 (numeric)","slug":"current-l2-numeric","link":"#current-l2-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Produced energy (numeric)","slug":"produced-energy-numeric","link":"#produced-energy-numeric","children":[]},{"level":3,"title":"Power factor (numeric)","slug":"power-factor-numeric","link":"#power-factor-numeric","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"AC frequency (numeric)","slug":"ac-frequency-numeric","link":"#ac-frequency-numeric","children":[]},{"level":3,"title":"Energy l1 (numeric)","slug":"energy-l1-numeric","link":"#energy-l1-numeric","children":[]},{"level":3,"title":"Energy l2 (numeric)","slug":"energy-l2-numeric","link":"#energy-l2-numeric","children":[]},{"level":3,"title":"Energy produced l1 (numeric)","slug":"energy-produced-l1-numeric","link":"#energy-produced-l1-numeric","children":[]},{"level":3,"title":"Energy produced l2 (numeric)","slug":"energy-produced-l2-numeric","link":"#energy-produced-l2-numeric","children":[]},{"level":3,"title":"Power factor l1 (numeric)","slug":"power-factor-l1-numeric","link":"#power-factor-l1-numeric","children":[]},{"level":3,"title":"Power factor l2 (numeric)","slug":"power-factor-l2-numeric","link":"#power-factor-l2-numeric","children":[]}]}],"git":{"updatedTime":1743062877000},"filePathRelative":"devices/SDM02V1.md"}')}}]);